import React from 'react'

const Footer = () => {
  return (
    <footer >

   <div className='flex w-[100%] justify-around items-center border-t-2 mt-10 p-10'>

   <div className='text-center w-[200px] flex justify-between items-center'>
    <img src='./images/pizza-hero.png' width="100px"/>
    <h1 className='text-gray-900'>NYC Pizza</h1>
   </div>   
      
    <ul className='text-gray-900 text-[0.90rem]'>
      <li>About us</li>
      <li>Contact us</li>
      <li>Branch</li>
      <li>Rate us</li>
    </ul>

    <ul className='text-gray-900 text-[0.90rem]'>
      <li>About us</li>
      <li>Contact us</li>
      <li>Branch</li>
      <li>Rate us</li>
    </ul>

    <ul className='text-gray-900 text-[0.90rem]'>
      <li>About us</li>
      <li>Contact us</li>
      <li>Branch</li>
      <li>Rate us</li>
    </ul>

    </div>   

    <p className='text-center text-gray-600 mt-5'>&copy; 2024 Venkatesh S M. All rights reserved.</p>

    </footer>
  )
}

export default Footer
