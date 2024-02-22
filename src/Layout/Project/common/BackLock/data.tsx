import { Avatar } from 'antd'
import { Task } from '../boardTask/dropfile'

export const BackLockData: Task[] = [
  {
    id: '1',
    idTask: 'TS0001245',
    name: 'UX sketches',
    status: 'To Do',
    image: <Avatar />,
    time: '8 hrs',
    days: '5 days left',
    level: 'Hard',
    icon: (
      <svg
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M12.6129 19.7903L12.7071 19.7071L17.7071 14.7071C18.0976 14.3166 18.0976 13.6834 17.7071 13.2929C17.3466 12.9324 16.7794 12.9047 16.3871 13.2097L16.2929 13.2929L13 16.585V5C13 4.44772 12.5523 4 12 4C11.4872 4 11.0645 4.38604 11.0067 4.88338L11 5V16.585L7.70711 13.2929C7.34662 12.9324 6.77939 12.9047 6.3871 13.2097L6.29289 13.2929C5.93241 13.6534 5.90468 14.2206 6.2097 14.6129L6.29289 14.7071L11.2929 19.7071C11.6534 20.0676 12.2206 20.0953 12.6129 19.7903Z'
          fill='#0AC947'
        />
      </svg>
    ),
  },
  {
    id: '2',
    status: 'In Progress',
    name: 'Animation for Landing page',
    idTask: 'TS0001246',
    image: <Avatar />,
    time: '6 hrs',
    days: '6 days left',
    level: 'Hard',
    icon: (
      <svg
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M12.6129 19.7903L12.7071 19.7071L17.7071 14.7071C18.0976 14.3166 18.0976 13.6834 17.7071 13.2929C17.3466 12.9324 16.7794 12.9047 16.3871 13.2097L16.2929 13.2929L13 16.585V5C13 4.44772 12.5523 4 12 4C11.4872 4 11.0645 4.38604 11.0067 4.88338L11 5V16.585L7.70711 13.2929C7.34662 12.9324 6.77939 12.9047 6.3871 13.2097L6.29289 13.2929C5.93241 13.6534 5.90468 14.2206 6.2097 14.6129L6.29289 14.7071L11.2929 19.7071C11.6534 20.0676 12.2206 20.0953 12.6129 19.7903Z'
          fill='#0AC947'
        />
      </svg>
    ),
  },
  {
    id: '3',
    status: 'Done',
    idTask: 'TS0001247',
    name: 'Preloader',
    image: <Avatar />,
    time: '13 hrs',
    days: '4 days left',
    level: 'Hard',
    icon: (
      <svg
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M12.6129 19.7903L12.7071 19.7071L17.7071 14.7071C18.0976 14.3166 18.0976 13.6834 17.7071 13.2929C17.3466 12.9324 16.7794 12.9047 16.3871 13.2097L16.2929 13.2929L13 16.585V5C13 4.44772 12.5523 4 12 4C11.4872 4 11.0645 4.38604 11.0067 4.88338L11 5V16.585L7.70711 13.2929C7.34662 12.9324 6.77939 12.9047 6.3871 13.2097L6.29289 13.2929C5.93241 13.6534 5.90468 14.2206 6.2097 14.6129L6.29289 14.7071L11.2929 19.7071C11.6534 20.0676 12.2206 20.0953 12.6129 19.7903Z'
          fill='#0AC947'
        />
      </svg>
    ),
  },
]
