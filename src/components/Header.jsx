import React from 'react'

const Header = () => {
  return (
      <header className='p-3 flex items-center backdrop-blur-lg bg-opacity-50 border-b-2 fixed top-0 right-0 left-0 z-10'>

        <div className='text-center px-2 w-[350px]'>
         <p className='text-[1.5rem] font-extrabold'>NYC Pizza</p>
         <p>Always Hot & Running</p>
        </div>

        <div className='flex flex-1 justify-around'>
          <a className=' hover:text-gray-700 cursor-pointer'>Home</a>
          <a className=' hover:text-gray-700 cursor-pointer'>Blogs</a>
          <a className=' hover:text-gray-700 cursor-pointer'>Menu</a>
          <a className=' hover:text-gray-700 cursor-pointer'>Location</a>
          <a className=' hover:text-gray-700 cursor-pointer'>Contact Us</a>
        </div>

        <div className='flex w-[300px] justify-around items-center'>

         <div className='relative cursor-pointer'>
         <i className="fa-brands fa-opencart text-[1.7rem]"></i>
         <div className='absolute -top-1 -right-2 px-1 py-0 rounded-full text-white bg-red-600'>0</div>
         </div>

         <div>
          <button className='p-2 px-8 text-[1.3rem] border-2 border-slate-700 rounded-full'>Login</button>
         </div>

        </div>

      </header>
  )
}

export default Header
