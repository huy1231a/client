import React, { useState } from 'react'
import {
  Button,
  DatePicker,
  DatePickerProps,
  Flex,
  Form,
  FormInstance,
  Input,
  Modal,
  Select,
  Switch,
  TimePicker,
  Typography,
  message,
} from 'antd'
import { CaretLeftOutlined, PlusOutlined } from '@ant-design/icons'
import './style.css'
import { Link } from 'react-router-dom'
import NearestEvents from '../../../common/Dashboard/NearEvents'
import { dataEvDetails } from '../data'
import type { Dayjs } from 'dayjs'
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import CheckBoxProp from './checkbox'

interface SubmitButtonProps {
  form: FormInstance
}

const onChange: DatePickerProps['onChange'] = (date, dateString) => {
  console.log(date, dateString)
}
const SubmitButton: React.FC<React.PropsWithChildren<SubmitButtonProps>> = ({
  form,
  children,
}) => {
  const [submittable, setSubmittable] = React.useState<boolean>(false)

  // Watch all values
  const values = Form.useWatch([], form)

  React.useEffect(() => {
    form
      .validateFields({ validateOnly: true })
      .then(() => setSubmittable(true))
      .catch(() => setSubmittable(false))
      .catch(() => message.success('Add Task Succes'))
  }, [form, values])

  return (
    <Button type='primary' htmlType='submit' disabled={!submittable}>
      {children}
    </Button>
  )
}

const onChangeSelect = (value: string) => {
  console.log(`selected ${value}`)
}

const ViewAllEv = () => {
  dayjs.extend(customParseFormat)

  const [activeItem, setActiveItem] = useState<number>(1)

  const [useSwitch, setUseSwitch] = useState<Boolean>(false)

  const onChangeSwitch = (checked: boolean) => {
    setUseSwitch(checked)
    console.log(`switch to ${checked}`)
  }
  const onChangeTime = (time: Dayjs | null, timeString: string) => {
    console.log(time, timeString)
  }

  const { TextArea } = Input
  const [form] = Form.useForm()
  const [modal2Open, setModal2Open] = useState(false)
  const { Text } = Typography
  return (
    <div className='view__all'>
      <Flex gap={10} style={{ cursor: 'pointer' }}>
        <Link to={'/dashboard'} className='href1'>
          <CaretLeftOutlined />
          <Text type='secondary'>Back To Dashboard</Text>
        </Link>
      </Flex>
      <Flex justify='space-between' align='center'>
        <h1>Nearest Events</h1>
        <Button
          type='primary'
          shape='round'
          icon={<PlusOutlined />}
          size={'large'}
          onClick={() => {
            setModal2Open(true)
          }}>
          Add Event
        </Button>
        <Modal
          title='Add Event'
          centered
          open={modal2Open}
          footer={[<SubmitButton form={form}>Save Event</SubmitButton>]}
          onCancel={() => setModal2Open(false)}>
          <div style={{ padding: 20 }}>
            <Form
              form={form}
              name='validateOnly'
              layout='vertical'
              autoComplete='off'>
              <Form.Item
                name='name'
                label='Event Name'
                rules={[{ required: true }]}>
                <Input size='large' />
              </Form.Item>
              <Form.Item
                name='group'
                label='Event Category'
                style={{ width: '100%' }}
                rules={[{ required: true }]}>
                <Select
                  showSearch
                  size='large'
                  placeholder='Coding'
                  optionFilterProp='children'
                  onChange={onChangeSelect}
                  options={[
                    {
                      value: 'des',
                      label: 'Design',
                    },
                    {
                      value: 'code',
                      label: 'Coding',
                    },
                    {
                      value: 'test',
                      label: 'Text',
                    },
                  ]}
                />
              </Form.Item>
              <Flex style={{ width: '100%' }} gap={20}>
                <Form.Item
                  name='time'
                  label='Time'
                  style={{ width: '60%' }}
                  rules={[{ required: true }]}>
                  <TimePicker
                    onChange={onChangeTime}
                    size='large'
                    style={{ width: '98%', marginRight: '20px' }}
                  />
                </Form.Item>

                <Form.Item
                  name='date'
                  label='Date'
                  style={{ width: '60%' }}
                  rules={[{ required: true }]}>
                  <DatePicker
                    onChange={onChange}
                    size='large'
                    style={{ width: '98%', marginRight: '20px' }}
                  />
                </Form.Item>
              </Flex>
              <Form.Item
                name='priority'
                label='Priority'
                style={{ width: '100%' }}
                rules={[{ required: true }]}>
                <Select
                  showSearch
                  size='large'
                  placeholder='Medium'
                  optionFilterProp='children'
                  onChange={onChangeSelect}
                  options={[
                    {
                      value: 'hard',
                      label: 'Hard',
                    },
                    {
                      value: 'medium',
                      label: 'Medium',
                    },
                    {
                      value: 'easy',
                      label: 'Easy',
                    },
                  ]}
                />
              </Form.Item>
              <Form.Item
                name='description'
                label='Description'
                style={{ width: '100%' }}>
                <TextArea
                  showCount
                  maxLength={100}
                  placeholder='Add some description of the project'
                  style={{ height: 120, resize: 'none' }}
                />
              </Form.Item>
            </Form>

            <div className='re__ev'>
              <h4>Repeat Event</h4>
              <Switch
                className='switch'
                size='default'
                defaultValue={false}
                onChange={onChangeSwitch}
              />
            </div>
            {useSwitch && (
              <>
                <Text type='secondary' style={{ fontWeight: 600 }}>
                  Complete this task
                </Text>
                <div className='this__task'>
                  <div
                    className={`${
                      activeItem === 1 ? 'this__task__1' : 'activeTask'
                    }`}
                    onClick={() => {
                      setActiveItem(1)
                    }}>
                    Daily
                  </div>
                  <div
                    className={`${
                      activeItem === 2 ? 'this__task__1' : 'activeTask'
                    }`}
                    onClick={() => {
                      setActiveItem(2)
                    }}>
                    Weekly
                  </div>
                  <div
                    className={`${
                      activeItem === 3 ? 'this__task__1' : 'activeTask'
                    }`}
                    onClick={() => {
                      setActiveItem(3)
                    }}>
                    Monthly
                  </div>
                </div>
                <div style={{ width: '100%' }}>
                  <CheckBoxProp />
                </div>
                <Form layout='vertical'>
                  <Form.Item
                    name='time'
                    label='Time'
                    style={{ width: '100%' }}
                    rules={[{ required: true }]}>
                    <TimePicker
                      onChange={onChangeTime}
                      size='large'
                      style={{ width: '100%' }}
                    />
                  </Form.Item>
                </Form>
              </>
            )}
          </div>
        </Modal>
      </Flex>
      <Flex style={{ width: '100%', marginTop: 20 }} gap={40}>
        <div className='left__viewAll'>
          {dataEvDetails.map((item, key) => (
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
        <div className='right__viewAll'>
          {dataEvDetails.map((item, key) => (
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
      </Flex>
    </div>
  )
}

export default ViewAllEv
