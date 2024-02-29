import React, { useState } from 'react'
import { Calendar, message } from 'antd'
import dayjs, { Dayjs } from 'dayjs' // Import dayjs and Dayjs
import 'dayjs/locale/en' // Import the locale you need

// Set the locale globally for dayjs
dayjs.locale('en')

const ThreeDayCalendar: React.FC = () => {
  const [selectedDates, setSelectedDates] = useState<Dayjs[]>([])

  const handleSelect = (value: Dayjs) => {
    const alreadySelected = selectedDates.some((date) =>
      date.isSame(value, 'day')
    )

    if (alreadySelected) {
      setSelectedDates(
        selectedDates.filter((date) => !date.isSame(value, 'day'))
      )
    } else if (selectedDates.length < 3) {
      setSelectedDates([...selectedDates, value])
    } else {
      message.warning('You can only select up to three dates.')
    }
  }

  const dateCellRender = (value: Dayjs) => {
    const isSelected = selectedDates.some((date) => date.isSame(value, 'day'))

    return (
      <div className={isSelected ? 'selected-date' : ''}>{value.date()}</div>
    )
  }

  return (
    <div>
      <h1>Choose Three Days</h1>
      <Calendar
        fullscreen={false}
        onSelect={handleSelect}
        dateCellRender={dateCellRender}
      />
    </div>
  )
}

export default ThreeDayCalendar
