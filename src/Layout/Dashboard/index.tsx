/* eslint-disable react/jsx-pascal-case */
import { Avatar, Col, DatePicker, Flex, Row, Space, Typography } from 'antd'
import { ArrowRightOutlined, CloudDownloadOutlined } from '@ant-design/icons'
import dayjs from 'dayjs'
import './style.css'
import { Link } from 'react-router-dom'
import Workload from '../../common/Dashboard/Workload'
import NearestEvents from '../../common/Dashboard/NearEvents'
import { dataEv, info, projectData } from './data'
import Project_Dash from './Project__Dash'

const Dashboard = () => {
  const { Title, Text } = Typography
  const { RangePicker } = DatePicker

  const dateFormat = 'YYYY-MM-DD'

  return (
    <>
      <div className='dashboard'>
        <Text type='secondary'>Welcome back, Evan!</Text>
        <Flex justify='space-between' align='center'>
          <Title level={2} style={{ fontWeight: 600 }}>
            DashBoard
          </Title>

          <RangePicker
            style={{ marginTop: 16, width: 280, height: 48 }}
            size='middle'
            defaultValue={[
              dayjs('2024-09-03', dateFormat),
              dayjs('2025-11-22', dateFormat),
            ]}
          />
        </Flex>
        <div className='banner__dash'>
          <div className='card__info'>
            <div className='card__info__title'>
              <h2 style={{ fontWeight: 600 }}>Workload</h2>
              <Space>
                <Link to={'/dashboard/viewall'}>
                  <Text type='secondary'>View All</Text>
                </Link>
                <ArrowRightOutlined />
              </Space>
            </div>
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
          <div className='event__next'>
            <Flex className='title__new' align='center' justify='space-between'>
              <h2 style={{ fontWeight: 600 }}>Nearest Events</h2>
              <Space>
                <Link to={'/dashboard/viewall'}>
                  <Text type='secondary'>View all</Text>
                </Link>
                <ArrowRightOutlined />
              </Space>
            </Flex>
            {dataEv.map((item, key) => (
              <NearestEvents
                key={key}
                titleBox={item.titleBox}
                timeAndDate={item.timeAndDate}
                time={item.time}
                icon={item.icon}
                img={item.img}
                red={item.red}
              />
            ))}
          </div>
        </div>

        <div className='all'>
          <div className='project__1'>
            <div className='project__dash'>
              <h2 style={{ fontWeight: 600 }}>Projects</h2>
              <Space>
                <Link to={'/viewAll'}>
                  <Text type='secondary'>View All</Text>
                </Link>
                <ArrowRightOutlined />
              </Space>
            </div>
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
          </div>
          <div className='left__project'>
            <div className='left__out'>
              <h2 style={{ fontWeight: 600 }}>Activity Stream</h2>
              <div className='left__title'>
                <Avatar style={{ width: 50, height: 50 }} />
                <div className='left__job__name'>
                  <span className='title'>Oscar Holloway</span>
                  <Text type='secondary'>UI/UX Designer</Text>
                </div>
              </div>
              <div className='left_1'>
                <div className='contend__left1'>
                  <CloudDownloadOutlined style={{ color: 'green' }} />
                  <h5>
                    Updated the status of Mind <br /> Map task to In Progress
                  </h5>
                </div>
              </div>
              <div className='left_1'>
                <div className='contend__left1'>
                  <CloudDownloadOutlined style={{ color: 'green' }} />
                  <h5>Attached files to the task</h5>
                </div>
              </div>
              <div className='left__title'>
                <Avatar style={{ width: 50, height: 50 }} />
                <div className='left__job__name'>
                  <span className='title'>Oscar Holloway</span>
                  <Text type='secondary'>UI/UX Designer</Text>
                </div>
              </div>
              <div className='left_1'>
                <div className='contend__left1'>
                  <CloudDownloadOutlined style={{ color: 'green' }} />
                  <h5>
                    Updated the status of Mind <br /> Map task to In Progress
                  </h5>
                </div>
              </div>

              <Link to={'/dashboard/viewall'} className='href'>
                <Text style={{ color: '#3F8CFF' }}>View All</Text>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard
