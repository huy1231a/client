import React from 'react'
import './style.css'
import { svg, svg2 } from './Constant'
import { Button, Checkbox, Flex, Form, Input } from 'antd'
import { Link } from 'react-router-dom'
import { UserOutlined, LockOutlined } from '@ant-design/icons'

const Login = () => {
  return (
    <div className='login__page'>
      <div className='left__ct__login'>
        <div className='ct__'>
          <div className='title__login'>
            {svg}
            <h1 style={{ color: 'white' }}>Woorkroom</h1>
          </div>
          <h1 style={{ color: 'white' }}>
            Your place to work <br /> Plan. Create. Control.
          </h1>
          <div>{svg2}</div>
        </div>
      </div>
      <div className='right__ct__login'>
        <div className='form__login'>
          <Form
            name='normal_login'
            className='login-form'
            initialValues={{ remember: true }}>
            <h1 className='title__form'>Sign In to Woorkroom</h1>
            <Form.Item
              name='email'
              rules={[{ required: true, message: 'Please input your Email!' }]}>
              <Input
                prefix={<UserOutlined className='site-form-item-icon' />}
                placeholder='email'
                size='large'
              />
            </Form.Item>
            <Form.Item
              name='password'
              rules={[
                { required: true, message: 'Please input your Password!' },
              ]}>
              <Input
                prefix={<LockOutlined className='site-form-item-icon' />}
                type='password'
                size='large'
                placeholder='Password'
              />
            </Form.Item>
            <Form.Item>
              <Flex align='center' justify='space-between'>
                <Form.Item name='remember' valuePropName='checked' noStyle>
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Link className='login-form-forgot' to=''>
                  Forgot password
                </Link>
              </Flex>
            </Form.Item>

            <Form.Item>
              <Flex align='center' justify='center'>
                <Button
                  type='primary'
                  htmlType='submit'
                  className='login-form-button'
                  size='large'
                  style={{ width: '50%', margin: 'auto' }}>
                  Log in
                </Button>
              </Flex>
            </Form.Item>
            <Flex align='center' justify='center'>
              <Link to='/register'>Don’t have an account?</Link>
            </Flex>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default Login
