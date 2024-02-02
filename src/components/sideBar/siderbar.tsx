import { useState } from 'react'
import {
  CalendarOutlined,
  DesktopOutlined,
  FileOutlined,
  FlagOutlined,
  HomeOutlined,
  MessageOutlined,
  PieChartOutlined,
  ProjectOutlined,
  MenuFoldOutlined,
  UserOutlined,
  UserSwitchOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons'
import { Button, Layout, Menu, theme } from 'antd'
import { Link } from 'react-router-dom'
import type { MenuProps } from 'antd'
import './style.css'

const Siderbar = () => {
  const [collapsed, setCollapsed] = useState(false)
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken()

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
      label: <Link to={'/'}>Calendar</Link>,
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
  ]

  const { Sider } = Layout
  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      width={250}
      className='siderBar'>
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
    </Sider>
  )
}

export default Siderbar
