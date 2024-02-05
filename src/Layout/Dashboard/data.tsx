import { Events } from '../../common/Dashboard/NearEvents'
import { Data } from '../../common/Dashboard/Workload'
import { ClockCircleOutlined } from '@ant-design/icons'
import medium from './image/medium.png'

export interface ProjectData {
  id: string
  name: string
  date: string
  status: string
  allTask: string
  activeTask: string
}
export const projectData: ProjectData[] = [
  {
    id: 'PN0001265',
    name: 'Medical App (iOS native)',
    date: 'Created Sep 12, 2020',
    status: 'Medium',
    allTask: '34',
    activeTask: '13',
  },
  {
    id: 'PN0001221',
    name: 'Food Delivery Service',
    date: 'Created Sep 10, 2020',
    status: 'Medium',
    allTask: '50',
    activeTask: '24',
  },
  {
    id: 'PN0001290',
    name: 'Food Delivery Service',
    date: 'Created May 28, 2020',
    status: 'Low',
    allTask: '23',
    activeTask: '20',
  },
]

export const info: Data[] = [
  {
    name: 'Shawn Stone',
    job: 'UI/UX Designer',
    level: 'Middle',
  },
  {
    name: 'Shawn Stone',
    job: 'UI/UX Designer',
    level: 'Middle',
  },
  {
    name: 'Shawn Stone',
    job: 'UI/UX Designer',
    level: 'Middle',
  },
  {
    name: 'Shawn Stone',
    job: 'UI/UX Designer',
    level: 'Middle',
  },
  {
    name: 'Shawn Stone',
    job: 'UI/UX Designer',
    level: 'Middle',
  },
  {
    name: 'Shawn Stone',
    job: 'UI/UX Designer',
    level: 'Middle',
  },
  {
    name: 'Shawn Stone',
    job: 'UI/UX Designer',
    level: 'Middle',
  },
  {
    name: 'Shawn Stone',
    job: 'UI/UX Designer',
    level: 'Middle',
  },
]

export const dataEv: Events[] = [
  {
    img: medium,
    timeAndDate: 'Today | 5:00 PM',
    time: '4h',
    titleBox: 'Presentation of the new department',
    icon: <ClockCircleOutlined />,
    red: 'blue',
  },
  {
    img: medium,
    timeAndDate: 'Today | 5:00 PM',
    time: '4h',
    titleBox: 'Anna’s Birthday',
    icon: <ClockCircleOutlined />,
    red: 'red',
  },
  {
    img: medium,
    timeAndDate: 'Today | 5:00 PM',
    time: '4h',
    titleBox: 'Ray’s Birthday',
    icon: <ClockCircleOutlined />,
    red: 'red',
  },
]
