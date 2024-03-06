import { PlusOutlined } from '@ant-design/icons'
import {
  Button,
  Cascader,
  ColorPicker,
  DatePicker,
  Flex,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Slider,
  Upload,
} from 'antd'

const FormUpdates = () => {
  const normFile = (e: any) => {
    if (Array.isArray(e)) {
      return e
    }
    return e?.fileList
  }

  return (
    <Form
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 14 }}
      layout='horizontal'
      style={{ width: '100%' }}>
      <Form.Item label='First Name'>
        <Input style={{ width: '100%' }} />
      </Form.Item>
      <Form.Item label='Last Name'>
        <Input style={{ width: '100%' }} />
      </Form.Item>
      <Form.Item label='Email'>
        <Input style={{ width: '100%' }} />
      </Form.Item>
      <Form.Item label='Skype'>
        <Input style={{ width: '100%' }} />
      </Form.Item>
      <Form.Item label='Sex'>
        <Radio.Group>
          <Radio value='apple'> Man </Radio>
          <Radio value='pear'> Women </Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item label='Position'>
        <Select>
          <Select.Option value='UI/UX'>UI/UX</Select.Option>
          <Select.Option value='Dev'>Dev</Select.Option>
          <Select.Option value='frd'>Front-End-Develop</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item label='Address'>
        <Cascader
          options={[
            {
              value: 'canada',
              label: 'Canada',
              children: [
                {
                  value: 'vancover',
                  label: 'Vancover',
                },
              ],
            },
          ]}
        />
      </Form.Item>
      <Form.Item label='Location'>
        <Cascader
          options={[
            {
              value: 'newyork',
              label: 'New York',
              children: [
                {
                  value: 'cadabra',
                  label: 'Cadabra',
                },
              ],
            },
          ]}
        />
      </Form.Item>
      <Form.Item label='Birthday'>
        <DatePicker />
      </Form.Item>
      <Form.Item label='Mobile number'>
        <InputNumber style={{ width: '100%' }} />
      </Form.Item>
      <Form.Item
        label='Upload'
        valuePropName='fileList'
        getValueFromEvent={normFile}>
        <Upload action='/upload.do' listType='picture-card'>
          <button style={{ border: 0, background: 'none' }} type='button'>
            <PlusOutlined />
            <div style={{ marginTop: 8 }}>Upload</div>
          </button>
        </Upload>
      </Form.Item>
      <Form.Item label='Age'>
        <Slider />
      </Form.Item>
      <Form.Item label='ColorPicker'>
        <ColorPicker />
      </Form.Item>

      <Flex justify='center'>
        <Button
          size='large'
          style={{ width: '100%', marginLeft: 80 }}
          type='primary'>
          Updates
        </Button>
      </Flex>
    </Form>
  )
}

export default FormUpdates
