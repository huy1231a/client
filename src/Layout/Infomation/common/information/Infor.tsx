import { Avatar, Divider, Typography } from 'antd'
import React from 'react'
import { img } from '../../image'
import { Link } from 'react-router-dom'
import Job from '../job/job'
import { EditOutlined } from '@ant-design/icons'

interface DisplayInfo {
  setActiveItem?: VoidFunction
}

const Infor: React.FC<DisplayInfo> = ({ setActiveItem }) => {
  const { Title } = Typography
  return (
    <>
      <div className='titlle__details'>
        <div className='info__title'>
          <div className='img__info'>
            <Avatar src={img} style={{ width: 72, height: 72 }} />
          </div>
          <Title level={3} style={{ fontWeight: 600 }}>
            Evan Yates
            <Title level={5} style={{ fontWeight: 500 }}>
              UI/UX Designer
            </Title>
          </Title>
        </div>

        <div className='icon__view'>
          <Link to={''}>
            <EditOutlined style={{ fontSize: 20 }} onClick={setActiveItem} />
          </Link>
        </div>
      </div>
      <Divider />
      <Title level={4} style={{ fontWeight: 700 }}>
        Main info
      </Title>
      <Job name='Position' title='UI/UX Designer' />
      <Job name='Company' title='Cadabra' />
      <Job name='Location' title='NYC, New York, USA' />
      <Job name='Birthday Date' title='May 19, 1996' />
      <div style={{ marginTop: 20 }}>
        <Title level={4} style={{ fontWeight: 700 }}>
          Contact Info
        </Title>
        <Job name='Email' title='evanyates@gmail.com' />
        <Job name='Mobile Number' title='+1 675 346 23-10' />
        <Job name='Skype' title='Evan 2256' />
      </div>
    </>
  )
}

export default Infor
