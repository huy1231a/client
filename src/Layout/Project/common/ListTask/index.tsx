import React from 'react'
import { Avatar, Button, Space, Typography } from 'antd'
import './style.css'
import { TaskList } from '../../data'

const ListTask: React.FC<TaskList> = ({
  est,
  loadStatus,
  status,
  svg,
  taskName,
  time,
  avatar,
}) => {
  const { Text, Title } = Typography
  return (
    <div className='layout__list__task'>
      <div className='layout__list'>
        <div className='layout__1'>
          <Text type='secondary'>Task Name</Text>
          <Title level={5}>{taskName}</Title>
        </div>
        <div className='layout__2'>
          <Text type='secondary'>Estimate</Text>
          <Title level={5}>{est}</Title>
        </div>
        <div className='layout__3'>
          <Text type='secondary'>Spent Time</Text>
          <Title level={5}>{time}</Title>
        </div>
        <div className='layout__4'>
          <Text type='secondary'>Assignee</Text>
          <Avatar style={{ width: 24, height: 24 }} />
        </div>
        <div className='layout__5'>
          <Text type='secondary'>Priority</Text>
          <Space>{svg}</Space>
        </div>
        <div className='layout__6'>
          <Button style={{ backgroundColor: '#E0F9F2' }}>
            <span style={{ color: '#00D097' }}>{status}</span>
          </Button>
        </div>
        <div className='layout__7'>{loadStatus}</div>
      </div>
    </div>
  )
}

export default ListTask
