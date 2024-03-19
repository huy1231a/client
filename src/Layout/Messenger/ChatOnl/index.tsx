import { Avatar, Flex, Typography } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import './style.css'
import React from 'react'

interface Prop {
  name: string
  time: string
  text: string
  avatar: string
}

const ChatOnl: React.FC<Prop> = ({ name, time, text, avatar }) => {
  const { Text } = Typography
  return (
    <>
      <div className='first__chat'>
        <div className='info__chat'>
          <Avatar style={{ width: 50, height: 50 }} src={avatar} />
          <div className='name__time'>
            <h3>{name}</h3>
            <span>{time}</span>
          </div>
        </div>
        <div className='ct__chat'>
          <Text>{text}</Text>
        </div>
      </div>
      <div className='first__chat'>
        <div className='info__chat'>
          <Avatar style={{ width: 50, height: 50 }} src={avatar} />
          <div className='name__time'>
            <h3>You</h3>
            <span>12:15 AM</span>
          </div>
        </div>
        <div className='ct__chat'>
          <Text>
            Hi, Oscar! Nice to meet youWe will work with new prject together
          </Text>
        </div>
      </div>
      <div className='first__chat'>
        <div className='info__chat'>
          <Avatar style={{ width: 50, height: 50 }} src={avatar} />
          <div className='name__time'>
            <h3>{name}</h3>
            <span>{time}</span>
          </div>
        </div>
        <div className='ct__chat'>
          <Text>{text}</Text>
        </div>
      </div>
      <div className='first__chat'>
        <div className='info__chat'>
          <Avatar style={{ width: 50, height: 50 }} src={avatar} />
          <div className='name__time'>
            <h3>{name}</h3>
            <span>{time}</span>
          </div>
        </div>
        <div className='ct__chat'>
          <Text>{text}</Text>
        </div>
      </div>
      <div className='first__chat'>
        <div className='info__chat'>
          <Avatar style={{ width: 50, height: 50 }} src={avatar} />
          <div className='name__time'>
            <h3>{name}</h3>
            <span>{time}</span>
          </div>
        </div>
        <div className='ct__chat'>
          <Text>{text}</Text>
        </div>
      </div>
    </>
  )
}

export default ChatOnl
