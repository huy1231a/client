import React from 'react'
import { Avatar, Typography } from 'antd'
import './style.css'
import { Link } from 'react-router-dom'
import { ListActivityType } from '../Type'

const ListActivity: React.FC<ListActivityType> = ({
  id,
  avatar,
  email,
  name,
  typeOfPostion,
  blTask,
  taskIp,
  taskIr,
}) => {
  const { Text } = Typography
  return (
    <div className='child'>
      <div className='info__user__list'>
        <Link to={'https://www.facebook.com/nqh2020'} target='_blank'>
          <Avatar style={{ width: 60, height: 60 }} src={avatar} />
        </Link>
        <span className='name__'>{name}</span>
        <Text type='secondary'>{email}</Text>
        <div className='level'>
          <span className='l'>{typeOfPostion}</span>
        </div>
      </div>
      <div className='under__info'>
        <div className='under__info1'>
          <span className='name__'>{blTask}</span>
          <Text type='secondary'>Backlog tasks</Text>
        </div>
        <div className='under__info2'>
          <span className='name__'>{taskIp}</span>
          <Text type='secondary'>Tasks In Progress</Text>
        </div>
        <div className='under__info3'>
          <span className='name__'>{taskIr}</span>
          <Text type='secondary'>Tasks In Review</Text>
        </div>
      </div>
    </div>
  )
}

export default ListActivity
