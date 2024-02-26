import { useState } from 'react'
import {
  CalendarOutlined,
  FlagOutlined,
  HomeOutlined,
  MessageOutlined,
  ProjectOutlined,
  MenuFoldOutlined,
  UserOutlined,
  UserSwitchOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons'
import { Button, Layout, Menu, Modal, Typography, theme } from 'antd'
import { Link } from 'react-router-dom'
import type { MenuProps } from 'antd'
import './style.css'
import Support from '../../Layout/Dashboard/Model/support'

const Siderbar = () => {
  const { Text } = Typography
  const [collapsed, setCollapsed] = useState(false)
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken()

  const [isModalOpen, setIsModalOpen] = useState(false)

  const showModal = () => {
    setIsModalOpen(true)
  }

  const handleOk = () => {
    setIsModalOpen(false)
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }

  const items: MenuProps['items'] = [
    {
      key: '1',
      icon: <HomeOutlined />,
      label: <Link to={'/dashboard'}>Dashboard</Link>,
    },
    {
      key: '2',
      icon: <ProjectOutlined />,
      label: <Link to={'/project'}>Projects</Link>,
    },
    {
      key: '3',
      icon: <CalendarOutlined />,
      label: <Link to={'/calender'}>Calendar</Link>,
    },
    {
      key: '4',
      icon: <FlagOutlined />,
      label: <Link to={'/'}>Vacations</Link>,
    },
    {
      key: '5',
      icon: <UserOutlined />,
      label: <Link to={'/'}>Employees</Link>,
    },
    {
      key: '6',
      icon: <MessageOutlined />,
      label: <Link to={'/'}>Messenger</Link>,
    },
    {
      key: '7',
      icon: <UserSwitchOutlined />,
      label: <Link to={'/'}>Info Portal</Link>,
    },
    {
      key: '8',
      icon: <UserSwitchOutlined />,
      label: (
        <Text style={{ color: 'white' }} onClick={showModal}>
          Support
        </Text>
      ),
    },
  ]

  const { Sider } = Layout
  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      width={250}
      className='siderBar'
      // style={{ height: '1450px' }}
    >
      <div className='logo__side'>
        {!collapsed ? (
          <div className='logo'>ANT HUY</div>
        ) : (
          <div className='logo'>A</div>
        )}
        <Button
          type='text'
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => setCollapsed(!collapsed)}
          style={{
            fontSize: '16px',
            color: colorBgContainer,
          }}
        />
      </div>
      <Menu
        theme='dark'
        mode='inline'
        defaultSelectedKeys={['1']}
        items={items}
        className='menu'
      />
      <Modal
        title='Need some Help?'
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}>
        <Support />
      </Modal>
    </Sider>
  )
}

export default Siderbar
