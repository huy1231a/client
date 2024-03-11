import React, { useState } from 'react'
import {
  Steps,
  Button,
  Form,
  Input,
  message,
  Divider,
  Space,
  InputNumber,
} from 'antd'
import './style.css'
import { svg6, svg__1 } from './Constant'

const { Step } = Steps

const RegisterForm = () => {
  const [currentStep, setCurrentStep] = useState(0)

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
    } else {
      nextStep()
    }
  }

  return (
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
          <div style={{ marginTop: '30px' }}>
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
                        { required: true, message: 'Please input your email!' },
                      ]}>
                      <Input style={{ width: '100%' }} size='large' />
                    </Form.Item>

                    <Form.Item
                      name='number'
                      label='Code from SMS'
                      rules={[
                        { required: true, message: 'Please input your email!' },
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
                        { required: true, message: 'Please input your email!' },
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
                        { required: true, message: 'Please input your email!' },
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
                  <Form.Item
                    name='password'
                    label='Password'
                    rules={[
                      {
                        required: true,
                        message: 'Please input your password!',
                      },
                    ]}>
                    <Input.Password />
                  </Form.Item>
                  <Form.Item>
                    <Button style={{ marginLeft: '8px' }} onClick={prevStep}>
                      Previous
                    </Button>
                    <Button type='primary' onClick={nextStep}>
                      Next
                    </Button>
                  </Form.Item>
                </>
              )}

              {currentStep === 2 && (
                <>
                  <Form.Item
                    name='name'
                    label='Name'
                    rules={[
                      { required: true, message: 'Please input your name!' },
                    ]}>
                    <Input />
                  </Form.Item>
                  <Form.Item>
                    <Button type='primary' onClick={nextStep}>
                      Next
                    </Button>
                    <Button style={{ marginLeft: '8px' }} onClick={prevStep}>
                      Previous
                    </Button>
                  </Form.Item>
                </>
              )}

              {currentStep === 3 && (
                <>
                  <Form.Item
                    name='address'
                    label='Address'
                    rules={[
                      { required: true, message: 'Please input your address!' },
                    ]}>
                    <Input />
                  </Form.Item>
                  <Form.Item>
                    <Button type='primary' htmlType='submit'>
                      Register
                    </Button>
                    <Button style={{ marginLeft: '8px' }} onClick={prevStep}>
                      Previous
                    </Button>
                  </Form.Item>
                </>
              )}
            </Form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegisterForm
