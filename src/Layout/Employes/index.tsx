import React, { useState } from 'react';
import { Typography, Button, Pagination } from 'antd';
import {
  FilterOutlined,
  PlusOutlined
} from '@ant-design/icons';
import './style.css';
import ListUser from './ListUser';
import { DataUser } from './Type';
import ListActivity from './listActivity';

const Employe = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isClick, setIsClick] = useState<number>(1);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const pageSize = 7; // Adjust the number of items per page as needed

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const { Title } = Typography;
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  return (
    <div className='employye__lay'>
      <div className='employees__header'>
        <div className='employees__title'>
          <Title level={2}>Employees</Title>
        </div>
        <div className='employees__middle'>
          <div className={`${isClick === 1 ? 'employees__middle__list' : 'employees__middle__activity'}`} onClick={() => { setIsClick(1) }}>
            List
          </div>
          <div className={`${isClick === 2 ? 'employees__middle__list' : 'employees__middle__activity'}`} onClick={() => { setIsClick(2) }}>
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
          <Button
            style={{ marginRight: -50 }}
            type='primary'
            shape='round'
            icon={<PlusOutlined />}
            size={'large'}
          >
            Add Employees
          </Button>
        </div>
      </div>
      {isClick === 1 && (
        <>
          {DataUser.slice(startIndex, endIndex).map((item) => (
            <ListUser avatar={item.avatar} age={item.age} dob={item.dob} gmail={item.gmail} name={item.name} position={item.position} sex={item.sex} typeOfPostion={item.typeOfPostion} />
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
      {
        isClick === 2 && (
          <ListActivity />
        )
      }
    </div>
  );
};

export default Employe;
