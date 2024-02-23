import { Avatar, Button, Flex, Modal, Tooltip, Typography } from 'antd'
import {
  PlusOutlined,
  DownloadOutlined,
  FilterOutlined,
  FieldTimeOutlined,
  StockOutlined,
  CaretLeftOutlined,
  EditOutlined,
  UserOutlined,
  AntDesignOutlined,
  SnippetsOutlined,
  FormOutlined,
} from '@ant-design/icons'
import './style.css'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ListItem from '../list/list'
import BoardTask from '../common/boardTask'
import TimeLine from '../timeline'
import ModalLay from '../common/model'

const ProjectDetails = () => {
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

  const [activeItem, setActiveItem] = useState<number | null>(null)

  const handleClick = (itemName: number) => {
    setActiveItem(itemName === activeItem ? null : itemName)
  }

  return (
    <div className='project__layout'>
      <div className='project__title'>
        <div>
          <Link to={'/project'} className='href1'>
            <CaretLeftOutlined style={{ color: 'silver' }} />
            <Text type='secondary'>Back To Project</Text>
          </Link>
          <Title level={2} style={{ fontWeight: 600 }}>
            Medical App (iOS native)
          </Title>
        </div>
        <Button
          type='primary'
          shape='round'
          icon={<PlusOutlined />}
          size={'large'}>
          Add Task
        </Button>
      </div>
      <div className='project__content'>
        <div className='left__project__cot1'>
          <div className='titlle__details'>
            <div>
              <Text type='secondary'>Project Number</Text>
              <Title level={5} style={{ fontWeight: 600 }}>
                PN0001245
              </Title>
            </div>
            <div className='icon__view'>
              <Link to={'/project/details/PN0001245'}>
                <EditOutlined style={{ fontSize: 20 }} />
              </Link>
            </div>
          </div>
          <Title level={5} style={{ fontWeight: 700 }}>
            Description
          </Title>
          <Text type='secondary'>
            App for maintaining your medical record, making appointments with a
            doctor, storing prescriptions
          </Text>
          <div style={{ marginTop: 20 }}>
            <Text type='secondary'>Reporter</Text>
            <Flex align='center' gap={10}>
              <Avatar icon={<UserOutlined />} />
              <h2 style={{ fontWeight: 600 }}>Evan Yates</h2>
            </Flex>
          </div>
          <Flex vertical={true} gap={10} style={{ marginTop: 20 }}>
            <Text type='secondary'>Assignees</Text>
            <Avatar.Group>
              <Avatar src='https://api.dicebear.com/7.x/miniavs/svg?seed=1' />
              <a href='https://ant.design'>
                <Avatar style={{ backgroundColor: '#f56a00' }}>K</Avatar>
              </a>
              <Tooltip title='Ant User' placement='top'>
                <Avatar
                  style={{ backgroundColor: '#87d068' }}
                  icon={<UserOutlined />}
                />
              </Tooltip>
              <Avatar
                style={{ backgroundColor: '#1677ff' }}
                icon={<AntDesignOutlined />}
              />
            </Avatar.Group>
          </Flex>
          <Flex vertical={true} gap={10} style={{ marginTop: 20 }}>
            <Text type='secondary'>Priority</Text>
            <svg
              width='81'
              height='24'
              viewBox='0 0 81 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <g clip-path='url(#clip0_0_12968)'>
                <path
                  d='M36.282 8.13H37.696V18H36.1V11.476L33.496 16.404H32.292L29.674 11.546L29.688 18H28.092V8.13H29.52L32.908 14.584L36.282 8.13ZM45.6875 14.892H41.0255C41.0815 15.5267 41.2728 15.998 41.5995 16.306C41.9262 16.614 42.3928 16.768 42.9995 16.768C43.7555 16.768 44.4462 16.5253 45.0715 16.04L45.5755 17.244C45.2582 17.5053 44.8568 17.7153 44.3715 17.874C43.8955 18.0327 43.4148 18.112 42.9295 18.112C41.8095 18.112 40.9228 17.7947 40.2695 17.16C39.6255 16.5253 39.3035 15.6573 39.3035 14.556C39.3035 13.856 39.4435 13.2353 39.7235 12.694C40.0035 12.1527 40.3955 11.7327 40.8995 11.434C41.4128 11.1353 41.9915 10.986 42.6355 10.986C43.5782 10.986 44.3202 11.2893 44.8615 11.896C45.4122 12.5027 45.6875 13.338 45.6875 14.402V14.892ZM42.6775 12.218C42.2108 12.218 41.8328 12.3673 41.5435 12.666C41.2635 12.9647 41.0908 13.394 41.0255 13.954H44.1895C44.1708 13.3847 44.0308 12.9553 43.7695 12.666C43.5082 12.3673 43.1442 12.218 42.6775 12.218ZM53.727 8.13V18H51.991V16.894C51.7857 17.2767 51.487 17.5753 51.095 17.79C50.7123 18.0047 50.2737 18.112 49.779 18.112C49.191 18.112 48.6637 17.9627 48.197 17.664C47.7397 17.3653 47.3803 16.9453 47.119 16.404C46.867 15.8533 46.741 15.2233 46.741 14.514C46.741 13.8047 46.867 13.184 47.119 12.652C47.3803 12.12 47.7397 11.7093 48.197 11.42C48.6543 11.1307 49.1817 10.986 49.779 10.986C50.2737 10.986 50.7123 11.0887 51.095 11.294C51.4777 11.4993 51.7717 11.7887 51.977 12.162V8.13H53.727ZM50.241 16.754C50.801 16.754 51.2303 16.5627 51.529 16.18C51.837 15.7973 51.991 15.2513 51.991 14.542C51.991 13.8327 51.837 13.2913 51.529 12.918C51.2303 12.5353 50.8057 12.344 50.255 12.344C49.695 12.344 49.261 12.5307 48.953 12.904C48.645 13.2773 48.491 13.814 48.491 14.514C48.491 15.2233 48.645 15.774 48.953 16.166C49.261 16.558 49.6903 16.754 50.241 16.754ZM55.5272 18V11.154H57.2772V18H55.5272ZM55.4292 7.976H57.3612V9.698H55.4292V7.976ZM65.3679 11.154V18H63.6599V16.95C63.4452 17.3233 63.1559 17.6127 62.7919 17.818C62.4279 18.014 62.0172 18.112 61.5599 18.112C59.8799 18.112 59.0399 17.1693 59.0399 15.284V11.154H60.7899V15.298C60.7899 15.7833 60.8879 16.1427 61.0839 16.376C61.2799 16.6093 61.5879 16.726 62.0079 16.726C62.4932 16.726 62.8805 16.5673 63.1699 16.25C63.4685 15.9233 63.6179 15.494 63.6179 14.962V11.154H65.3679ZM75.3233 10.986C76.098 10.986 76.6766 11.2193 77.0593 11.686C77.442 12.1433 77.6333 12.848 77.6333 13.8V18H75.8833V13.87C75.8833 13.3473 75.7946 12.9693 75.6173 12.736C75.44 12.4933 75.1553 12.372 74.7633 12.372C74.2966 12.372 73.9326 12.5307 73.6713 12.848C73.41 13.1653 73.2793 13.6087 73.2793 14.178V18H71.5293V13.87C71.5293 13.3473 71.4406 12.9693 71.2633 12.736C71.0953 12.4933 70.8106 12.372 70.4093 12.372C69.952 12.372 69.5926 12.5307 69.3313 12.848C69.07 13.1653 68.9393 13.6087 68.9393 14.178V18H67.1893V11.154H68.8973V12.12C69.1026 11.7467 69.3873 11.4667 69.7513 11.28C70.1153 11.084 70.5306 10.986 70.9973 10.986C72.0333 10.986 72.7193 11.4153 73.0553 12.274C73.27 11.8727 73.578 11.56 73.9793 11.336C74.3806 11.1027 74.8286 10.986 75.3233 10.986Z'
                  fill='#FFBD21'
                />
                <path
                  d='M12.6129 4.2097L12.7071 4.29289L17.7071 9.29289C18.0976 9.68342 18.0976 10.3166 17.7071 10.7071C17.3466 11.0676 16.7794 11.0953 16.3871 10.7903L16.2929 10.7071L13 7.415V19C13 19.5523 12.5523 20 12 20C11.4872 20 11.0645 19.614 11.0067 19.1166L11 19V7.415L7.70711 10.7071C7.34662 11.0676 6.77939 11.0953 6.3871 10.7903L6.29289 10.7071C5.93241 10.3466 5.90468 9.77939 6.2097 9.3871L6.29289 9.29289L11.2929 4.29289C11.6534 3.93241 12.2206 3.90468 12.6129 4.2097Z'
                  fill='#FFBD21'
                />
              </g>
              <defs>
                <clipPath id='clip0_0_12968'>
                  <rect width='79' height='24' fill='white' />
                </clipPath>
              </defs>
            </svg>
          </Flex>
          <Flex vertical={true} style={{ marginTop: 20 }}>
            <Text type='secondary'>Dead Line</Text>
            <Title level={5} style={{ fontWeight: 500 }}>
              Feb 23, 2020
            </Title>
          </Flex>
          <Flex style={{ marginTop: 20 }} gap={10} align='center'>
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M7 2C7 1.44772 7.44772 1 8 1C8.55228 1 9 1.44772 9 2V3H15V2C15 1.44772 15.4477 1 16 1C16.5523 1 17 1.44772 17 2V3C19.2091 3 21 4.79086 21 7V17C21 19.2091 19.2091 21 17 21H7C4.79086 21 3 19.2091 3 17V7C3 4.79086 4.79086 3 7 3V2ZM15 5C15 5.55228 15.4477 6 16 6C16.5523 6 17 5.55228 17 5L17.1493 5.00549C18.1841 5.08183 19 5.94564 19 7V8H5V7L5.00549 6.85074C5.08183 5.81588 5.94564 5 7 5C7 5.55228 7.44772 6 8 6C8.55228 6 9 5.55228 9 5H15Z'
                fill='#7D8592'
              />
            </svg>
            <Text type='secondary'>Created May 28, 2020</Text>
          </Flex>
          <Flex style={{ marginTop: 30 }} gap={10} align='center'>
            <div className='icon__view' style={{ color: '#15C0E6' }}>
              <FormOutlined style={{ fontSize: 20 }} />
            </div>
            <div className='icon__view' style={{ color: '#6D5DD3' }}>
              <SnippetsOutlined style={{ fontSize: 20 }} />
            </div>
          </Flex>
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

export default ProjectDetails
