import { Button } from 'antd'
import React, { useState } from 'react'
import ListTask from '../common/ListTask'
import { dataBackLock, dataTaskList } from '../data'
import BackLock from '../common/BackLock'

const ListItem = () => {
  const [clickActive, setClickActive] = useState(false)
  return (
    <div>
      <Button
        type='primary'
        size={'large'}
        onClick={() => {
          setClickActive(true)
        }}
        style={{ width: '100%', margin: '20px 0px 20px 0px' }}>
        Active Tasks
      </Button>
      {clickActive && (
        <>
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
          <BackLock />
        </>
      )}
    </div>
  )
}

export default ListItem
