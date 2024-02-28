/* eslint-disable react/jsx-pascal-case */
import {
  Avatar,
  Button,
  Col,
  Divider,
  Modal,
  Row,
  Select,
  Typography,
} from 'antd'
import { EditOutlined, FilterOutlined, PlusOutlined } from '@ant-design/icons'
import './style.css'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { img } from './image'
import Job from './common/job/job'
import ModalLay from '../Project/common/model'
import Project_Dash from '../Dashboard/Project__Dash'
import { info, projectData } from '../Dashboard/data'
import Workload from '../../common/Dashboard/Workload'
import Vacations, { dataVacation } from './common/vactions'
import Request, { requestData } from './common/request'

const MyProfile = () => {
  const { Title } = Typography

  useEffect(() => {
    setActiveItem(1)
  }, [])

  const [activeItem, setActiveItem] = useState<number | null>(null)

  const handleClick = (itemName: number) => {
    setActiveItem(itemName === activeItem ? null : itemName)
  }

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isModalOpenRq, setIsModalOpenRq] = useState(false)

  const showModal = () => {
    setIsModalOpen(true)
  }
  const showModalAddRq = () => {
    setIsModalOpenRq(true)
  }

  const handleOk = () => {
    setIsModalOpen(false)
  }

  const handleOkRq = () => {
    setIsModalOpenRq(false)
  }

  const handleCancelRq = () => {
    setIsModalOpenRq(false)
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }

  return (
    <div className='my__profile'>
      <div className='title__calender'>
        <Title level={2} style={{ fontWeight: 600 }}>
          My Profile
        </Title>
        <div className='setting'>
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className='svg'>
            <path
              fill-rule='evenodd'
              clip-rule='evenodd'
              d='M12 0C10.3431 0 9 1.34315 9 3V3.17L8.99255 3.26444C8.96857 3.41945 8.88797 3.56073 8.76793 3.66135L8.706 3.705L8.64655 3.71811C8.60218 3.73073 8.55864 3.74642 8.51623 3.76514C8.27314 3.87243 7.98922 3.82095 7.79926 3.63514L7.74711 3.58289C7.18479 3.01996 6.42123 2.70343 5.625 2.70343C4.82877 2.70343 4.0652 3.01996 3.5025 3.58329C2.93996 4.14521 2.62343 4.90877 2.62343 5.705C2.62343 6.43488 2.8894 7.13731 3.36764 7.68274L3.56289 7.88711C3.74095 8.06922 3.79243 8.35314 3.68514 8.59623C3.56934 8.90531 3.33344 9.07403 3.06662 9.08027L3 9.08C1.34315 9.08 0 10.4231 0 12.08C0 13.7369 1.34315 15.08 3 15.08H3.17C3.42508 15.081 3.6588 15.2358 3.76086 15.4739C3.87243 15.7269 3.82095 16.0108 3.63514 16.2007L3.58289 16.2529C3.01996 16.8152 2.70343 17.5788 2.70343 18.375C2.70343 19.1712 3.01996 19.9348 3.58329 20.4975C4.14521 21.06 4.90877 21.3766 5.705 21.3766C6.43488 21.3766 7.13731 21.1106 7.68274 20.6324L7.88711 20.4371C8.06922 20.2591 8.35314 20.2076 8.59623 20.3149C8.90531 20.4307 9.07403 20.6666 9.08027 20.9334L9.08 21C9.08 22.6569 10.4231 24 12.08 24C13.7369 24 15.08 22.6569 15.08 21V20.83C15.081 20.5749 15.2358 20.3412 15.4739 20.2391C15.7269 20.1276 16.0108 20.1791 16.2007 20.3649L16.2529 20.4171C16.8152 20.98 17.5788 21.2966 18.375 21.2966C19.1712 21.2966 19.9348 20.98 20.4975 20.4167C21.06 19.8548 21.3766 19.0912 21.3766 18.295C21.3766 17.5651 21.1106 16.8627 20.6324 16.3173L20.4371 16.1129C20.2591 15.9308 20.2076 15.6469 20.3149 15.4038C20.4212 15.1558 20.6549 15.001 20.914 15L21 15C22.6569 15 24 13.6569 24 12C24 10.3431 22.6569 9 21 9H20.83L20.7356 8.99255C20.5805 8.96857 20.4393 8.88797 20.3386 8.76793L20.294 8.706L20.2819 8.64655C20.2693 8.60218 20.2536 8.55864 20.2349 8.51623C20.1276 8.27314 20.1791 7.98922 20.3649 7.79926L20.4171 7.74711C20.98 7.18479 21.2966 6.42123 21.2966 5.625C21.2966 4.82877 20.98 4.0652 20.4167 3.5025C19.8548 2.93996 19.0912 2.62343 18.295 2.62343C17.5651 2.62343 16.8627 2.8894 16.3173 3.36764L16.1129 3.56289C15.9308 3.74095 15.6469 3.79243 15.4038 3.68514C15.1558 3.5788 15.001 3.34508 15 3.08601L15 3C15 1.34315 13.6569 0 12 0ZM12 2C12.5523 2 13 2.44772 13 3V3.09C13.0042 4.1502 13.6353 5.10306 14.6061 5.51914C15.5873 5.95227 16.7448 5.74239 17.5193 4.98486L17.5871 4.91711C17.7751 4.72894 18.0296 4.62343 18.295 4.62343C18.5604 4.62343 18.8149 4.72894 19.0025 4.91671C19.1911 5.10507 19.2966 5.35959 19.2966 5.625C19.2966 5.89041 19.1911 6.14493 19.0033 6.3325L18.9429 6.39289L18.8136 6.53472C18.2375 7.21376 18.0416 8.12568 18.2775 8.96794L18.32 9C18.32 9.13543 18.3475 9.26945 18.4009 9.39393C18.8169 10.3647 19.7698 10.9958 20.826 11L21 11C21.5523 11 22 11.4477 22 12C22 12.5523 21.5523 13 21 13H20.91C19.8498 13.0042 18.8969 13.6353 18.4809 14.6061C18.0477 15.5873 18.2576 16.7448 19.0151 17.5193L19.0829 17.5871C19.2711 17.7751 19.3766 18.0296 19.3766 18.295C19.3766 18.5604 19.2711 18.8149 19.0833 19.0025C18.8949 19.1911 18.6404 19.2966 18.375 19.2966C18.1096 19.2966 17.8551 19.1911 17.6675 19.0033L17.6071 18.9429C16.8248 18.1776 15.6673 17.9677 14.6762 18.4051C13.7153 18.8169 13.0842 19.7698 13.08 20.826L13.08 21C13.08 21.5523 12.6323 22 12.08 22C11.5277 22 11.08 21.5523 11.08 21V20.91C11.0558 19.8641 10.4451 18.9507 9.52187 18.5337L9.34518 18.4615C8.41268 18.0477 7.25516 18.2576 6.48073 19.0151L6.41289 19.0829C6.22493 19.2711 5.97041 19.3766 5.705 19.3766C5.43959 19.3766 5.18507 19.2711 4.9975 19.0833C4.80894 18.8949 4.70343 18.6404 4.70343 18.375C4.70343 18.1096 4.80894 17.8551 4.99671 17.6675L5.05711 17.6071C5.82239 16.8248 6.03227 15.6673 5.59486 14.6762C5.18306 13.7153 4.2302 13.0842 3.17399 13.08L3 13.08C2.44772 13.08 2 12.6323 2 12.08C2 11.5277 2.44772 11.08 3 11.08H3.09C4.13585 11.0558 5.04927 10.4451 5.46626 9.52187L5.53854 9.34518C5.95227 8.41268 5.74239 7.25516 4.98486 6.48073L4.91711 6.41289C4.72894 6.22493 4.62343 5.97041 4.62343 5.705C4.62343 5.43959 4.72894 5.18507 4.91671 4.9975C5.10507 4.80894 5.35959 4.70343 5.625 4.70343C5.89041 4.70343 6.14493 4.80894 6.3325 4.99671L6.39289 5.05711L6.53472 5.18637C7.21376 5.76253 8.12568 5.95835 8.96794 5.72251L9 5.68C9.13543 5.68 9.26945 5.65249 9.39393 5.59914C10.3647 5.18306 10.9958 4.2302 11 3.17399L11 3C11 2.44772 11.4477 2 12 2ZM12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8ZM12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10Z'
              fill='#0A1629'
            />
          </svg>
        </div>
      </div>
      <div className='project__content'>
        <div className='left__project__cot1'>
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
              <Link to={'/project/details/PN0001245'}>
                <EditOutlined style={{ fontSize: 20 }} />
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
        </div>
        <div className='right__project__cot'>
          <div className='project__info'>
            <div className='project__info__right'>
              <div
                className={`${activeItem === 1 ? 'active' : 'one'}`}
                onClick={() => handleClick(1)}>
                Projects
              </div>
              <div
                className={`${activeItem === 2 ? 'active' : 'one'}`}
                onClick={() => handleClick(2)}>
                Team
              </div>
              <div
                className={`${activeItem === 3 ? 'active' : 'one'}`}
                onClick={() => handleClick(3)}>
                My Vacations
              </div>
            </div>
            <div className='project__info__left'>
              {activeItem === 3 && (
                <Button
                  style={{ marginRight: -50 }}
                  type='primary'
                  shape='round'
                  icon={<PlusOutlined />}
                  size={'large'}
                  onClick={showModalAddRq}>
                  Add Request
                </Button>
              )}
              <Modal
                title='Add Request'
                open={isModalOpenRq}
                onCancel={handleCancelRq}
                centered
                width={413}
                footer={[
                  <Button key='back' onClick={handleCancelRq}>
                    Close
                  </Button>,
                  <Button key='submit' type='primary' onClick={handleOkRq}>
                    Send Request
                  </Button>,
                ]}>
                aaa
              </Modal>
              {activeItem === 1 && (
                <>
                  <div className='one__1'>
                    <Button
                      type='primary'
                      icon={<FilterOutlined />}
                      size={'large'}
                      onClick={showModal}
                    />
                  </div>
                  <div className='two__2'>
                    <Select
                      showSearch
                      style={{ maxWidth: '100%' }}
                      placeholder='Select duration'
                      optionFilterProp='children'
                      defaultValue={'Curren Project'}
                      className='seleceID'
                      filterOption={(input, option) =>
                        (option?.label ?? '').includes(input)
                      }
                      filterSort={(optionA, optionB) =>
                        (optionA?.label ?? '')
                          .toLowerCase()
                          .localeCompare((optionB?.label ?? '').toLowerCase())
                      }
                      options={[
                        {
                          value: '1',
                          label: 'Curren Project',
                        },
                        {
                          value: '2',
                          label: 'In Progress',
                        },
                        {
                          value: '3',
                          label: 'In review',
                        },
                        {
                          value: '4',
                          label: 'Done',
                        },
                      ]}
                    />
                  </div>
                </>
              )}
            </div>
          </div>
          {activeItem === 1 && (
            <>
              <div className='project__'>
                {projectData.map((item, key) => (
                  <Project_Dash
                    key={key}
                    id={item.id}
                    name={item.name}
                    status={item.status}
                    activeTask={item.activeTask}
                    allTask={item.allTask}
                    date={item.date}
                  />
                ))}
              </div>
            </>
          )}

          {activeItem === 2 && (
            <>
              <div className='workload__info'>
                <Row gutter={[60, 24]} style={{ margin: 'auto' }}>
                  {info.map((item, key) => (
                    <Col
                      className='gutter-row'
                      span={6}
                      style={{ width: '33.33%' }}>
                      <Workload
                        key={key}
                        name={item.name}
                        job={item.job}
                        level={item.level}
                      />
                    </Col>
                  ))}
                </Row>
              </div>
            </>
          )}
          {activeItem === 3 && (
            <>
              <div className='info__se'>
                {dataVacation.map((item) => (
                  <Vacations
                    color={item.color}
                    contend={item.contend}
                    number={item.number}
                    title={item.title}
                  />
                ))}
              </div>
              <Title level={3} style={{ padding: 10 }}>
                My Requests
              </Title>
              {requestData.map((item) => (
                <Request
                  title={item.title}
                  duration={item.duration}
                  startDate={item.startDate}
                  endDate={item.endDate}
                  status={item.status}
                  svg={item.svg}
                />
              ))}
            </>
          )}
        </div>
      </div>
      <Modal
        title='Filters'
        open={isModalOpen}
        style={{ left: 670, height: 1498 }}
        onCancel={handleCancel}
        width={413}
        footer={[
          <Button key='back' onClick={handleCancel}>
            Close
          </Button>,
          <Button key='submit' type='primary' onClick={handleOk}>
            Save in Filters
          </Button>,
        ]}>
        <ModalLay />
      </Modal>
    </div>
  )
}

export default MyProfile
