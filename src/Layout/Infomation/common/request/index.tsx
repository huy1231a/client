/* eslint-disable @typescript-eslint/no-redeclare */
import React from 'react'
import './style.css'

import { Button, Flex, Typography } from 'antd'

interface Request {
  title: string
  duration: string
  startDate: string
  endDate: string
  status: string
  svg: any
  setSvg?: string
}

export const requestData: Request[] = [
  {
    title: 'Sick Leave',
    duration: '3 days',
    startDate: 'Sep 13, 2020',
    endDate: 'Sep 16, 2020',
    status: 'Pending',
    svg: (
      <svg
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <circle cx='12' cy='12' r='5' fill='#F65160' />
      </svg>
    ),
  },
  {
    title: 'Work remotely',
    duration: '1 days',
    startDate: 'Sep 13, 2020',
    endDate: 'Sep 16, 2020',
    status: 'Approved',
    svg: (
      <svg
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <circle cx='12' cy='12' r='5' fill='#6D5DD3' />
      </svg>
    ),
  },
  {
    title: 'Vacation',
    duration: '2 days',
    startDate: 'Sep 1, 2020',
    endDate: 'Sep 16, 2020',
    status: 'Approved',
    svg: (
      <svg
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <circle cx='12' cy='12' r='5' fill='#15C0E6' />
      </svg>
    ),
  },
]
const Request: React.FC<Request> = ({
  title,
  duration,
  startDate,
  endDate,
  status,
  setSvg,
  svg,
}) => {
  const { Text, Title } = Typography
  return (
    <div className='layout__list__task'>
      <div className='layout__list'>
        <div className='layout__1'>
          <Text type='secondary'>Request Type</Text>
          <Flex align='center' style={{ width: '100%' }}>
            {svg}
            <h3>{title}</h3>
          </Flex>
        </div>
        <div className='layout__2'>
          <Text type='secondary'>Duration</Text>
          <Title level={5}>{duration}</Title>
        </div>
        <div className='layout__3'>
          <Text type='secondary'>Start Day</Text>
          <Title level={5}>{startDate}</Title>
        </div>
        <div className='layout__3'>
          <Text type='secondary'>End Day</Text>
          <Title level={5}>{endDate}</Title>
        </div>
        <div className='layout__6'>
          <Button
            style={{
              backgroundColor: `${
                status === 'Pending' ? '#FDC748' : '#00D097'
              }`,
            }}
            size='large'>
            <span style={{ color: 'white' }}>{status}</span>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Request
