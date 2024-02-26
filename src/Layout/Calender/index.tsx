import React from 'react'
import './style.css'
import CalendarLayout from './common/calenderCom'
import { PlusOutlined } from '@ant-design/icons'
import { Button, Typography } from 'antd'

const Calender = () => {
  const { Title } = Typography
  return (
    <div className='calender'>
      <div className='title__calender'>
        <Title level={2} style={{ fontWeight: 600 }}>
          Calendar
        </Title>
        <Button
          type='primary'
          shape='round'
          icon={<PlusOutlined />}
          size={'large'}>
          Add Event
        </Button>
      </div>

      <div className='calender__contend'>
        <CalendarLayout />
      </div>
    </div>
  )
}

export default Calender
