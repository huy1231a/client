import React, { useState } from 'react'
import { Radio, RadioChangeEvent, Typography } from 'antd'
import './style.css'
import CalendarComponent from '../calender'
import Time from '../time/time'
import TextArea from 'antd/es/input/TextArea'

const ModelInfomation = () => {
  const [value, setValue] = useState(1)
  const [activeItem, setActiveItem] = useState<number | null>(1)

  const handleClick = (itemName: number) => {
    setActiveItem(itemName === activeItem ? 1 : itemName)
  }

  const onChange = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value)
    setValue(e.target.value)
  }
  const { Text } = Typography
  return (
    <div className='request__model'>
      <Text type='secondary'>Request Type</Text>
      <div className='radion__request'>
        <Radio.Group
          onChange={onChange}
          value={value}
          className='radion__request'>
          <div className='radio1'>
            <Radio value={1}>Vacation</Radio>
          </div>
          <div className='radio1'>
            <Radio value={2}>Sick Leave</Radio>
          </div>
          <div className='radio1'>
            <Radio value={3}>Work remotely</Radio>
          </div>
        </Radio.Group>
      </div>
      <div className='project__info__right'>
        <div
          className={`${activeItem === 1 ? 'active' : 'one'}`}
          onClick={() => handleClick(1)}>
          Days
        </div>
        <div
          className={`${activeItem === 2 ? 'active' : 'one'}`}
          onClick={() => handleClick(2)}>
          Hours
        </div>
      </div>

      <div className='cl__inffo'>
        <CalendarComponent />
      </div>
      <div className='text-area'>
        {activeItem === 1 && (
          <TextArea
            rows={4}
            placeholder='Add your comment'
            style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
          />
        )}
      </div>
      <div className='time__line__2'>{activeItem === 2 && <Time />}</div>
    </div>
  )
}

export default ModelInfomation
