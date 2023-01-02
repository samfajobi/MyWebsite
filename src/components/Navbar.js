import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

// const Baller = styled.div`
//  font-size: 56px;
// `

const NavWrapper = styled.div`
  position: relative;
	z-index: 40;
	.parent-nav {
		z-index: initial;
	}
 
`

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <NavWrapper>

   
    <div className='h-[80px] bg-gradient-to-t from-indigo-200  bg-blue-400'>
        <div className=' h-20 w-full bg-black fixed top-0'>
          <div className='container mx-auto py-6 flex items-center justify-between'>
             <div>
              <img src="" alt="" />
              <div className='text-2xl font-bold text-white'>Samuel.</div>
             </div>
            <div>
              <ul className='hidden md:flex space-x-10 text-white font-bold text-l'  >
                <li className='hover:text-gray-500' >
                  <a href="/">Home</a>
                </li>
                <li className='hover:text-gray-500' >
                  <a href="/">About</a>
                </li>
                <li className='hover:text-gray-500' >
                  <a href="/">Work</a>   
                </li>
                <li className='hover:text-gray-500' >
                  <a href="/">Skills</a> 
                </li>  
                <li className='hover:text-gray-500' >
                  <a href="/">Contact</a>
                </li>
              </ul> 
            </div> 
             <div>
              <img src="./test.jpg" alt="" className='hidden md:block w-8 cursor-pointer' />
              <div onClick={handleClick}  className='space-y-6 cursor-pointer md:hidden'>
                { !nav ? <FontAwesomeIcon icon={faBars} /> : <FontAwesomeIcon icon={faXmark} />}
              </div> 
            </div> 
          </div>
          <ul className={ !nav ? 'hidden' : 'bg-zinc-300  absolute left-0 w-full p-10 space-y-10 text-white text-center md:hidden'}>
                <li className='hover:text-gray-300' >
                  <a href="/">Home</a>
                </li>
                <li className='hover:text-gray-300' >
                  <a href="/">About</a>
                </li>
                <li className='hover:text-gray-300' >
                  <a href="/">Work</a>
                </li>
                <li className='hover:text-gray-300' >
                  <a href="/">Skills</a> 
                </li>  
                <li className='hover:text-gray-300' >
                  <a href="/">Contact</a>
                </li>
              </ul>     
        </div> 
      </div> 
      </NavWrapper>
  
  )
}


export default Navbar;
