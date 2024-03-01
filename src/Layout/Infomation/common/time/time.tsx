import React, { useState } from 'react'
import { Button, Flex, TimePicker, Typography, message } from 'antd'
import type { Dayjs } from 'dayjs'
import dayjs from 'dayjs'
import './style.css'

const Time = () => {
  const format = 'HH:mm'
  const { Text, Title } = Typography

  const [startTime, setStartTime] = useState<Dayjs | null>(null)
  const [endTime, setEndTime] = useState<Dayjs | null>(null)
  const [timeDifference, setTimeDifference] = useState<string>('')

  const onChangeStartTime = (time: Dayjs | null, timeString: string) => {
    setStartTime(time)
  }

  const onChangeEndTime = (time: Dayjs | null, timeString: string) => {
    setEndTime(time)
  }

  const calculateTimeDifference = () => {
    if (startTime && endTime) {
      const difference = endTime.diff(startTime, 'second')
      const hours = Math.floor(difference / 3600)
      const minutes = Math.floor((difference % 3600) / 60)

      setTimeDifference(`${hours}h ${minutes}m`)
    } else {
      message.error('Please chose time ')
    }
  }

  return (
    <>
      <div className='time__info'>
        <Flex vertical={true} gap={10} style={{ width: '40%' }}>
          <Text type='secondary'>From</Text>
          <TimePicker
            size='large'
            onChange={onChangeStartTime}
            format={format}
            defaultValue={dayjs('00:00', format)}
          />
        </Flex>
        <Flex vertical={true} gap={10} style={{ width: '40%' }}>
          <Text type='secondary'>To</Text>
          <TimePicker
            size='large'
            format={format}
            defaultValue={dayjs('00:00', format)}
            onChange={onChangeEndTime}
          />
        </Flex>
      </div>
      <div className='total_time'>
        <Button onClick={calculateTimeDifference}>Total time Leave</Button>
        <Title level={2} style={{ color: '#15C0E6', fontWeight: 700 }}>
          {startTime && endTime ? <>{timeDifference}</> : '00:00'}
        </Title>
      </div>
    </>
  )
}

export default Time
