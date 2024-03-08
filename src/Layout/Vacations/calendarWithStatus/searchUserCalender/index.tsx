import React, { useState } from 'react'
import { Select } from 'antd'
import CalendarWithStatus from '..'

let timeout: ReturnType<typeof setTimeout> | null
// eslint-disable-next-line @typescript-eslint/no-unused-vars
let currentValue: string

interface Data {
  id: string
  value: string
  text: string
}

const dataSelect: Data[] = [
  {
    id: '1',
    value: 'Oscar Holloway',
    text: 'Oscar Holloway',
  },
  {
    id: '2',
    value: 'Evan Yates',
    text: 'Evan Yates',
  },
  {
    id: '3',
    value: 'Lola Zimmerman',
    text: 'Lola Zimmerman',
  },
  {
    id: '4',
    value: 'Tyler Curry',
    text: 'Tyler Curry',
  },

  {
    id: '5',
    value: 'Sadie Wolfe',
    text: 'Sadie Wolfe',
  },

  {
    id: '6',
    value: 'Sean Gibbs',
    text: 'Sean Gibbs',
  },
  {
    id: '7',
    value: 'Corey Watts',
    text: 'Corey Watts',
  },
]

const fetch = (value: string, callback: Function) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars

  const dataV1 = dataSelect.map((item: Data) => ({
    id: 'item.id',
    value: item.value,
    text: item.text,
  }))

  if (timeout) {
    clearTimeout(timeout)
    timeout = null
  }
  currentValue = value

  if (value) {
    timeout = setTimeout(() => {
      const results = dataSelect.filter((item) =>
        item.value.toLowerCase().includes(value.toLowerCase())
      )
      callback(results)
    }, 300)
  } else {
    callback([])
  }
}

const SearchInput: React.FC<{
  placeholder: string
  style: React.CSSProperties
}> = (props) => {
  const [data, setData] = useState<Data[]>(dataSelect)
  const [value, setValue] = useState<string>()
  const [id, setId] = useState<string>()

  const handleSearch = (newValue: string) => {
    fetch(newValue, setData)
  }

  const handleChange = (newValue: string) => {
    setValue(newValue)
    const selectedItem = data.find((item) => item.value === newValue)

    if (selectedItem) {
      setId(selectedItem.id)
    }
  }

  return (
    <>
      <Select
        showSearch
        value={value}
        placeholder={props.placeholder}
        style={props.style}
        defaultActiveFirstOption={false}
        suffixIcon={null}
        filterOption={false}
        onSearch={handleSearch}
        onChange={handleChange}
        notFoundContent={null}
        options={(data || []).map((d) => ({
          value: d.value,
          label: d.text,
        }))}
      />
      {id === '1' && <CalendarWithStatus />}
    </>
  )
}

const SearchUser: React.FC = () => {
  return (
    <SearchInput
      placeholder='Search User Here ...'
      style={{ width: '90%', margin: 'auto', display: 'flex' }}
    />
  )
}

export default SearchUser
