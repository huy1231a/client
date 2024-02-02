import './App.css'
import { Layout, Flex } from 'antd'
import Siderbar from './components/sideBar/siderbar'
import { Route, Router, Routes, BrowserRouter } from 'react-router-dom'
import HeaderC from './components/header/header'
import ProjectPage from './pages/ProjectPage'
import DashBoardPage from './pages/DashBoardPage'
import LoginPage from './pages/LoginPage'

const { Header, Footer, Content } = Layout

function App() {
  const auth = true
  return (
    <>
      {auth ? (
        <BrowserRouter>
          <Flex gap='middle' wrap='wrap'>
            <Layout>
              <Siderbar />
              <Layout>
                <Header className='header__main'>
                  <HeaderC />
                </Header>
                <Content style={{ background: '#F4F9FD' }} className='content'>
                  <Routes>
                    <Route path='/dashboard' Component={DashBoardPage} />
                    <Route path='/project' Component={ProjectPage} />
                  </Routes>
                </Content>
                <Footer>Footer</Footer>
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
