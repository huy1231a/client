import { BackLockData } from './data'
import './style.css'
import { Typography } from 'antd'

const BackLock = () => {
  const { Title, Text } = Typography
  return (
    <div className='layout__board'>
      <Title level={4} className='title'>
        Backlog
      </Title>
      <div className='back__lock'>
        {BackLockData.map((task) => (
          <>
            <div className='bl__content'>
              <div className='title'>
                <div>
                  <div>{task.idTask}</div>
                  <Text type='secondary'>{task.name}</Text>
                </div>
                <div>{task.image}</div>
                <div className='conten__backlock'>
                  <div className='status'>{task.time}</div>
                  <div className='days'>{task.icon}</div>
                  <div className='time'>{task.days}</div>
                </div>
              </div>
            </div>
          </>
        ))}
        {/* <div className='bl__content'>2</div>
        <div className='bl__content'>3</div> */}
      </div>
    </div>
  )
}

export default BackLock
