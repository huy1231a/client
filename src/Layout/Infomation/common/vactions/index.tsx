import React from 'react'
import { Typography } from 'antd'
import './style.css'

interface Prop {
  number: string
  title: string
  contend: string
  color?: string
}

export const dataVacation: Prop[] = [
  {
    number: '12',
    title: 'Vacation',
    contend: '12/16 days availible',
    color: 'xanh',
  },
  {
    number: '6',
    title: 'Sick Leave',
    contend: '6/12 days availible',
    color: 'do',
  },
  {
    number: '42',
    title: 'Work remotely',
    contend: '42/50 days availible',
    color: 'tim',
  },
]

const Vacations: React.FC<Prop> = ({ number, title, contend, color }) => {
  const { Text, Title } = Typography
  return (
    // <div className='vacations'>
    //   <div className='vacations_1'>
    //     <div className='one'>
    //       <div className='one__ct'>
    //         <div
    //           className='origin'
    //           style={{
    //             border: `${
    //               color === 'xanh'
    //                 ? '2px solid #15c0e6'
    //                 : color === 'tim'
    //                 ? '2px solid #6D5DD3'
    //                 : '2px solid #f65160'
    //             }`,
    //           }}>
    //           {number}
    //         </div>
    //         <Title level={3}>{title}</Title>
    //         <Text type='secondary'>{contend}</Text>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className='vacations__lay'>
      <div className='one'>
        <div className='one__ct'>
          <div
            className='origin'
            style={{
              border: `${
                color === 'xanh'
                  ? '2px solid #15c0e6'
                  : color === 'tim'
                  ? '2px solid #6D5DD3'
                  : '2px solid #f65160'
              }`,
            }}>
            <span
              style={{
                color: `${
                  color === 'xanh'
                    ? '#15c0e6'
                    : color === 'tim'
                    ? '#6D5DD3'
                    : ' #f65160'
                }`,
              }}>
              {number}
            </span>
          </div>
          <Title level={3}>{title}</Title>
          <Text type='secondary'>{contend}</Text>
        </div>
      </div>
    </div>
  )
}

export default Vacations
