import React, { useState } from 'react'
import { Typography } from 'antd'
import './style.css'

export interface Task {
  id: string
  name?: string
  idTask?: string
  level?: string
  status: string
  image: any
  time: string
  days: string
  icon?: any
}

const TaskBoard: React.FC<{ tasks: Task[] }> = ({ tasks }) => {
  const { Text } = Typography
  const [taskList, setTaskList] = useState<Task[]>(tasks)

  const onDragStart = (evt: React.DragEvent<HTMLDivElement>) => {
    let element = evt.currentTarget
    element.classList.add('dragged')
    evt.dataTransfer.setData('text/plain', evt.currentTarget.id)
    evt.dataTransfer.effectAllowed = 'move'
  }

  const onDragEnd = (evt: React.DragEvent<HTMLDivElement>) => {
    evt.currentTarget.classList.remove('dragged')
  }

  const onDragEnter = (evt: React.DragEvent<HTMLDivElement>) => {
    evt.preventDefault()
    let element = evt.currentTarget
    element.classList.add('dragged-over')
    evt.dataTransfer.dropEffect = 'move'
  }

  const onDragLeave = (evt: React.DragEvent<HTMLDivElement>) => {
    let currentTarget = evt.currentTarget
    let newTarget = evt.relatedTarget as HTMLElement
    if (newTarget?.parentNode === currentTarget || newTarget === currentTarget)
      return
    evt.preventDefault()
    let element = evt.currentTarget
    element.classList.remove('dragged-over')
  }

  const onDragOver = (evt: React.DragEvent<HTMLDivElement>) => {
    evt.preventDefault()
    evt.dataTransfer.dropEffect = 'move'
  }

  const onDrop = (
    evt: React.DragEvent<HTMLDivElement>,
    value: boolean,
    status: string
  ) => {
    evt.preventDefault()
    evt.currentTarget.classList.remove('dragged-over')
    let data = evt.dataTransfer.getData('text/plain')
    let updated = taskList.map((task) => {
      if (task.id.toString() === data.toString()) {
        task.status = status
      }
      return task
    })
    setTaskList(updated)
  }
  let pending = tasks.filter((data) => data.status === 'In Progress')
  let done = tasks.filter((data) => data.status === 'Done')
  let newOrder = tasks.filter((data) => data.status === 'To Do')
  let waiting = tasks.filter((data) => data.status === 'In Review')

  return (
    <div className='container'>
      <div
        className='order small-box'
        onDragLeave={(e) => onDragLeave(e)}
        onDragEnter={(e) => onDragEnter(e)}
        onDragEnd={(e) => onDragEnd(e)}
        onDragOver={(e) => onDragOver(e)}
        onDrop={(e) => onDrop(e, false, 'To Do')}>
        <section className='drag_container'>
          <div className='container'>
            <div className='drag_column'>
              <div className='drag_row'>
                {newOrder.map((task) => (
                  <div
                    className='card'
                    key={task.name}
                    id={task.id}
                    draggable
                    onDragStart={(e) => onDragStart(e)}
                    onDragEnd={(e) => onDragEnd(e)}>
                    <div className='title'>
                      <div>
                        <div>{task.idTask}</div>
                        <Text type='secondary'>{task.name}</Text>
                      </div>
                      <div>{task.image}</div>
                      <div className='contend__task'>
                        <div className='status'>{task.status}</div>
                        <div className='days'>{task.time}</div>
                        <div className='time'>{task.days}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
      <div
        className='pending small-box'
        onDragLeave={(e) => onDragLeave(e)}
        onDragEnter={(e) => onDragEnter(e)}
        onDragEnd={(e) => onDragEnd(e)}
        onDragOver={(e) => onDragOver(e)}
        onDrop={(e) => onDrop(e, false, 'In Progress')}>
        <section className='drag_container'>
          <div className='container'>
            <div className='drag_column'>
              <div className='drag_row'>
                {pending.map((task) => (
                  <div
                    className='card'
                    key={task.name}
                    id={task.id}
                    draggable
                    onDragStart={(e) => onDragStart(e)}
                    onDragEnd={(e) => onDragEnd(e)}>
                    <div className='title2'>
                      <div>
                        <div>{task.idTask}</div>
                        <Text type='secondary'>{task.name}</Text>
                      </div>
                      <div>{task.image}</div>
                      <div className='contend__task'>
                        <div className='status'>{task.status}</div>
                        <div className='days'>{task.time}</div>
                        <div className='time'>{task.days}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
      <div
        className='waiting small-box'
        onDragLeave={(e) => onDragLeave(e)}
        onDragEnter={(e) => onDragEnter(e)}
        onDragEnd={(e) => onDragEnd(e)}
        onDragOver={(e) => onDragOver(e)}
        onDrop={(e) => onDrop(e, true, 'In Review')}>
        <section className='drag_container'>
          <div className='container'>
            <div className='drag_column'>
              <div className='drag_row'>
                {waiting.map((task) => (
                  <div
                    className='card'
                    key={task.name}
                    id={task.id}
                    draggable
                    onDragStart={(e) => onDragStart(e)}
                    onDragEnd={(e) => onDragEnd(e)}>
                    <div className='title'>
                      <div>
                        <div>{task.idTask}</div>
                        <Text type='secondary'>{task.name}</Text>
                      </div>
                      <div>{task.image}</div>
                      <div className='contend__task'>
                        <div className='status'>{task.status}</div>
                        <div className='days'>{task.time}</div>
                        <div className='time'>{task.days}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
      <div
        className='done small-box'
        onDragLeave={(e) => onDragLeave(e)}
        onDragEnter={(e) => onDragEnter(e)}
        onDragEnd={(e) => onDragEnd(e)}
        onDragOver={(e) => onDragOver(e)}
        onDrop={(e) => onDrop(e, true, 'Done')}>
        <section className='drag_container'>
          <div className='container'>
            <div className='drag_column'>
              <div className='drag_row'>
                {done.map((task) => (
                  <div
                    className='card'
                    key={task.name}
                    id={task.id}
                    draggable
                    onDragStart={(e) => onDragStart(e)}
                    onDragEnd={(e) => onDragEnd(e)}>
                    <div className='title'>
                      <div>
                        <div>{task.idTask}</div>
                        <Text type='secondary'>{task.name}</Text>
                      </div>
                      <div>{task.image}</div>
                      <div className='contend__task'>
                        <div className='status'>{task.status}</div>
                        <div className='days'>{task.time}</div>
                        <div className='time'>{task.days}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default TaskBoard
