import React from 'react'
import './style.css'
import { Avatar, Flex } from 'antd'

export interface Data {
  img?: string
  name: string
  job: string
  level: string
  type?: string
}
const Workload: React.FC<Data> = ({ img, name, job, level, type }) => {
  const url =
    'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg'
  return (
    <>
      <div
        className='workload'
        style={{
          backgroundColor: `${type === 'dash' ? '#f4f9fd' : ' white'}`,
        }}>
        <Flex vertical={true} justify='center' align='center' gap={10}>
          <div style={{ marginTop: 10 }}>
            <Avatar src={url} style={{ width: 60, height: 60 }} />
          </div>
          <div className='name'>{name}</div>
          <div className='job'>{job}</div>
          <div className='level'>
            <span className='l'>{level}</span>
          </div>
        </Flex>
      </div>
    </>
  )
}
export default Workload
