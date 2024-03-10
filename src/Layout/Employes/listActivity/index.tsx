import React from 'react'
import { Avatar, Typography } from 'antd';
import './style.css'
import { Link } from 'react-router-dom'

const ListActivity = () => {
    const { Text, Title } = Typography
    return (
        <div className="parent">
            <div className="child">
                <div className='info__user__list'>
                    <Link to={'https://www.facebook.com/nqh2020'} target='_blank'>
                        <Avatar style={{ width: 60, height: 60 }} src={''} />
                    </Link>
                    <span className='name__'>{'name'}</span>
                    <Text type='secondary'>{'gmail'}</Text>
                    <div className='level'>
                        <span className='l'>{'midlle'}</span>
                    </div>
                </div>
                <div className='under__info'>
                    <div className='under__info1'>
                        <span className='name__'>{'0'}</span>
                        <Text type='secondary'>Backlog tasks</Text>
                    </div>
                    <div className='under__info2'>
                        <span className='name__'>{'0'}</span>
                        <Text type='secondary'>Tasks In Progress</Text>
                    </div>
                    <div className='under__info3'>
                        <span className='name__'>{'0'}</span>
                        <Text type='secondary'>Tasks In Review</Text>
                    </div>
                </div>
            </div>
            <div className="child">
                <div className='info__user__list'>

                </div>
            </div>
            <div className="child">
                <div className='info__user__list'>

                </div>
            </div>
            <div className="child">
                <div className='info__user__list'>

                </div>
            </div>
        </div>
    )
}

export default ListActivity