import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import SignIn from './pages/SIgnIn'
import Dashboard from './pages/DashBoard';
import Projects from './pages/Projects';
import SignUp from './pages/SignUp';
import Header from './components/Header';
import Footer from './components/Footer'
import AdminRoute from './components/AdminRoute'
import CreatePost from './pages/CreatePost';
import PrivateRoute from './components/PrivateRoute';
function App() {

  return (
    <BrowserRouter>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        <div style={{ flex: 1 }}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/sign-up' element={<SignUp />} />
            <Route path='/sign-in' element={<SignIn />} />
            <Route element={<PrivateRoute/>}>
            <Route path='/dashboard' element={<Dashboard />} />
            </Route>
            <Route element={<AdminRoute/>}>
            <Route path='/create-post' element={<CreatePost />} />
            </Route>
            <Route path='/projects' element={<Projects />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
