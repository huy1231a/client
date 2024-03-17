import React, { useState } from 'react'
import './style.css'
import { Avatar, Button, Divider, Menu, MenuProps, Typography } from 'antd'
import { svg__search, svg__filter, svg__dot } from './Constans';
import { MailOutlined, AppstoreOutlined, SearchOutlined, PlusOutlined } from '@ant-design/icons'
import BoxChat from './Boxchat';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
  onClick?: any
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
    onClick
  } as MenuItem;
}

const items: MenuProps['items'] = [
  getItem('Groups', 'sub1', <MailOutlined />, [
    getItem(<><BoxChat messageBox='dit cu chung may may thag ngu' nameBox='Medical App Team' time='12:04' numberOfNoti={24} /></>, '1'),
    getItem(<><BoxChat messageBox='dit cu chung may may thag ngu' nameBox='Food Delivery Service' time='12:04' numberOfNoti={1} /></>, '2'),

  ]),
  getItem('Direct Messages', 'sub2', <AppstoreOutlined />, [
    getItem(<><BoxChat messageBox='dit cu chung may may thag ngu' nameBox='Garrett Watson' time='12:04' /> </>, '5'),
    getItem(<><BoxChat messageBox='dit cu chung may may thag ngu' nameBox='Caroline Santos' time='12:04' /> </>, '6'),
  ]),


];

const Messenger = () => {
  const { Title, Text } = Typography



  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
  };

  return (
    <div className='mesenger'>
      <Title level={2} style={{ fontWeight: 600 }} className='header__mes'>
        Messenger
      </Title>
      <div className='chat__mes'>
        <div className='left__chat__ct'>
          <div className='header__chat__ct'>
            <div className='top__contend'>
              <Title level={4} style={{ fontWeight: 600, margin: 'auto' }} className='header__mes'>
                Conversations
              </Title>
            </div>
            <div className='btn__search'>
              <Button className='box__1'><SearchOutlined /></Button>
              <Button type='primary' className='box__2'><PlusOutlined /></Button>
            </div>
          </div>

        </div>
        <div className='diveder__chat'></div>
        <div className='right__chat__ct'>
          <div className='left__title'>
            <Avatar style={{ width: 50, height: 50 }} />
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
        <Menu
          mode="inline"
          onClick={onClick}
          style={{ width: '25%' }}
          items={items}
        />
      </div>

    </div>
  )
}

export default Messenger
