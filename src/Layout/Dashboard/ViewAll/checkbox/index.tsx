import React, { useState } from 'react'
import { Checkbox, Divider } from 'antd'
import type { CheckboxProps, GetProp } from 'antd'

type CheckboxValueType = GetProp<typeof Checkbox.Group, 'value'>[number]

const CheckboxGroup = Checkbox.Group

const plainOptions = ['Mon', 'Tue', 'Wes', 'Thu', 'Fri']

const CheckBoxProp: React.FC = () => {
  const [checkedList, setCheckedList] = useState<CheckboxValueType[]>([])

  const checkAll = plainOptions.length === checkedList.length
  const indeterminate =
    checkedList.length > 0 && checkedList.length < plainOptions.length

  const onChange = (list: CheckboxValueType[]) => {
    setCheckedList(list)
  }

  const onCheckAllChange: CheckboxProps['onChange'] = (e) => {
    setCheckedList(e.target.checked ? plainOptions : [])
  }

  return (
    <>
      <CheckboxGroup
        options={plainOptions}
        value={checkedList}
        onChange={onChange}
      />
      <Divider />
      <Checkbox
        indeterminate={indeterminate}
        onChange={onCheckAllChange}
        checked={checkAll}
        style={{ marginBottom: '20px' }}>
        Check all
      </Checkbox>
    </>
  )
}

export default CheckBoxProp
