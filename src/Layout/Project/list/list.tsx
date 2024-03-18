import { Button, message } from 'antd'
import { useState } from 'react'
import ListTask from '../common/ListTask'
import { dataTaskList } from '../data'
import BackLock from '../common/BackLock'
import AddTaskNew from '../addTask'

const ListItem = () => {
  const [messageApi, contextHolder] = message.useMessage()
  const key = 'updatable'
  const openMessage = () => {
    messageApi.open({
      key,
      type: 'loading',
      content: 'Loading...',
    })

    setClickActive(true)

    setTimeout(() => {
      messageApi.open({
        key,
        type: 'success',
        content: 'Loaded!',
        duration: 2,
      })
    }, 1000)
  }

  const [clickActive, setClickActive] = useState(false)
  return (
    <div>
      <Button
        type='primary'
        size={'large'}
        onClick={openMessage}
        style={{ width: '100%', margin: '20px 0px 20px 0px' }}>
        Active Tasks
      </Button>
      {contextHolder}
      {clickActive &&
        (dataTaskList.length > 0 ? (
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
        ) : (
          <>
            <AddTaskNew />
          </>
        ))}
    </div>
  )
}

export default ListItem
