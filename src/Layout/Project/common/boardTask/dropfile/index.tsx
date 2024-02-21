import React, { useState } from 'react'
import { List, message } from 'antd'

interface Task {
  id: string
  content: string
}

const initialTasks: Task[] = [
  { id: 'task-1', content: 'Task 1' },
  { id: 'task-2', content: 'Task 2' },
  { id: 'task-3', content: 'Task 3' },
]

const TaskBoard: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>(initialTasks)
  const [newBoxTasks, setNewBoxTasks] = useState<Task[]>([])

  const onDragStart = (e: React.DragEvent<HTMLDivElement>, task: Task) => {
    e.dataTransfer.setData('task', JSON.stringify(task))
    e.currentTarget.classList.add('dragging')
  }

  const onDrop = (
    e: React.DragEvent<HTMLDivElement>,
    target: 'tasks' | 'newBox'
  ) => {
    e.preventDefault()
    const droppedTask = JSON.parse(e.dataTransfer.getData('task')) as Task
    e.currentTarget.classList.remove('dragging')

    if (target === 'tasks') {
      setTasks((prevTasks) => [...prevTasks, droppedTask])
      message.success('Task moved to tasks successfully')
    } else if (target === 'newBox') {
      setNewBoxTasks((prevTasks) => [...prevTasks, droppedTask])
      message.success('Task moved to new box successfully')
    }
  }

  const onDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
  }

  return (
    <div>
      <div
        onDrop={(e) => onDrop(e, 'newBox')}
        onDragOver={onDragOver}
        style={{
          border: '1px dashed #ccc',
          padding: '20px',
          marginBottom: '20px',
        }}>
        <h3>New Box</h3>
        <List
          dataSource={newBoxTasks}
          renderItem={(item: Task) => (
            <List.Item key={item.id}>{item.content}</List.Item>
          )}
        />
      </div>
      <div
        onDrop={(e) => onDrop(e, 'tasks')}
        onDragOver={onDragOver}
        style={{
          border: '1px dashed #ccc',
          padding: '20px',
          marginBottom: '20px',
        }}>
        <h3>Tasks</h3>
        <List
          dataSource={tasks}
          renderItem={(item: Task) => (
            <div key={item.id}>
              <div
                draggable
                onDragStart={(e) => onDragStart(e, item)}
                onDragEnd={(e) => e.currentTarget.classList.remove('dragging')}
                className='draggable-task'>
                {item.content}
              </div>
            </div>
          )}
        />
      </div>
    </div>
  )
}

export default TaskBoard
