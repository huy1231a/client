import React, { useRef, useState } from 'react'
import './style.css'
import {
  Avatar,
  Button,
  Divider,
  Input,
  Menu,
  MenuProps,
  Modal,
  Typography,
} from 'antd'
import { svg__search, svg__filter, svg__dot, avart2, icon } from './Constans'
import {
  MailOutlined,
  AppstoreOutlined,
  SearchOutlined,
  PlusOutlined,
} from '@ant-design/icons'
import BoxChat from './Boxchat'

import Picker from 'emoji-picker-react'
import EmojiPicker from 'emoji-picker-react'

type MenuItem = Required<MenuProps>['items'][number]

interface InputRef extends HTMLInputElement {
  input: HTMLInputElement | null
}

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
  onClick?: any,
  style?: React.CSSProperties
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
    onClick,
    style,
  } as MenuItem
}

const items: MenuProps['items'] = [
  getItem('Groups', 'sub1', <MailOutlined />, [
    getItem(
      <>
        <BoxChat
          messageBox='dit cu chung may may thag ngu'
          nameBox='Medical App Team'
          time='12:04'
          numberOfNoti={24}
          img={avart2.avartar1}
        />
      </>,
      '1'
    ),
    getItem(
      <>
        <BoxChat
          messageBox='dit cu chung may may thag ngu'
          nameBox='Food Delivery Service'
          time='12:04'
          numberOfNoti={1}
        />
      </>,
      '2'
    ),
  ]),
  getItem('Direct Messages', 'sub2', <AppstoreOutlined />, [
    getItem(
      <>
        <BoxChat
          messageBox='dit cu chung may may thag ngu'
          nameBox='Garrett Watson'
          time='12:04'
        />
      </>,
      '3'
    ),
    getItem(
      <>
        <BoxChat
          messageBox='dit cu chung may may thag ngu'
          nameBox='Caroline Santos'
          time='12:04'
        />
      </>,
      '4'
    ),
    getItem(
      <>
        <BoxChat
          messageBox='dit cu chung may may thag ngu'
          nameBox='Leon Nunez'
          time='12:04'
        />
      </>,
      '5'
    ),
    getItem(
      <>
        <BoxChat
          messageBox='dit cu chung may may thag ngu'
          nameBox='Oscar Holloway'
          time='12:04'
        />
      </>,
      '6'
    ),
    getItem(
      <>
        <BoxChat
          messageBox='dit cu chung may may thag ngu'
          nameBox='Justin Huy'
          time='12:04'
        />
      </>,
      '7'
    ),
    getItem(
      <>
        <BoxChat
          messageBox='Play bida with me'
          nameBox='Ko Pin Yi'
          time='12:04'
        />
      </>,
      '8'
    ),
  ]),
]

const Messenger = () => {
  const { Title, Text } = Typography

  const [key, setKey] = useState('')

  const [showPicker, setShowPicker] = useState<boolean>(false)
  const [text, setText] = useState<string>('')
  const inputRef = useRef<InputRef | null>({ input: null })

  const handleEmojiSelect = (emoji: any) => {
    const input = inputRef.current
    if (input) {
      const startPos =
        input.selectionStart !== null ? input.selectionStart : text.length
      const endPos =
        input.selectionEnd !== null ? input.selectionEnd : text.length
      const newText = text.slice(0, startPos) + emoji.emoji + text.slice(endPos)
      setText(newText)
      setShowPicker(false)
    }
  }

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && text === '') {
      setText('')
    }
  }

  const onClick: MenuProps['onClick'] = (e) => {
    setKey(e.key)
    console.log(e.key)
  }

  return (
    <div className='mesenger'>
      <Title level={2} style={{ fontWeight: 600 }} className='header__mes'>
        Messenger
      </Title>
      <div className='chat__mes'>
        <div className='left__chat__ct'>
          <div className='header__chat__ct'>
            <div className='top__contend'>
              <Title
                level={4}
                style={{ fontWeight: 600, margin: 'auto' }}
                className='header__mes'>
                Conversations
              </Title>
            </div>
            <div className='btn__search'>
              <Button className='box__1'>
                <SearchOutlined />
              </Button>
              <Button type='primary' className='box__2'>
                <PlusOutlined />
              </Button>
            </div>
          </div>
        </div>
        <div className='diveder__chat'></div>
        <div className='right__chat__ct'>
          <div className='left__title'>
            <Avatar style={{ width: 50, height: 50 }} src={avart2.avartar1} />
            <div className='left__job__name'>
              <span className='title'>Oscar Holloway</span>
              <Text type='secondary'>UI/UX Designer</Text>
            </div>
          </div>
          <div>
            <div className='box__'>
              <div className='box__1'>{svg__search}</div>
              <div className='box__1'>{svg__filter}</div>
              <div className='box__1'>{svg__dot}</div>
            </div>
          </div>
        </div>
      </div>
      <Divider style={{ margin: '0px auto' }} />
      <div className='botton__chat'>
        <div className='right__bt__chat'>
          <Menu mode='inline' onClick={onClick} items={items} />
        </div>
        <div className='diveder__chat2'></div>
        <div className='left__bt__chat'>
          <div className='calender__chat'>
            <Text type='secondary' style={{ fontWeight: 600 }}>
              Fridey, September 8
            </Text>
          </div>
          <div>aa</div>
          <div className='type__search'>
            <Button onClick={() => setShowPicker(true)}>{icon.icon1}</Button>
            <Input
              ref={(ref) => {
                if (ref) inputRef.current = ref.input
              }}
              value={text}
              onChange={handleTextChange}
              onKeyDown={handleKeyDown}
              placeholder='Type something...'
            />

            {showPicker && <EmojiPicker onEmojiClick={handleEmojiSelect} />}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Messenger
