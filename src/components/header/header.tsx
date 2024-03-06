import {
  Avatar,
  Badge,
  Button,
  Dropdown,
  Flex,
  Input,
  Modal,
  Space,
  message,
} from 'antd'
import { SearchProps } from 'antd/es/input/Search'
import type { MenuProps } from 'antd'
import {
  BellOutlined,
  CaretDownFilled,
  UserOutlined,
  UserSwitchOutlined,
  UserAddOutlined,
  ThunderboltOutlined,
} from '@ant-design/icons'
import './style.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import ModelNotification from './model'

const HeaderC = () => {
  const onSearch: SearchProps['onSearch'] = (value, _e, info) =>
    console.log(info?.source, value)

  const handleMenuClick: MenuProps['onClick'] = (e) => {
    message.info('Click on menu item.')
    console.log('click', e)
  }
  const { Search } = Input
  const items: MenuProps['items'] = [
    {
      label: <Link to={'/myprofile'}>User Info</Link>,
      key: '1',
      icon: <UserOutlined />,
    },
    {
      label: 'Update Info',
      key: '2',
      icon: <UserAddOutlined />,
    },
    {
      label: 'BuLZ',
      key: '3',
      icon: <ThunderboltOutlined />,
    },
    {
      key: '4',
      icon: <UserSwitchOutlined />,
      label: <Link to={'/'}>Logout</Link>,
    },
  ]
  const menuProps = {
    items,
    onClick: handleMenuClick,
  }

  const [modal2Open, setModal2Open] = useState(false)

  return (
    <>
      <Flex align='center' justify='space-between'>
        <div className='form__search'>
          <Search
            placeholder='input search text'
            onSearch={onSearch}
            style={{ width: 412, height: 48 }}
            className='search'
            size='large'
          />
        </div>
        <Flex gap={40} align='center'>
          <Badge count={5}>
            <Avatar
              shape='square'
              size='large'
              icon={<BellOutlined style={{ color: 'black' }} />}
              onClick={() => {
                setModal2Open(true)
              }}
              style={{ cursor: 'pointer', background: '#F4F9FD' }}
            />
          </Badge>
          <Modal
            title='Notifications'
            style={{ top: 20, left: 650 }}
            width={'28%'}
            open={modal2Open}
            onOk={() => setModal2Open(false)}
            onCancel={() => setModal2Open(false)}
            bodyStyle={{
              overflowY: 'auto',
              maxHeight: 'calc(100vh - 200px)',
              margin: 'auto',
            }}>
            <ModelNotification />
          </Modal>
          <Dropdown menu={menuProps}>
            <Button size='middle' className='btn'>
              <Space>
                <Avatar shape='circle' icon={<UserOutlined />} />
                Evan Yates
                <CaretDownFilled />
              </Space>
            </Button>
          </Dropdown>
        </Flex>
      </Flex>
    </>
  )
}

export default HeaderC
