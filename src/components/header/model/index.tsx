import { Divider } from 'antd'
import React from 'react'
import Notifi from './notifi'

const ModelNotification = () => {
  return (
    <>
      <Divider />
      <Notifi
        name='Emily Tyler '
        contend='sent you a comment in '
        work='Research task'
        time='2h ago'
      />
      <Divider />
      <Notifi
        contend='Updated the status of Mind Map task to '
        work='In Progress'
        time='6h ago'
        contend_Of='1'
      />
      <Divider />
      <Notifi
        name='Blake Silva '
        contend='assigned the issue in you'
        time='Today 9:30 am'
      />
      <Divider />
      <Notifi
        contend='Updated the status of Mind Map task to '
        work='In Progress'
        time='Tomorrow 1:45 pm'
        contend_Of='1'
      />
      <Divider />
      <Notifi
        contend='Emily Tyler sent you a comment in '
        work='Research task'
        time='2h ago'
      />
      <Divider />
      <Notifi
        contend='Updated the status of Mind Map task to '
        work='In Progress'
        time='Sep 11 | 8:15 pm'
        contend_Of='1'
      />
      <Divider />
      <Notifi
        name='Blake Silva '
        contend='assigned the issue in you'
        time='Today 9:30 am'
      />
    </>
  )
}

export default ModelNotification
