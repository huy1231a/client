import './App.css'
import { Layout, Flex, Typography } from 'antd'
import Siderbar from './components/sideBar/siderbar'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import HeaderC from './components/header/header'
import ProjectPage from './pages/ProjectPage'
import DashBoardPage from './pages/dashboard/DashBoardPage'
import LoginPage from './pages/LoginPage'
import ViewAllEvent from './pages/dashboard/viewAllEvents/ViewAllEvent'
import ProjectDetailsPage from './pages/ProjectDetailsPage'
import TaskDetailsPage from './pages/TaskDetailsPage'
import CalenderPage from './pages/Calender/CalenderPage'
import MyProfilePage from './pages/Info/MyProfilePage'
import SettingPage from './pages/SettingPage'
import VacationsPage from './pages/Vacations/VacationsPage'

const { Header, Footer, Content } = Layout
const { Text } = Typography

function App() {
  const auth = true
  return (
    <>
      {auth ? (
        <BrowserRouter>
          <Flex gap='middle' wrap='wrap'>
            <Layout>
              <Siderbar />
              <Layout className='layout__full'>
                <Header className='header__main'>
                  <HeaderC />
                </Header>
                <Content style={{ background: '#F4F9FD' }} className='content'>
                  <Routes>
                    <Route path='/dashboard' Component={DashBoardPage} />
                    <Route path='/dashboard/viewAll' Component={ViewAllEvent} />
                    <Route path='/project' Component={ProjectPage} />
                    {/* <Route path={`/project/${id}`} Component={ProjectPage} /> */}
                    <Route
                      path={`/project/details`}
                      Component={ProjectDetailsPage}
                    />
                    {/* <Route path={`/project/${id}`} Component={ProjectPage} /> */}
                    <Route
                      path={`/project/details/PN0001245`}
                      Component={TaskDetailsPage}
                    />
                    <Route path={`/calender`} Component={CalenderPage} />
                    <Route path={`/myprofile`} Component={MyProfilePage} />
                    <Route
                      path={`/myprofile/setting`}
                      Component={SettingPage}
                    />
                    <Route path={`/vacations`} Component={VacationsPage} />
                  </Routes>
                </Content>
                <Footer>
                  <div className='footer'>
                    <Text type='secondary'>Design By nqHuy vjp</Text>
                    <Text type='secondary'>taolahuy2k0@gmail.com</Text>
                  </div>
                </Footer>
              </Layout>
            </Layout>
          </Flex>
        </BrowserRouter>
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path='/' Component={LoginPage} />
          </Routes>
        </BrowserRouter>
      )}
    </>
  )
}

export default App
