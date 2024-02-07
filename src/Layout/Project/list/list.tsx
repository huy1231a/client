import { Button } from 'antd'
import React from 'react'
import ListTask from '../common/ListTask'
import { dataTaskList } from '../data'

const ListItem = () => {
  return (
    <div>
      <Button
        type='primary'
        size={'large'}
        style={{ width: '100%', margin: '20px 0px 20px 0px' }}>
        Active Tasks
      </Button>
      {dataTaskList.map((item, key) => (
        <ListTask
          key={key}
          taskName={item.taskName}
          est={item.est}
          time={item.time}
          svg={item.svg}
          status={item.status}
          loadStatus={item.loadStatus}
        />
      ))}
    </div>
  )
}

export default ListItem
