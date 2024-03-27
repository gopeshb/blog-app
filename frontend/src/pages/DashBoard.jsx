import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import DashProfile from '../components/DashProfile.jsx';
import DashPosts from '../components/DashPosts.jsx';
import DashUsers from '../components/DashUsers.jsx';
import DashComments from '../components/DashComments.jsx';
import DashSidebar from '../components/DashSidebar.jsx'
import DashboardComp from '../components/DashboardComp.jsx';
import { Button } from 'flowbite-react';
import { IoMdMenu } from "react-icons/io";

export default function DashBoard() {
  const location = useLocation();
  const [tab, setTab] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get('tab');
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className='min-h-[81.5vh] flex flex-col md:flex-row'>
      <div className="md:hidden mx-auto my-2 ">
        <Button className='' onClick={toggleSidebar} gradientDuoTone="greenToBlue" outline={isSidebarOpen} >
          <IoMdMenu className='mx-1 w-6 h-6 text-center'/>Menu</Button>
      </div>
      <div className={` md:w-56 ${isSidebarOpen ? '' : 'hidden'} md:block`}>
        <DashSidebar  toggleSidebar={toggleSidebar} />
      </div>
      {tab === 'profile' && <DashProfile />}
      {tab === 'posts' && <DashPosts />}
      {tab === 'users' && <DashUsers />}
      {tab === 'comments' && <DashComments />}
      {tab === 'dash' && <DashboardComp />}
    </div>
  );
}
