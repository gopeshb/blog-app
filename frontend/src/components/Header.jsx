import { Avatar, Button, Dropdown, Navbar, TextInput } from 'flowbite-react'
import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { FaMoon, FaSun } from 'react-icons/fa';
import { AiOutlineSearch } from 'react-icons/ai';
import { useSelector,useDispatch } from 'react-redux';
import { toggle } from '../redux/theme/themeSlice';
import { signOutSuccess } from '../redux/user/userSlice';
export default function Header() {
  const path=useLocation().pathname;
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const {currentUser}=useSelector(state=>state.user);
  const { theme } = useSelector((state) => state.theme);
  const handleSignout = async () => {
    try {
      const res = await fetch('/api/user/signout', {
        method: 'POST',
      });
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        dispatch(signOutSuccess());
        navigate('/sign-in');
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <Navbar className='border-b-2 font-semibold rounded-lg p-3'>
      <Link to="/" className='self-center whitespace-nowrap text-sm sm:text-xl  dark:text-white'>
        <span className='p-2 font-MyFont text-center text-white bg-gradient-to-r from-cyan-600 via-sky-600 to-blue-600 font-semibold rounded-lg'>Bhai Log</span>
      </Link>
      <form >
        <TextInput type='text' placeholder='Search...' rightIcon={AiOutlineSearch} className='hidden lg:inline' />
      </form>
      <Button className='w-12 h-10 lg:hidden' color='gray'>
        <AiOutlineSearch />
      </Button>
      <div className='flex gap-2 md:order-2'>
        <Button className='w-12 h-10 sm:inline ' color='gray' onClick={() => dispatch(toggle())} >
        {theme === 'light' ? <FaSun /> : <FaMoon />}
        </Button>
        {currentUser?(
          <Dropdown arrowIcon={false} inline 
          label={<Avatar alt='user' img={currentUser.profilePicture} rounded/>}>
            <Dropdown.Header>
              <span className='block text-sm font-semibold'>{currentUser.username}</span>
            </Dropdown.Header>
            <Dropdown.Item>
            <Link to={'/dashboard?tab=profile'}>Profile</Link>
            </Dropdown.Item>
            <Dropdown.Divider/>
            <Dropdown.Item onClick={handleSignout}>Sign out</Dropdown.Item>
          </Dropdown>
        ):(
        <Link to='/sign-in'>
            <Button gradientDuoTone='purpleToBlue' className='font-semibold' >
              Sign In
            </Button>
          </Link>)}
          <Navbar.Toggle/>
      </div>
          <Navbar.Collapse>
            <Navbar.Link active={path==='/'} as={'div'}>
              <Link to='/' className='font-semibold'>Home</Link>
            </Navbar.Link>
            <Navbar.Link active={path==='/about'} as={'div'}>
              <Link to='/about' className='font-semibold'>About</Link>
            </Navbar.Link>
            <Navbar.Link active={path==='/projects'} as={'div'}>
              <Link to='/projects' className='font-semibold'>Projects</Link>
            </Navbar.Link>
          </Navbar.Collapse>
    </Navbar>
  )
}
