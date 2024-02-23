import { Button, Divider, Flex, Menu, MenuProps, Modal, Typography } from 'antd'
import {
  PlusOutlined,
  DownloadOutlined,
  FilterOutlined,
  FieldTimeOutlined,
  StockOutlined,
} from '@ant-design/icons'
import './style.css'
import { useEffect, useState } from 'react'
import SubMenu from 'antd/es/menu/SubMenu'
import ListItem from './list/list'
import BoardTask from './common/boardTask'
import TimeLine from './timeline'
import ModalLay from './common/model'
import { Link } from 'react-router-dom'
// import { Link } from 'react-router-dom'

const Project = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const showModal = () => {
    setIsModalOpen(true)
  }

  const handleOk = () => {
    setIsModalOpen(false)
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }

  useEffect(() => {
    setActiveItem(1)
  }, [])
  const { Text, Title } = Typography

  const rootSubmenuKeys = ['sub1']

  const [openKeys, setOpenKeys] = useState(['sub1'])

  const [activeItem, setActiveItem] = useState<number | null>(null)

  const handleClick = (itemName: number) => {
    setActiveItem(itemName === activeItem ? null : itemName)
  }

  const onOpenChange: MenuProps['onOpenChange'] = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1)
    if (latestOpenKey && rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
      setOpenKeys(keys)
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : [])
    }
  }

  return (
    <div className='project__layout'>
      <div className='project__title'>
        <Title level={2} style={{ fontWeight: 600 }}>
          Projects
        </Title>
        <Button
          type='primary'
          shape='round'
          icon={<PlusOutlined />}
          size={'large'}>
          Add Project
        </Button>
      </div>
      <div className='project__content'>
        <div className='left__project__cot'>
          <Menu
            mode='inline'
            openKeys={openKeys}
            onOpenChange={onOpenChange}
            style={{ backgroundColor: 'transparent' }}
            className='menu__pro'>
            <SubMenu
              key='sub1'
              title='Current Projects'
              style={{ backgroundColor: 'transparent' }}>
              <Menu.Item
                key='1'
                style={{
                  width: '90%',
                  height: 'auto',
                  margin: '10px 10px',
                  backgroundColor: 'transparent',
                }}>
                <Flex
                  vertical={true}
                  align='start'
                  gap={10}
                  style={{ margin: '10px 10px' }}>
                  <Text type='secondary'>PN0001245</Text>
                  <span style={{ fontWeight: 700 }}>
                    Medical App (iOS native)
                  </span>
                  <Link to={'/project/details'} className='href'>
                    <Text style={{ color: '#3F8CFF' }}>View More</Text>
                  </Link>
                </Flex>
              </Menu.Item>
              <Divider />
              <Menu.Item
                key='2'
                style={{ width: '90%', height: 'auto', margin: '10px 10px' }}>
                <Flex
                  vertical={true}
                  align='start'
                  gap={10}
                  style={{ margin: '10px 10px' }}>
                  <Text type='secondary'>PN0001245</Text>
                  <span style={{ fontWeight: 700 }}>Food Delivery Service</span>
                  <Link to={'/project/details'} className='href'>
                    <Text style={{ color: '#3F8CFF' }}>View More</Text>
                  </Link>
                  {/* <Flex gap={10}>
                    <Link to={'/details'}>
                      <Text type='secondary'>View All</Text>
                    </Link>
                    <ArrowRightOutlined />
                  </Flex> */}
                </Flex>
              </Menu.Item>
              <Divider />
              <Menu.Item
                key='3'
                style={{ width: '90%', height: 'auto', margin: '10px 10px' }}>
                <Flex
                  vertical={true}
                  align='start'
                  gap={10}
                  style={{ margin: '10px 10px' }}>
                  <Text type='secondary'>PN0001245</Text>
                  <span style={{ fontWeight: 700 }}>Fortune website</span>
                  <Link to={'/project/details'} className='href'>
                    <Text style={{ color: '#3F8CFF' }}>View More</Text>
                  </Link>
                  {/* <Flex gap={10}>
                    <Link to={'/details'}>
                      <Text type='secondary'>View All</Text>
                    </Link>
                    <ArrowRightOutlined />
                  </Flex> */}
                </Flex>
              </Menu.Item>
              <Divider />
              <Menu.Item
                key='4'
                style={{ width: '90%', height: 'auto', margin: '10px 10px' }}>
                <Flex
                  vertical={true}
                  align='start'
                  gap={10}
                  style={{ margin: '10px 10px' }}>
                  <Text type='secondary'>PN0001245</Text>
                  <span style={{ fontWeight: 700 }}>Planner App</span>
                  <Link to={'/project/details'} className='href'>
                    <Text style={{ color: '#3F8CFF' }}>View More</Text>
                  </Link>
                  {/* <Flex gap={10}>
                    <Link to={'/details'}>
                      <Text type='secondary'>View All</Text>
                    </Link>
                    <ArrowRightOutlined />
                  </Flex> */}
                </Flex>
              </Menu.Item>
              <Divider />
              <Menu.Item
                key='5'
                style={{ width: '90%', height: 'auto', margin: '10px 10px' }}>
                <Flex
                  vertical={true}
                  align='start'
                  gap={10}
                  style={{ margin: '10px 10px' }}>
                  <Text type='secondary'>PN0001245</Text>
                  <span style={{ fontWeight: 700 }}>
                    Time tracker - personal <br /> account
                  </span>
                  <Link to={'/project/details'} className='href'>
                    <Text style={{ color: '#3F8CFF' }}>View More</Text>
                  </Link>
                  {/* <Flex gap={10}>
                    <Link to={'/details'}>
                      <Text type='secondary'>View All</Text>
                    </Link>
                    <ArrowRightOutlined />
                  </Flex> */}
                </Flex>
              </Menu.Item>
              <Divider />
              <Menu.Item
                key='6'
                style={{ width: '90%', height: 'auto', margin: '10px 10px' }}>
                <Flex
                  vertical={true}
                  align='start'
                  gap={10}
                  style={{ margin: '10px 10px' }}>
                  <Text type='secondary'>PN0001245</Text>
                  <span style={{ fontWeight: 700 }}>Internal Project</span>
                  <Link to={'/project/details'} className='href'>
                    <Text style={{ color: '#3F8CFF' }}>View More</Text>
                  </Link>
                  {/* <Flex gap={10}>
                    <Link to={'/details'}>
                      <Text type='secondary'>View All</Text>
                    </Link>
                    <ArrowRightOutlined />
                  </Flex> */}
                </Flex>
              </Menu.Item>
              <Divider />
            </SubMenu>
          </Menu>
        </div>
        <div className='right__project__cot'>
          <div className='contend__rig'>
            <div className='text'>Tasks</div>
            <Flex gap={10}>
              <Button
                type='primary'
                icon={<DownloadOutlined />}
                size={'large'}
                className={`${activeItem === 1 ? 'btn-1' : ''}`}
                onClick={() => handleClick(1)}
              />
              <Button
                type='primary'
                icon={<StockOutlined />}
                className={`${activeItem === 2 ? 'btn-1' : ''}`}
                size={'large'}
                onClick={() => handleClick(2)}
              />
              <Button
                type='primary'
                icon={<FieldTimeOutlined />}
                className={`${activeItem === 3 ? 'btn-1' : ''}`}
                size={'large'}
                onClick={() => handleClick(3)}
              />
            </Flex>
            <div>
              <Button
                type='primary'
                icon={<FilterOutlined />}
                size={'large'}
                onClick={showModal}
              />
            </div>
          </div>
          {activeItem === 1 && <ListItem />}
          {activeItem === 2 && <BoardTask />}
          {activeItem === 3 && <TimeLine />}

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
      </div>
    </div>
  )
}

export default Project
