import React from 'react'
import { Button, Flex, Typography } from 'antd'
import { CaretLeftOutlined, PlusOutlined } from '@ant-design/icons'
import './style.css'
import { Link } from 'react-router-dom'
import NearestEvents from '../../../common/Dashboard/NearEvents'
import { dataEv, dataEvDetails } from '../data'

const ViewAllEv = () => {
  const { Text, Title } = Typography
  return (
    <div className='view__all'>
      <Flex gap={10} style={{ cursor: 'pointer' }}>
        <Link to={'/dashboard'} className='href1'>
          <CaretLeftOutlined />
          <Text type='secondary'>Back To Dashboard</Text>
        </Link>
      </Flex>
      <Flex justify='space-between' align='center'>
        <h1>Nearest Events</h1>
        <Button
          type='primary'
          shape='round'
          icon={<PlusOutlined />}
          size={'large'}>
          Add Event
        </Button>
      </Flex>
      <Flex style={{ width: '100%', marginTop: 20 }} gap={40}>
        <div className='left__viewAll'>
          {dataEvDetails.map((item, key) => (
            <NearestEvents
              key={key}
              titleBox={item.titleBox}
              timeAndDate={item.timeAndDate}
              time={item.time}
              icon={item.icon}
              img={item.img}
              red={item.red}
            />
          ))}
        </div>
        <div className='right__viewAll'>
          {dataEvDetails.map((item, key) => (
            <NearestEvents
              key={key}
              titleBox={item.titleBox}
              timeAndDate={item.timeAndDate}
              time={item.time}
              icon={item.icon}
              img={item.img}
              red={item.red}
            />
          ))}
        </div>
      </Flex>
    </div>
  )
}

export default ViewAllEv
