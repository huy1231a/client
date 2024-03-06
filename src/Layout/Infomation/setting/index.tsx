import React, { useState } from 'react'
import Infor from '../common/information/Infor'
import {
  CaretLeftOutlined,
  UserOutlined,
  BankOutlined,
  BellOutlined,
  LinkOutlined,
  PayCircleOutlined,
  LockOutlined,
  SecurityScanOutlined,
} from '@ant-design/icons'
import { Flex, GetProp, Menu, MenuProps, Typography } from 'antd'
import './style.css'
import { Link } from 'react-router-dom'
import Notifications from './notification'

const Setting = () => {
  type MenuItem = GetProp<MenuProps, 'items'>[number]
  const [activeItem, setActiveItem] = useState(1)
  console.log(activeItem)

  function getItem(
    label: React.ReactNode,
    key?: React.Key | null,
    icon?: React.ReactNode,
    onClick?: Function,
    children?: MenuItem[]
  ): MenuItem {
    return {
      key,
      icon,
      children,
      label,
      onClick,
    } as MenuItem
  }

  const items: MenuItem[] = [
    getItem('Account', '1', <UserOutlined />, () => {
      setActiveItem(1)
    }),
    getItem('Notifications', '2', <BellOutlined />, () => {
      setActiveItem(2)
    }),
    getItem('My Company', '3', <BankOutlined />, () => {
      setActiveItem(3)
    }),
    getItem('Connected Apps', '4', <LinkOutlined />, () => {
      setActiveItem(4)
    }),
    getItem('Payments', '5', <PayCircleOutlined />, () => {
      setActiveItem(5)
    }),
    getItem('Confidentiality', '6', <LockOutlined />, () => {
      setActiveItem(6)
    }),
    getItem('Safety', '7', <SecurityScanOutlined />, () => {
      setActiveItem(7)
    }),
  ]

  const { Title, Text } = Typography

  return (
    <div className='setting__page'>
      <div className='title__calender'>
        <Title level={2} style={{ fontWeight: 600 }}>
          My Profile
        </Title>
      </div>
      <div className='project__content'>
        <div className='left__project__cot1'>
          <Infor />
        </div>
        <div className='right__project__cot'>
          <Flex gap={10} style={{ cursor: 'pointer' }}>
            <Link to={'/dashboard'} className='href1'>
              <CaretLeftOutlined />
              <Text type='secondary'>Setting</Text>
            </Link>
          </Flex>

          <div className='oop__2'>
            <div className='town1'>
              <Menu
                style={{ borderRadius: 15 }}
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                items={items}
              />
            </div>
            {activeItem === 2 && <Notifications />}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Setting
