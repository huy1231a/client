import React from 'react'
import { Checkbox, CheckboxProps, Switch, Typography } from 'antd'

const Notifications = () => {
  const onChangeSwitch = (checked: boolean) => {
    console.log(`switch to ${checked}`)
  }

  const onChangeCheckBox: CheckboxProps['onChange'] = (e) => {
    console.log(`checked = ${e.target.checked}`)
  }

  const { Title, Text } = Typography
  return (
    <div className='town2'>
      <Title level={3} className='title__Seting'>
        Notifications
      </Title>
      <div className='about1'>
        <div className='issue'>
          <div className='issue1'>
            <Title level={4}>Issue Activity</Title>
            <Text type='secondary'>
              Send me email notifications for issue activity
            </Text>
          </div>
          <Switch
            style={{ marginTop: 30 }}
            defaultChecked
            onChange={onChangeSwitch}
          />
        </div>
      </div>
      <div className='about1'>
        <div className='issue'>
          <div className='issue1'>
            <Title level={4}>New Comments</Title>
            <Text type='secondary'>
              Send me notifications when someone’ve sent the comment
            </Text>
          </div>
          <Switch
            style={{ marginTop: 30 }}
            defaultChecked
            onChange={onChangeSwitch}
          />
        </div>
      </div>
      <div className='about1'>
        <div className='issue'>
          <div className='issue1'>
            <Title level={4}>Tracking Activity</Title>
            <Text type='secondary'>
              Send me notifications when someone’ve tracked time in tasks
            </Text>
          </div>
          <Switch
            style={{ marginTop: 30 }}
            defaultChecked
            onChange={onChangeSwitch}
          />
        </div>
      </div>
      <Checkbox onChange={onChangeCheckBox} className='checkbox__set'>
        <Text type='success'> Don't send me notifications after 9:00 PM</Text>
      </Checkbox>
    </div>
  )
}

export default Notifications
