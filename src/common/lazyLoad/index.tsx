// LazyLoadedComponent.js
import { Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'
import React from 'react'

const LazyLoadedComponent = () => {
  return (
    <div style={{ width: '100%', height: '100vh', margin: 'auto' }}>
      <div style={{ margin: 'auto' }}>
        <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />
      </div>
    </div>
  )
}

export default LazyLoadedComponent
