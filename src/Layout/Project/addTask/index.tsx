import React, { useState } from 'react'
import './style.css'
import { SVG_Pro } from '../common/Constan'
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
  message,
} from 'antd'

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

const AddTaskNew = () => {
  const [form] = Form.useForm()
  const [modal2Open, setModal2Open] = useState(false)
  const { TextArea } = Input
  return (
    <div className='add__new'>
      <div className='svg__t'>
        {SVG_Pro}
        <h4 className='title'>
          There are no tasks in this project yet <br />
          Let's add them
        </h4>

        <Button
          type='primary'
          size='large'
          onClick={() => {
            setModal2Open(true)
          }}>
          Add Task
        </Button>
        <Modal
          title='Add Task'
          centered
          open={modal2Open}
          onCancel={() => setModal2Open(false)}
          bodyStyle={{
            overflowY: 'auto',
            maxHeight: 'calc(100vh - 200px)',
            margin: 'auto',
          }}
          footer={[<SubmitButton form={form}>Submit</SubmitButton>]}>
          <div style={{ padding: 20 }}>
            <Form
              form={form}
              name='validateOnly'
              layout='vertical'
              autoComplete='off'>
              <Form.Item
                name='name'
                label='Task Name'
                rules={[{ required: true }]}>
                <Input size='large' />
              </Form.Item>
              <Form.Item
                name='group'
                label='Task Group'
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
                  name='startDate'
                  label='Estimate'
                  style={{ width: '60%' }}
                  rules={[{ required: true }]}>
                  <DatePicker
                    onChange={onChange}
                    size='large'
                    style={{ width: '90%' }}
                  />
                </Form.Item>

                <Form.Item
                  name='endDate'
                  label='Dead Line'
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
                name='assignne'
                label='Assignee'
                style={{ width: '100%' }}
                rules={[{ required: true }]}>
                <Select
                  showSearch
                  size='large'
                  placeholder='Select Assignee'
                  optionFilterProp='children'
                  onChange={onChangeSelect}
                  options={[
                    {
                      value: 'huy',
                      label: 'Jacob Huy',
                    },
                    {
                      value: 'kien',
                      label: 'Kevin Kien',
                    },
                    {
                      value: 'vinh',
                      label: 'Alexander Vinh',
                    },
                    {
                      value: 'yen',
                      label: 'Jenifer Yen',
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
          </div>
        </Modal>
      </div>
    </div>
  )
}

export default AddTaskNew
