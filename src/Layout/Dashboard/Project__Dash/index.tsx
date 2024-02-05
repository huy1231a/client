import React from 'react'
import './style.css'
import {
  CalendarFilled,
  UserOutlined,
  AntDesignOutlined,
} from '@ant-design/icons'
import medium from '../image/medium.png'
import { Avatar, Tooltip, Typography } from 'antd'
import { ProjectData } from '../data'

const Project_Dash: React.FC<ProjectData> = ({
  activeTask,
  allTask,
  date,
  id,
  name,
  status,
}) => {
  const { Text } = Typography
  return (
    <div className='pro'>
      <div className='project'>
        <div className='layout1'>
          <div className='layout__dash'>
            <Avatar style={{ width: 40, height: 40 }} />
            <div className='ali'>
              <Text type='secondary'>{id}</Text>
              <span className='title'>{name}</span>
            </div>
          </div>
        </div>
        <div className='foot'>
          <div className='text-left'>
            <CalendarFilled />
            <Text type='secondary'>{date}</Text>
          </div>
          <div className='text-right'>
            <img src={medium} alt='' width={20} />
            <span
              className='medium'
              style={{
                color: `${status === 'Medium' ? '#FFBD21' : '#0AC947'}`,
              }}>
              {status}
            </span>
          </div>
        </div>
      </div>
      <div className='diverder'></div>
      <div className='data'>
        <span className='title'>Project Data</span>
        <div className='layou__left'>
          <div className='container'>
            <div className='row'>
              <Text type='secondary'>All Tasks</Text>
            </div>
            <div className='row'>
              <Text type='secondary'>Active tasks</Text>
            </div>
            <div className='row'>
              <Text type='secondary'>Assignees</Text>
            </div>
          </div>
          <div className='container'>
            <div className='row'>
              <span className='title'>{allTask}</span>
            </div>
            <div className='row'>
              <span className='title'>{activeTask}</span>
            </div>
            <div className='row'>
              <Avatar.Group
                style={{ cursor: 'pointer' }}
                maxCount={2}
                maxStyle={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>
                <Avatar src='https://api.dicebear.com/7.x/miniavs/svg?seed=2' />
                <Avatar style={{ backgroundColor: '#f56a00' }}>K</Avatar>
                <Tooltip title='Ant User' placement='top'>
                  <Avatar
                    style={{ backgroundColor: '#87d068' }}
                    icon={<UserOutlined />}
                  />
                </Tooltip>
                <Avatar
                  style={{ backgroundColor: '#1677ff' }}
                  icon={<AntDesignOutlined />}
                />
              </Avatar.Group>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project_Dash
