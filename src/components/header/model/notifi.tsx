import { Avatar, Typography } from 'antd'
import React from 'react'

interface UserNoti {
  name?: string
  contend?: string
  contend_Of?: string
  work?: string
  time?: string
}
const Notifi: React.FC<UserNoti> = ({
  name,
  contend,
  contend_Of,
  work,
  time,
}) => {
  const { Text } = Typography
  return (
    <>
      <div className='noti1'>
        <Avatar style={{ width: 50, height: 50 }} />
        <span>
          <span>
            <span className='name'>{name}</span>
            {contend} <br />
            <span className={`${contend_Of === '1' ? 'name2' : 'name'}`}>
              {work}
            </span>
          </span>
        </span>
      </div>
      <Text type='secondary' className='time__d'>
        {time}
      </Text>
    </>
  )
}
export default Notifi
