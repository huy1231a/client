import React from 'react'
import './style.css'
import { Select, Typography } from 'antd'
import TextArea from 'antd/es/input/TextArea'

const Support = () => {
  const { Text } = Typography
  return (
    <div className='layout__sup'>
      <div className='banner__sup'></div>
      <div className='banner__text'>
        Describe your question and our specialists will answer you within 24
        hours.
      </div>

      <div className='request1'>
        <div className='request'>
          <Text strong>Request Subject</Text>
          <Select
            showSearch
            style={{ width: '100%' }}
            placeholder='Search to Select'
            optionFilterProp='children'
            filterOption={(input, option) =>
              (option?.label ?? '').includes(input)
            }
            filterSort={(optionA, optionB) =>
              (optionA?.label ?? '')
                .toLowerCase()
                .localeCompare((optionB?.label ?? '').toLowerCase())
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
        </div>
        <div className='request2'>
          <Text strong>Description</Text>
          <TextArea
            rows={4}
            placeholder='Add some description of the request'
          />
        </div>
      </div>
    </div>
  )
}

export default Support
