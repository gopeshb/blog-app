import { Footer } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { BsGithub,BsLinkedin  } from 'react-icons/bs';
import { SiLeetcode,SiGeeksforgeeks } from "react-icons/si";
export default function FooterCom() {
  return (
    <Footer container className='border border-t-8 border-sky-600 '>
      <div className='w-full max-w-7xl mx-auto '>
        <div className='w-full sm:flex sm:items-center sm:justify-between'>
          <Footer.Copyright
            href='#'
            by="Bhai Log" className='font-semibold'
            year={new Date().getFullYear()}
          />
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <Footer.Icon href='#' className='text-blue-600' icon={BsLinkedin}/>
            <Footer.Icon href='#'  className='text-yellow-400' icon={SiLeetcode}/>
            <Footer.Icon href='#' className='text-green-600' icon={SiGeeksforgeeks}/>
            <Footer.Icon href='https://github.com/gopeshb'  className='text-black' icon={BsGithub}/>

          </div>
        </div>
      </div>
    </Footer>
  );
}