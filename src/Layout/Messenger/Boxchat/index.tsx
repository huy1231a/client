import React, { useState } from 'react'
import './style.css'
import { Avatar, Badge, Typography } from 'antd'

interface Prop {
  nameBox: string
  messageBox: string
  time: string
  numberOfNoti?: number
  img?: any
}

const BoxChat: React.FC<Prop> = ({
  nameBox,
  messageBox,
  time,
  numberOfNoti,
  img,
}) => {
  const [show, setShow] = useState(true)
  const { Text } = Typography
  return (
    <div className='box__chat'>
      <div className='box__chat__name'>
        <Avatar style={{ width: 40, height: 40 }} src={img} />
        <div className='box__chat__name__'>
          <span className='name__box'>{nameBox}</span>
          <Text type='secondary' className='overflow-ellipsis'>
            {messageBox}
          </Text>
        </div>
      </div>
      <div className='box__chat__name__2'>
        <Text type='secondary'>{time}</Text>
        <Badge count={numberOfNoti} />
      </div>
    </div>
  )
}

export default BoxChat
