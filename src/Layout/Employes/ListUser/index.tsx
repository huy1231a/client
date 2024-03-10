import React from 'react'
import { Avatar, Flex, Typography, Dropdown, Button } from 'antd'
import './style.css'
import type { MenuProps } from 'antd';
import { UserList } from '../Type'
import { Link } from 'react-router-dom'

const ListUser: React.FC<UserList> = ({
    id,
    name,
    gmail,
    sex,
    dob,
    age,
    position,
    typeOfPostion,
    avatar,
}) => {
    const items: MenuProps['items'] = [
        {
            key: '1',
            label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                    View details
                </a>
            ),
        },
        {
            key: '2',
            label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                    Edit
                </a>
            ),
        },
        {
            key: '3',
            label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                    Delete
                </a>
            ),
        },
    ];
    const { Text, Title } = Typography
    return (
        <div className='list__user'>
            <div className='list__name'>
                <Link to={'https://www.facebook.com/nqh2020'} target='_blank'>
                    <Avatar style={{ width: 50, height: 50 }} src={avatar} />
                </Link>
                <div className='left__job__name'>
                    <span className='name__'>{name}</span>
                    <Text type='secondary'>{gmail}</Text>
                </div>
            </div>
            <div className='list__sex'>
                <Text type='secondary'>Gender</Text>
                <div className='name__'>{sex}</div>
            </div>
            <div className='list__dob'>
                <Text type='secondary'>Birthday</Text>
                <div className='name__'>{dob}</div>
            </div>
            <div className='list__age'>
                <Text type='secondary'>Full age</Text>
                <div className='name__'>{age}</div>
            </div>
            <div className='list__pos'>
                <Text type='secondary'>Position</Text>
                <Flex align='center' gap={5}>
                    <div className='name__'>{position}</div>
                    <div className='level'>
                        <span className='l'>{typeOfPostion}</span>
                    </div>
                </Flex>
            </div>
            <div className='list__active'>
                <Dropdown menu={{ items }} placement="bottomLeft">
                    <div className='svg__user'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M14 5C14 6.10457 13.1046 7 12 7C10.8954 7 10 6.10457 10 5C10 3.89543 10.8954 3 12 3C13.1046 3 14 3.89543 14 5ZM14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12ZM12 21C13.1046 21 14 20.1046 14 19C14 17.8954 13.1046 17 12 17C10.8954 17 10 17.8954 10 19C10 20.1046 10.8954 21 12 21Z" fill="#0A1629" />
                        </svg>
                    </div>
                </Dropdown>
            </div>
        </div>
    )
}

export default ListUser
