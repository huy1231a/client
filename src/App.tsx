import './App.css'
import { Layout, Flex, Typography } from 'antd'
import Siderbar from './components/sideBar/siderbar'
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom'
import HeaderC from './components/header/header'
import ProjectPage from './pages/ProjectPage'
import DashBoardPage from './pages/dashboard/DashBoardPage'
import ViewAllEvent from './pages/dashboard/viewAllEvents/ViewAllEvent'
import ProjectDetailsPage from './pages/ProjectDetailsPage'
import TaskDetailsPage from './pages/TaskDetailsPage'
import CalenderPage from './pages/Calender/CalenderPage'
import MyProfilePage from './pages/Info/MyProfilePage'
import SettingPage from './pages/SettingPage'
import VacationsPage from './pages/Vacations/VacationsPage'
import EmployePage from './pages/EmployePage'
import RigesterPage from './pages/RigesterPage'
import { useState } from 'react'
import Login from './Layout/Login'
import AddProjectPage from './pages/AddProjectPage'
import MessengerPage from './pages/MessengerPage'
import InfoPortulPage from './pages/InfoPortulPage'

const { Header, Footer, Content } = Layout
const { Text } = Typography

function App(): JSX.Element {
  const [token, setToken] = useState<string | null>(
    localStorage.getItem('token')
  )

  const handleLogout = () => {
    // Clear token from localStorage
    localStorage.removeItem('token')
    // Clear token from state
    setToken(null)
  }

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
                  <HeaderC handleLogout={handleLogout} />
                </Header>
                <Content style={{ background: '#F4F9FD' }} className='content'>
                  <Routes>
                    <Route path='/dashboard' Component={DashBoardPage} />
                    <Route path='/dashboard/viewAll' Component={ViewAllEvent} />
                    <Route path='/project' Component={ProjectPage} />
                    <Route
                      path='/project/addproject'
                      Component={AddProjectPage}
                    />
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
                    <Route path={`/employees`} Component={EmployePage} />
                    <Route path={`/messenger`} Component={MessengerPage} />
                    <Route path={`/infoportal`} Component={InfoPortulPage} />
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
            <Route path='/login' element={<Login setToken={setToken} />} />
            <Route
              path='/dashboard'
              element={
                auth ? <DashBoardPage /> : <Navigate to='/login' replace />
              }
            />
            <Route path='/register' Component={RigesterPage} />
          </Routes>
        </BrowserRouter>
      )}
    </>
  )
}

export default App
