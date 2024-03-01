import React, { useState } from 'react'
import { Calendar, theme, message } from 'antd'
// import 'antd/dist/antd.css'
import { Dayjs } from 'dayjs'

const CalendarComponent: React.FC = () => {
  const [selectedDates, setSelectedDates] = useState<Dayjs[]>([])
  const { token } = theme.useToken()

  const wrapperStyle: React.CSSProperties = {
    width: '90%',
    margin: 'auto',
    border: `1px solid ${token.colorBorderSecondary}`,
    borderRadius: token.borderRadiusLG,
  }

  const handleCalendarSelect = (date: Dayjs) => {
    const index = selectedDates.findIndex((d) => d.isSame(date, 'day'))

    if (index !== -1) {
      const updatedDates = [...selectedDates]
      updatedDates.splice(index, 1)
      setSelectedDates(updatedDates)
    } else {
      if (selectedDates.length < 3) {
        setSelectedDates([...selectedDates, date])
      } else {
        message.error('You have 3 days of Vacation left')
      }
    }
  }

  const dateCellRender = (value: Dayjs) => {
    const isSelectedDate = selectedDates.some((selectedDate) =>
      selectedDate.isSame(value, 'day')
    )

    return (
      <div
        // className={isSelectedDate ? 'ant-calendar-date-selected' : ''}
        style={{
          backgroundColor: isSelectedDate ? '#15C0E6' : '',
          borderRadius: isSelectedDate ? '15px' : '',
        }}
        onClick={() => handleCalendarSelect(value)}>
        {value.date()}
      </div>
    )
  }

  return (
    <div style={wrapperStyle}>
      <Calendar fullCellRender={dateCellRender} fullscreen={false} />
    </div>
  )
}

export default CalendarComponent

// import React from 'react'
// import type { Dayjs } from 'dayjs'
// import { Calendar } from 'antd'
// import type { CalendarProps } from 'antd'

// const CalendarComponent: React.FC = () => {
//   const onPanelChange = (value: Dayjs, mode: CalendarProps<Dayjs>['mode']) => {
//     console.log(value.format('YYYY-MM-DD'), mode)
//   }

//   return <Calendar onPanelChange={onPanelChange} />
// }

// export default CalendarComponent
