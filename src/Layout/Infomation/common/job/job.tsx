import React from 'react'
import { Typography } from 'antd'
import './style.css'

interface Contend {
  name: string
  title: string
}

const Job: React.FC<Contend> = ({ name, title }) => {
  const { Text } = Typography
  return (
    <div className='contend__lay' style={{ marginLeft: 10 }}>
      <Text type='secondary' style={{ fontWeight: 600 }}>
        {name}
      </Text>
      <div className='job__now'>
        <Text type='secondary' className='job__name'>
          {title}
        </Text>
      </div>
    </div>
  )
}

export default Job
