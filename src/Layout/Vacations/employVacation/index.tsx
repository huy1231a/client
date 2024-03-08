import { Avatar, Typography } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

export interface Prop {
  id?: any
  avatar: any
  name: string
  gmail: string
  vacation: string | number
  sicklove: string | number
  workRemote: string | number
}
const Employees: React.FC<Prop> = ({
  id,
  avatar,
  name,
  gmail,
  vacation,
  sicklove,
  workRemote,
}) => {
  const { Text } = Typography
  return (
    <div className='employees'>
      <div className='employees__da'>
        <div className='left__title' style={{ gap: 20 }}>
          <Link to={'https://www.facebook.com/nqh2020'} target='_blank'>
            <Avatar style={{ width: 50, height: 50 }} src={avatar} />
          </Link>
          <div className='left__job__name'>
            <span className='name__'>{name}</span>
            <Text type='secondary'>{gmail}</Text>
          </div>
        </div>
        <div className='right_contend'>
          <div className='vacations__over'>
            <Text type='secondary'>Vacations</Text>
            <span className='name__'>{vacation}</span>
          </div>
          <div className='vacations__over'>
            <Text type='secondary'>Sick Leave</Text>
            <span className='name__'>{sicklove}</span>
          </div>
          <div className='vacations__over'>
            <Text type='secondary'>Work remotely</Text>
            <span className='name__'>{workRemote}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Employees
