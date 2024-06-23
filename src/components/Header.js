import React from 'react';
// images
import Logo from '../assets/Logo.svg';

const Header = () => {
  return <header className='py-8'>
    <div className="container mx-auto">
      <div className='flex justify-between items-center '>
        {/* logo */}
        <a href='#'>
          <img src={Logo} alt="" className='w-40 sm:w-40 md:w-max lg:w-max'/>
        </a>
        {/* button */}
        <a href="mailto:n.ajanthan01@gmail.com"><button className='btn btn-sm'>Work with me</button></a>
      </div>
    </div>
  </header>;
};

export default Header;
