import React, { useState, Suspense, lazy, useTransition } from 'react'
import {
  Steps,
  Button,
  Form,
  Input,
  message,
  Divider,
  Flex,
  Select,
  Radio,
  RadioChangeEvent,
  Typography,
  Space,
  Modal,
} from 'antd'
import './style.css'

import { svg6, svg__1 } from './Constant'
import LazyLoadedComponent from '../../common/lazyLoad'

const { Step } = Steps

const RegisterForm = () => {
  const [, startTransition] = useTransition()

  const LazyCp = lazy(() => import('../../common/lazyLoad'))

  const [load, setLoad] = useState(false)

  const { Text } = Typography

  const [modal2Open, setModal2Open] = useState(false)

  const [currentStep, setCurrentStep] = useState(0)

  const [value, setValue] = useState(1)

  const onChange = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value)
    setValue(e.target.value)
  }

  const nextStep = () => {
    setCurrentStep(currentStep + 1)
  }

  const prevStep = () => {
    setCurrentStep(currentStep - 1)
  }

  const handleSubmit = (values: any) => {
    if (currentStep === 3) {
      // Handle submission logic here
      console.log('Form submitted:', values)
      message.success('Registration successful')
      startTransition(() => {
        setLoad(true)
      })
    } else {
      nextStep()
    }
  }
  console.log(load)

  return (
    <>
      {load ? (
        <LazyLoadedComponent />
      ) : (
        <div className='register__ct'>
          <div className='conttend__res'>
            <div className='register__ct__right'>
              <div className='title__regs'>
                <div>{svg__1}</div>
                <h1 style={{ color: 'white' }}>Get started</h1>
              </div>
              <div>
                <Steps current={currentStep} direction='vertical'>
                  <Step title='Valid your phone' />
                  <Step title='Tell about yourself' />
                  <Step title='Tell about your company' />
                  <Step title='Invite Team Members' />
                </Steps>
              </div>
            </div>
            <div className='register__ct__left'>
              <div style={{ marginTop: '100px' }}>
                <Form
                  onFinish={handleSubmit}
                  layout='vertical'
                  initialValues={{
                    email: '',
                    password: '',
                    name: '',
                    address: '',
                  }}>
                  {currentStep === 0 && (
                    <>
                      <h3 className='title__Step'>
                        STEP {`${currentStep + 1 + '/4'}`}
                      </h3>
                      <h2 className='title__phone'>Valid your phone</h2>
                      <div className='step__1'>
                        <Form.Item
                          name='mobile'
                          label='Mobile Number'
                          rules={[
                            {
                              required: true,
                              message: 'Please input your email!',
                            },
                          ]}>
                          <Input style={{ width: '100%' }} size='large' />
                        </Form.Item>

                        <Form.Item
                          name='number'
                          label='Code from SMS'
                          rules={[
                            {
                              required: true,
                              message: 'Please input your email!',
                            },
                          ]}>
                          <div className='code__sms'>
                            <Input style={{ width: '6%' }} size='large' />
                            <Input style={{ width: '6%' }} size='large' />
                            <Input style={{ width: '6%' }} size='large' />
                            <Input style={{ width: '6%' }} size='large' />
                          </div>
                        </Form.Item>
                        <div className='info__lock'>
                          {svg6}
                          <span>
                            SMS was sent to your number +1 345 673-56-67
                            <br /> It will be valid for 01:25
                          </span>
                        </div>
                        <Form.Item
                          name='email'
                          label='Email Address'
                          rules={[
                            {
                              required: true,
                              message: 'Please input your email!',
                            },
                          ]}>
                          <Input
                            style={{ width: '100%', margin: 'auto' }}
                            size='large'
                          />
                        </Form.Item>
                        <Form.Item
                          name='createPw'
                          label='Create Password'
                          rules={[
                            {
                              required: true,
                              message: 'Please input your email!',
                            },
                          ]}>
                          <Input.Password
                            size='large'
                            placeholder='********'
                            style={{ width: '100%', margin: 'auto' }}
                          />
                        </Form.Item>
                      </div>
                      <Divider className='divider' />
                      <div className='btn__next'>
                        <Form.Item>
                          <Button
                            type='primary'
                            onClick={nextStep}
                            htmlType='submit'>
                            Next Step
                          </Button>
                        </Form.Item>
                      </div>
                    </>
                  )}

                  {currentStep === 1 && (
                    <>
                      <h3 className='title__Step'>
                        STEP {`${currentStep + 1 + '/4'}`}
                      </h3>
                      <h2 className='title__phone'>Tell about yourself</h2>
                      <div className='step__1'>
                        <Form.Item
                          name='text'
                          label='Why will you use the service?'
                          rules={[
                            { required: true, message: 'Please input!' },
                          ]}>
                          <Select
                            showSearch
                            size='large'
                            style={{ width: '100%' }}
                            placeholder='Search to Select'
                            optionFilterProp='children'
                            filterOption={(input, option) =>
                              (option?.label ?? '').includes(input)
                            }
                            filterSort={(optionA, optionB) =>
                              (optionA?.label ?? '')
                                .toLowerCase()
                                .localeCompare(
                                  (optionB?.label ?? '').toLowerCase()
                                )
                            }
                            options={[
                              {
                                value: '1',
                                label: 'Not Identified',
                              },
                              {
                                value: '2',
                                label: 'Closed',
                              },
                              {
                                value: '3',
                                label: 'Communicated',
                              },
                              {
                                value: '4',
                                label: 'Identified',
                              },
                              {
                                value: '5',
                                label: 'Resolved',
                              },
                              {
                                value: '6',
                                label: 'Cancelled',
                              },
                            ]}
                          />
                        </Form.Item>

                        <Form.Item
                          name='text'
                          label='What describes you best?'
                          rules={[
                            { required: true, message: 'Please input!' },
                          ]}>
                          <Select
                            showSearch
                            size='large'
                            style={{ width: '100%' }}
                            placeholder='Search to Select'
                            optionFilterProp='children'
                            filterOption={(input, option) =>
                              (option?.label ?? '').includes(input)
                            }
                            filterSort={(optionA, optionB) =>
                              (optionA?.label ?? '')
                                .toLowerCase()
                                .localeCompare(
                                  (optionB?.label ?? '').toLowerCase()
                                )
                            }
                            options={[
                              {
                                value: '1',
                                label: 'Not Identified',
                              },
                              {
                                value: '2',
                                label: 'Closed',
                              },
                              {
                                value: '3',
                                label: 'Communicated',
                              },
                              {
                                value: '4',
                                label: 'Identified',
                              },
                              {
                                value: '5',
                                label: 'Resolved',
                              },
                              {
                                value: '6',
                                label: 'Cancelled',
                              },
                            ]}
                          />
                        </Form.Item>
                        <div className='step__2'>
                          <Text type='secondary'>What describes you best?</Text>
                          <Radio.Group value={value} onChange={onChange}>
                            <Radio value={1}>Yes</Radio>
                            <Radio value={2}>No</Radio>
                          </Radio.Group>
                        </div>
                      </div>
                      <Divider className='divider' />
                      <div className='btn__next'>
                        <Form.Item>
                          <Flex gap={10}>
                            <Button
                              style={{ marginLeft: '8px' }}
                              onClick={prevStep}>
                              Previous
                            </Button>
                            <Button
                              type='primary'
                              onClick={nextStep}
                              htmlType='submit'>
                              Next Step
                            </Button>
                          </Flex>
                        </Form.Item>
                      </div>
                    </>
                  )}

                  {currentStep === 2 && (
                    <>
                      <h3 className='title__Step'>
                        STEP {`${currentStep + 1 + '/4'}`}
                      </h3>
                      <h2 className='title__phone'>Tell about your company</h2>
                      <div className='step__1'>
                        <Form.Item
                          name='name'
                          label='Your Company’s Name'
                          rules={[
                            {
                              required: true,
                              message: 'Please input your email!',
                            },
                          ]}>
                          <Input
                            style={{ width: '100%' }}
                            size='large'
                            placeholder='Your Company’s Name'
                          />
                        </Form.Item>

                        <Form.Item
                          name='text'
                          label='Business Direction'
                          rules={[
                            { required: true, message: 'Please input!' },
                          ]}>
                          <Select
                            showSearch
                            size='large'
                            style={{ width: '100%' }}
                            placeholder='Search to Select'
                            optionFilterProp='children'
                            filterOption={(input, option) =>
                              (option?.label ?? '').includes(input)
                            }
                            filterSort={(optionA, optionB) =>
                              (optionA?.label ?? '')
                                .toLowerCase()
                                .localeCompare(
                                  (optionB?.label ?? '').toLowerCase()
                                )
                            }
                            options={[
                              {
                                value: '1',
                                label: 'IT and programming',
                              },
                              {
                                value: '2',
                                label: 'Closed',
                              },
                              {
                                value: '3',
                                label: 'Communicated',
                              },
                              {
                                value: '4',
                                label: 'Identified',
                              },
                              {
                                value: '5',
                                label: 'Resolved',
                              },
                              {
                                value: '6',
                                label: 'Cancelled',
                              },
                            ]}
                          />
                        </Form.Item>
                        <Text type='secondary'>
                          How many people in your team?
                        </Text>
                        <div style={{ marginTop: '10px' }}>
                          <Space size={'large'} />
                          <Radio.Group
                            defaultValue='a'
                            size='large'
                            style={{ width: '100%' }}>
                            <div className='raGr'>
                              <Radio.Button
                                value='a'
                                style={{
                                  width: '22%',
                                  margin: 'auto',
                                  textAlign: 'center',
                                  borderRadius: 10,
                                }}>
                                Only me
                              </Radio.Button>
                              <Radio.Button
                                value='b'
                                style={{
                                  width: '22%',
                                  margin: 'auto',
                                  textAlign: 'center',
                                  borderRadius: 10,
                                }}>
                                2 - 5
                              </Radio.Button>
                              <Radio.Button
                                value='c'
                                style={{
                                  width: '22%',
                                  margin: 'auto',
                                  textAlign: 'center',
                                  borderRadius: 10,
                                }}>
                                6 - 10
                              </Radio.Button>
                              <Radio.Button
                                value='d'
                                style={{
                                  width: '22%',
                                  margin: 'auto',
                                  textAlign: 'center',
                                  borderRadius: 10,
                                }}>
                                11-20
                              </Radio.Button>
                            </div>
                            <div className='raGr' style={{ marginTop: 20 }}>
                              <Radio.Button
                                value='e'
                                style={{
                                  width: '22%',
                                  margin: 'auto',
                                  textAlign: 'center',
                                  borderRadius: 10,
                                }}>
                                21 - 40
                              </Radio.Button>
                              <Radio.Button
                                value='f'
                                style={{
                                  width: '22%',
                                  margin: 'auto',
                                  textAlign: 'center',
                                  borderRadius: 10,
                                }}>
                                41 - 50
                              </Radio.Button>
                              <Radio.Button
                                value='g'
                                style={{
                                  width: '22%',
                                  margin: 'auto',
                                  textAlign: 'center',
                                  borderRadius: 10,
                                }}>
                                51 - 100
                              </Radio.Button>
                              <Radio.Button
                                value='h'
                                style={{
                                  width: '22%',
                                  margin: 'auto',
                                  textAlign: 'center',
                                  borderRadius: 10,
                                }}>
                                101 - 500
                              </Radio.Button>
                            </div>
                          </Radio.Group>
                        </div>
                      </div>
                      <Divider className='divider' />
                      <div className='btn__next'>
                        <Form.Item>
                          <Flex gap={10}>
                            <Button
                              style={{ marginLeft: '8px' }}
                              onClick={prevStep}>
                              Previous
                            </Button>
                            <Button
                              type='primary'
                              onClick={nextStep}
                              htmlType='submit'>
                              Next Step
                            </Button>
                          </Flex>
                        </Form.Item>
                      </div>
                    </>
                  )}

                  {currentStep === 3 && (
                    <>
                      <h3 className='title__Step'>
                        STEP {`${currentStep + 1 + '/4'}`}
                      </h3>
                      <h2 className='title__phone'>Invite Team Members</h2>
                      <div className='step__1'>
                        <Form.Item
                          name='gmail'
                          label='Member’s Email'
                          rules={[
                            {
                              required: true,
                              message: 'Please input your email!',
                            },
                          ]}>
                          <Input
                            style={{ width: '100%' }}
                            size='large'
                            placeholder='Please input your email!'
                          />
                        </Form.Item>
                        <Flex gap={10} align='center' className='addlist'>
                          <svg
                            width='24'
                            height='24'
                            viewBox='0 0 24 24'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'>
                            <path
                              fill-rule='evenodd'
                              clip-rule='evenodd'
                              d='M12.9933 5.88338C12.9355 5.38604 12.5128 5 12 5C11.4477 5 11 5.44772 11 6V11H6L5.88338 11.0067C5.38604 11.0645 5 11.4872 5 12C5 12.5523 5.44772 13 6 13H11V18L11.0067 18.1166C11.0645 18.614 11.4872 19 12 19C12.5523 19 13 18.5523 13 18V13H18L18.1166 12.9933C18.614 12.9355 19 12.5128 19 12C19 11.4477 18.5523 11 18 11H13V6L12.9933 5.88338Z'
                              fill='#3F8CFF'
                            />
                          </svg>
                          <Text
                            className='text___'
                            onClick={() => setModal2Open(true)}>
                            Add another Member
                          </Text>
                          <Modal
                            title='Vertically centered modal dialog'
                            centered
                            open={modal2Open}
                            onOk={() => setModal2Open(false)}
                            onCancel={() => setModal2Open(false)}>
                            <p>some contents...</p>
                            <p>some contents...</p>
                            <p>some contents...</p>
                          </Modal>
                        </Flex>
                      </div>

                      <Divider className='divider' />
                      <div className='btn__next'>
                        <Form.Item>
                          <Flex gap={10}>
                            <Button
                              style={{ marginLeft: '8px' }}
                              onClick={prevStep}>
                              Previous
                            </Button>
                            <Button type='primary' htmlType='submit'>
                              Next Step
                            </Button>
                          </Flex>
                        </Form.Item>
                      </div>
                    </>
                  )}
                </Form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default RegisterForm
