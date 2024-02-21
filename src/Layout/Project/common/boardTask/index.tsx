import { Button } from 'antd'
import './style.css'
import React from 'react'
import TaskBoard from './dropfile'

const BoardTask = () => {
  return (
    <>
      <div className='board_Task'>
        <div className='board__top'>
          <div className='_1'>To Do</div>
          <div className='_1'>In Progress</div>
          <div className='_1'>In Review</div>
          <div className='_1'>Done</div>
        </div>
        <Button
          type='primary'
          size={'large'}
          style={{ width: '100%', margin: '20px 0px 20px 0px' }}>
          Active Tasks
        </Button>

        <TaskBoard />
      </div>
    </>
  )
}

export default BoardTask
