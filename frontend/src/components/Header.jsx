import { Button, Navbar, TextInput } from 'flowbite-react'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaMoon, FaSun } from 'react-icons/fa';
import { AiOutlineSearch } from 'react-icons/ai';
export default function Header() {
  const path=useLocation().pathname;
  return (
    <Navbar className='border-b-2 font-semibold'>
      <Link to="/" className='self-center whitespace-nowrap text-sm sm:text-xl  dark:text-white'>
        <span className='p-2  text-white bg-gradient-to-r from-cyan-600 via-sky-600 to-blue-600 font-semibold rounded-lg'>Bhai Log</span>
      </Link>
      <form >
        <TextInput type='text' placeholder='Search...' rightIcon={AiOutlineSearch} className='hidden lg:inline' />
      </form>
      <Button className='w-12 h-10 lg:hidden' color='gray'>
        <AiOutlineSearch />
      </Button>
      <div className='flex gap-2 md:order-2'>
        <Button className='w-12 h-10 hidden sm:inline ' color='gray' >
          <FaMoon/>
        </Button>
        <Link to='/sign-in'>
            <Button gradientDuoTone='purpleToBlue' className='font-semibold' >
              Sign In
            </Button>
          </Link>
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
