import React from 'react'

const NewsLetter = () => {
  return (
    <div className='bg-gray-300 py-20 rounded-full'>
       <h1 className='text-[1.3rem] font-semibold mb-6 text-center'>Subscribe to our news letter</h1>

       <div className='w-[700px] flex items-center justify-center'>
        <input type='email' className='p-2 rounded-md border-2'></input>
        <button className='text-white px-5 py-3 rounded-full ml-2 bg-orange-500'>Subscribe</button>
       </div>

    </div>
  )
}

export default NewsLetter
