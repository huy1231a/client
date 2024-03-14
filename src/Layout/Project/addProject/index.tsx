import React from 'react'
import './style.css'
import {
  Button,
  DatePicker,
  DatePickerProps,
  Flex,
  Form,
  FormInstance,
  Input,
  Select,
  Space,
} from 'antd'
import UploadP from './upload'

interface SubmitButtonProps {
  form: FormInstance
}

const AddProject = () => {
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
    }, [form, values])

    return (
      <Button type='primary' htmlType='submit' disabled={!submittable}>
        {children}
      </Button>
    )
  }

  const [form] = Form.useForm()

  const onChangeSelect = (value: string) => {
    console.log(`selected ${value}`)
  }

  const { TextArea } = Input

  return (
    <div className='add__project'>
      <div className='add__conttend'>
        <h1 className='title__2'>Add Project</h1>
        <div className='contten__D'>
          <div className='right___add'>
            <Form
              form={form}
              name='validateOnly'
              layout='vertical'
              autoComplete='off'>
              <Form.Item
                name='name'
                label='Project Name'
                rules={[{ required: true }]}>
                <Input size='large' />
              </Form.Item>
              <Flex style={{ width: '100%' }} gap={20}>
                <Form.Item
                  name='startDate'
                  label='Starts Date'
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
                name='description'
                label='Description'
                style={{ width: '100%' }}
                rules={[{ required: true }]}>
                <TextArea
                  showCount
                  maxLength={100}
                  placeholder='Add some description of the project'
                  style={{ height: 120, resize: 'none' }}
                />
              </Form.Item>
              <Form.Item style={{ marginTop: '20px' }}>
                <Space>
                  <SubmitButton form={form}>Submit</SubmitButton>
                  <Button htmlType='reset'>Reset</Button>
                </Space>
              </Form.Item>
            </Form>
          </div>
          <div className='left___add'>
            <UploadP />
          </div>
        </div>
      </div>
    </div>
  )
}
export default AddProject
