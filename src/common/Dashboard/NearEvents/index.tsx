/* eslint-disable jsx-a11y/alt-text */
import { Flex, Typography } from 'antd'
import './style.css'
import React from 'react'
import { useLocation } from 'react-router-dom'

export interface Events {
  titleBox: string
  timeAndDate: string
  time: string
  icon: React.ReactNode
  img: any
  red?: string
  style?: React.CSSProperties
}

const NearestEvents: React.FC<Events> = ({
  time,
  timeAndDate,
  titleBox,
  icon,
  img,
  red,
}) => {
  const { Text, Title } = Typography
  const location = useLocation()
  console.log('location', location.pathname)

  return (
    <div
      className='layout'
      style={{
        backgroundColor: `${location.pathname === '/dashboard' ? '' : 'white'}`,
        width: `${location.pathname === '/dashboard' ? '' : '100%'}`,
        padding: `${location.pathname === '/dashboard' ? '' : '30px'}`,
      }}>
      <Flex justify='space-between' align='center' className='layout__ev'>
        <Flex align='center' gap={20}>
          <div
            className='nest_vip'
            style={{
              background: `${red === 'red' ? '#DE92EB' : '#3F8CFF'}`,
            }}></div>
          <div className='title__ev'>
            <Title level={4} style={{ marginTop: 1 }}>
              {titleBox}
            </Title>
            <Text type='secondary'>{timeAndDate}</Text>
          </div>
        </Flex>
        <Flex vertical={true} gap={20} align='center'>
          <img src={img} width={24} height={24} />
          <div className='time__ev'>
            <span>{icon}</span>
            {time}
          </div>
        </Flex>
      </Flex>
    </div>
  )
}

export default NearestEvents
