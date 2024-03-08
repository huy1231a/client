import React from 'react'
import { Calendar } from 'antd'
import dayjs, { Dayjs } from 'dayjs'
// import 'antd/dist/antd.css'

interface StatusData {
  [key: string]: {
    status: string
  }
}

const data: StatusData = {
  '2024-03-01': { status: 'pending' },
  '2024-03-05': { status: 'approved' },
  '2024-03-10': { status: 'rejected' },
  '2024-03-15': { status: 'pending' },
  '2024-03-20': { status: 'approved' },
  '2024-03-25': { status: 'rejected' },
}

interface StatusColors {
  [key: string]: string
}

const statusColors: StatusColors = {
  pending: '#FFD700', // Yellow
  approved: '#00FF00', // Green
  rejected: '#FF0000', // Red
}

const CalendarWithStatus: React.FC = () => {
  function dateCellRender(date: Dayjs): React.ReactNode {
    const status = data[date.format('YYYY-MM-DD')]
    if (status) {
      return (
        <div
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: statusColors[status.status],
          }}
        />
      )
    }
    return null
  }

  return (
    <div
      style={{
        width: '90%',
        border: '5px solid #d9d9d9',
        borderRadius: '20px',
        padding: 10,
        margin: '20px auto',
      }}>
      <Calendar dateCellRender={dateCellRender} />
    </div>
  )
}

export default CalendarWithStatus
