import {
  Avatar,
  Badge,
  Button,
  Dropdown,
  Flex,
  Input,
  Space,
  message,
} from 'antd'
import { SearchProps } from 'antd/es/input/Search'
import type { MenuProps } from 'antd'
import {
  NotificationOutlined,
  CaretDownFilled,
  UserOutlined,
  UserSwitchOutlined,
  UserAddOutlined,
  ThunderboltOutlined,
} from '@ant-design/icons'
import './style.css'
import { Link } from 'react-router-dom'

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
              icon={<NotificationOutlined style={{ color: 'black' }} />}
              style={{ cursor: 'pointer', background: '#F4F9FD' }}
            />
          </Badge>
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
