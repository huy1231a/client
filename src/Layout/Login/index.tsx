import React, { useEffect, useState } from 'react'
import './style.css'
import { svg, svg2 } from './Constant'
import { Button, Checkbox, Flex, Form, Input, Typography } from 'antd'
import { Link, useNavigate } from 'react-router-dom'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import LazyLoadedComponent from '../../common/lazyLoad'

interface Prop {
  setToken: (token: string) => void
}
const Login: React.FC<Prop> = ({ setToken }) => {
  const { Text } = Typography
  const [errors, setErrors] = useState<boolean>(false)
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const navigate = useNavigate()

  const [isLoading, setIsLoading] = useState(false)
  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      })

      if (!response.ok) {
        setErrors(true)
        throw new Error('Login failed')
      } else {
        setIsLoading(true)
        setErrors(false)
        const { token } = await response.json()
        navigate('/dashboard')
        localStorage.setItem('token', token)
        setToken(token)
      }
    } catch (error) {
      console.error('Error:', error)
    }
  }

  useEffect(() => {
    if (isLoading) {
      const timeoutId = setTimeout(() => {
        setIsLoading(false)
      }, 80000)

      return () => clearTimeout(timeoutId) // Cleanup function
    }
  }, [isLoading])

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
      {isLoading && <LazyLoadedComponent />}
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
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors && (
                <Text type={'danger'}>Username or Password incorrect</Text>
              )}
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
                onChange={(e) => setPassword(e.target.value)}
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
                  onClick={handleLogin}
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
