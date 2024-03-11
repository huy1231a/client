import React, { useState } from 'react'
import { Typography, Button, Pagination, Modal, message } from 'antd'
import { FilterOutlined, PlusOutlined } from '@ant-design/icons'
import './style.css'
import ListUser from './ListUser'
import { DataUser, ListActivityData } from './Type'
import ListActivity from './listActivity'
import ModalLay from '../Project/common/model'
import ModelEmply from './modelEmployes'

const Employe = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isModalOpenEp, setIsModalOpenEp] = useState(false)
  const [isClick, setIsClick] = useState<number>(1)
  const [currentPage, setCurrentPage] = useState<number>(1)
  const pageSize = 7 // Adjust the number of items per page as needed

  const showModal = () => {
    setIsModalOpen(true)
  }

  const showModalEp = () => {
    setIsModalOpenEp(true)
  }

  const handleClickApprove = () => {
    setIsModalOpenEp(false)
    message.success('Approve sucess')
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  const handleOk = () => {
    setIsModalOpen(false)
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }

  const { Title } = Typography
  const startIndex = (currentPage - 1) * pageSize
  const endIndex = startIndex + pageSize

  const dataTotal = DataUser.length

  return (
    <div className='employye__lay'>
      <div className='employees__header'>
        <div className='employees__title'>
          <Title level={2}>Employees ({dataTotal})</Title>
        </div>
        <div className='employees__middle'>
          <div
            className={`${
              isClick === 1
                ? 'employees__middle__list'
                : 'employees__middle__activity'
            }`}
            onClick={() => {
              setIsClick(1)
            }}>
            List
          </div>
          <div
            className={`${
              isClick === 2
                ? 'employees__middle__list'
                : 'employees__middle__activity'
            }`}
            onClick={() => {
              setIsClick(2)
            }}>
            Activity
          </div>
        </div>
        <div className='employees__end'>
          <Button
            type='primary'
            icon={<FilterOutlined />}
            size={'large'}
            onClick={showModal}
          />
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
          <Button
            style={{ marginRight: -50 }}
            type='primary'
            shape='round'
            icon={<PlusOutlined />}
            size={'large'}
            onClick={showModalEp}>
            Add Employees
          </Button>

          <Modal
            title='Add Employee'
            centered
            open={isModalOpenEp}
            onCancel={() => setIsModalOpenEp(false)}
            footer={[
              <Button key='submit' type='primary' onClick={handleClickApprove}>
                Approve
              </Button>,
            ]}>
            <ModelEmply />
          </Modal>
        </div>
      </div>
      {isClick === 1 && (
        <>
          {DataUser.slice(startIndex, endIndex).map((item) => (
            <ListUser
              avatar={item.avatar}
              age={item.age}
              dob={item.dob}
              gmail={item.gmail}
              name={item.name}
              position={item.position}
              sex={item.sex}
              typeOfPostion={item.typeOfPostion}
            />
          ))}
          <Pagination
            className='page__'
            current={currentPage}
            total={DataUser.length}
            pageSize={pageSize}
            onChange={handlePageChange}
          />
        </>
      )}
      {isClick === 2 && (
        <>
          <div className='parent'>
            {ListActivityData.slice(startIndex, endIndex).map((item) => (
              <ListActivity
                avatar={item.avatar}
                email={item.email}
                name={item.name}
                typeOfPostion={item.typeOfPostion}
                blTask={item.blTask}
                taskIp={item.taskIp}
                taskIr={item.taskIr}
              />
            ))}
          </div>
          <Pagination
            className='page__'
            current={currentPage}
            total={ListActivityData.length}
            pageSize={pageSize}
            onChange={handlePageChange}
          />
        </>
      )}
    </div>
  )
}

export default Employe
