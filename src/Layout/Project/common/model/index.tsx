import React from 'react'
import './style.css'
import {
  Avatar,
  Checkbox,
  CheckboxProps,
  Select,
  Typography,
  Input,
  Tooltip,
} from 'antd'
import { Link } from 'react-router-dom'
import { SearchProps } from 'antd/es/input'
import { UserOutlined, AntDesignOutlined } from '@ant-design/icons'

const ModalLay = () => {
  const onChange: CheckboxProps['onChange'] = (e) => {
    console.log(`checked = ${e.target.checked}`)
  }

  const onSearch: SearchProps['onSearch'] = (value, _e, info) =>
    console.log(info?.source, value)

  const { Search } = Input
  const { Text } = Typography
  return (
    <div className='modal__full'>
      <div className='divider__modal'></div>
      <div className='select__m'>
        <Text type='secondary' style={{ fontWeight: 700 }}>
          Period
        </Text>
        <Select
          showSearch
          style={{ width: '100%', height: 36 }}
          placeholder='Search to Select'
          optionFilterProp='children'
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
              label: 'To do',
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
      <div className='divider__modal'></div>
      <div className='task__group'>
        <Text type='secondary' style={{ fontWeight: 700 }}>
          Task groups
        </Text>
      </div>
      <div className='check__box'>
        <Checkbox onChange={onChange}>Design</Checkbox>
        <Checkbox onChange={onChange}>Development</Checkbox>
        <Checkbox onChange={onChange}>Testing</Checkbox>
        <Checkbox onChange={onChange}>Marketing</Checkbox>
        <Checkbox onChange={onChange}>Project Management</Checkbox>
      </div>
      <div
        className='divider__modal'
        style={{ margin: '15px 0px 15px 0px' }}></div>
      <div>
        <Text type='secondary' style={{ fontWeight: 700 }}>
          Reporter
        </Text>
        <div className='check__box'>
          <Checkbox onChange={onChange}>
            <div className='check__box__2'>
              <Avatar style={{ width: 24, height: 24 }} />
              <span>Oscar Holloway</span>
            </div>
          </Checkbox>

          <Checkbox onChange={onChange}>
            <div className='check__box__2'>
              <Avatar style={{ width: 24, height: 24 }} />
              <span>Leonard Rodriquez</span>
            </div>
          </Checkbox>
          <Checkbox onChange={onChange}>
            <div className='check__box__2'>
              <Avatar style={{ width: 24, height: 24 }} />
              <span>Violet Robbins</span>
            </div>
          </Checkbox>
          <Checkbox onChange={onChange}>
            <div className='check__box__2'>
              <Avatar style={{ width: 24, height: 24 }} />
              <span>Owen Chambers</span>
            </div>
          </Checkbox>
          <Checkbox onChange={onChange}>
            <div className='check__box__2'>
              <Avatar style={{ width: 24, height: 24 }} />
              <span>Gabriel Flowers</span>
            </div>
          </Checkbox>
          <Link to={'/dashboard/viewall'} className='href'>
            <Text style={{ color: '#3F8CFF' }}>View More</Text>
          </Link>
        </div>
      </div>
      <div
        className='divider__modal'
        style={{ margin: '15px 0px 15px 0px' }}></div>
      <div className='select__m'>
        <Text type='secondary' style={{ fontWeight: 700 }}>
          Assignees
        </Text>
        {/* seleceID */}
        <Search
          placeholder='Search text'
          onSearch={onSearch}
          style={{ width: '100%' }}
          className='seleceID'
        />
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
      </div>
      <div
        className='divider__modal'
        style={{ margin: '15px 0px 15px 0px' }}></div>
      <Text type='secondary' style={{ fontWeight: 700 }}>
        Estimate
      </Text>
      <Select
        showSearch
        style={{ width: '100%', height: 36 }}
        placeholder='Select duration'
        optionFilterProp='children'
        className='seleceID'
        filterOption={(input, option) => (option?.label ?? '').includes(input)}
        filterSort={(optionA, optionB) =>
          (optionA?.label ?? '')
            .toLowerCase()
            .localeCompare((optionB?.label ?? '').toLowerCase())
        }
        options={[
          {
            value: '1',
            label: 'To do',
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
      <div
        className='divider__modal'
        style={{ margin: '0px 0px 15px 0px' }}></div>
      <Text type='secondary' style={{ fontWeight: 700 }}>
        Priority
      </Text>
      <Select
        showSearch
        style={{ width: '100%', height: 36 }}
        placeholder='Select duration'
        optionFilterProp='children'
        className='seleceID'
        filterOption={(input, option) => (option?.label ?? '').includes(input)}
        filterSort={(optionA, optionB) =>
          (optionA?.label ?? '')
            .toLowerCase()
            .localeCompare((optionB?.label ?? '').toLowerCase())
        }
        options={[
          {
            value: '1',
            label: 'To do',
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
  )
}

export default ModalLay
