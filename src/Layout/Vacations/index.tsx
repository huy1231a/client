import React, { useState } from 'react'
import './style.css'
import { Button, Select, SelectProps, Typography } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import Employees from './employVacation'
import { DataEmploye } from './employVacation/constans'
import CalendarWithStatus from './calendarWithStatus'
import SearchUser from './calendarWithStatus/searchUserCalender'

const VacationsComponents = () => {
  const options: SelectProps['options'] = []

  for (let i = 10; i < 36; i++) {
    options.push({
      value: i.toString(36) + i,
      label: i.toString(36) + i,
    })
  }

  const handleChange = (value: string) => {
    console.log(`selected ${value}`)
  }

  const [activeItem, setActiveItem] = useState<number | null>(1)

  const { Title } = Typography
  const handleClick = (itemName: number) => {
    setActiveItem(itemName === activeItem ? 1 : itemName)
  }

  return (
    <div className='vations'>
      <div className='vacations__2'>
        <div className='title__vations'>
          <Title level={2} style={{ fontWeight: 600 }}>
            Vacations
          </Title>
        </div>
        <div className='conttend__vat'>
          <div
            className={`${activeItem === 1 ? 'active' : 'one'}`}
            onClick={() => handleClick(1)}>
            Employees’ vacations
          </div>
          <div
            className={`${activeItem === 2 ? 'active' : 'one'}`}
            onClick={() => handleClick(2)}>
            Calendar
          </div>
        </div>
        <div className='btn__add'>
          <Button
            type='primary'
            shape='round'
            icon={<PlusOutlined />}
            size={'large'}>
            Add Request
          </Button>
        </div>
      </div>
      {activeItem === 1 && (
        <>
          {DataEmploye.map((item, key) => (
            <Employees
              id={key}
              avatar={item.avatar}
              name={item.name}
              gmail={item.gmail}
              vacation={item.vacation}
              sicklove={item.sicklove}
              workRemote={item.workRemote}
            />
          ))}
        </>
      )}

      {activeItem === 2 && (
        <>
          <SearchUser />
        </>
      )}
    </div>
  )
}

export default VacationsComponents
