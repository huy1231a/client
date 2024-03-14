import { useEffect, useState } from 'react'
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
import { Link, useLocation } from 'react-router-dom'
import type { MenuProps } from 'antd'
import './style.css'
import Support from '../../Layout/Dashboard/Model/support'

const Siderbar = () => {
  const { Text } = Typography
  const [collapsed, setCollapsed] = useState(false)

  const [key, setSelectKey] = useState('') // Store the active key

  // Use the `useLocation` hook to access the current URL
  const location = useLocation()

  const {
    token: { colorBgContainer },
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
      key: 'dashboard',
      icon: <HomeOutlined />,
      label: <Link to={'/dashboard'}>Dashboard</Link>,
    },
    {
      key: 'project',
      icon: <ProjectOutlined />,
      label: <Link to={'/project'}>Projects</Link>,
    },
    {
      key: 'calender',
      icon: <CalendarOutlined />,
      label: <Link to={'/calender'}>Calendar</Link>,
    },
    {
      key: 'vacations',
      icon: <FlagOutlined />,
      label: <Link to={'/vacations'}>Vacations</Link>,
    },
    {
      key: 'employees',
      icon: <UserOutlined />,
      label: <Link to={'/employees'}>Employees</Link>,
    },
    {
      key: 'Messenger',
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

  useEffect(() => {
    const currentPath = location.pathname.slice(1)
    console.log('currentPath', currentPath)

    if (
      currentPath === 'project/addproject' ||
      currentPath === 'project/details'
    ) {
      setSelectKey('project')
      return
    }

    if (currentPath === 'dashboard/viewall') {
      setSelectKey('dashboard')
      return
    }
    setSelectKey(currentPath)
  }, [location])

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
        items={items}
        className='menu'
        selectedKeys={[key]}
        defaultSelectedKeys={['dashboard']}
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
