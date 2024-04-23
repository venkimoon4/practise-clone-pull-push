import React from 'react'
import Item from './Item'
import NewsLetter from './NewsLetter'

const Hero = () => {
  return (

    <div className='hero-container ' >

    <div className='backdrop-blur-lg bg-opacity-40'>

    <div className='flex justify-evenly items-center w-[100%]'>
      
      <div className='w-[50%]'>

        <h1 className='text-[2rem] font-extrabold mb-4'>True NYC Pizza</h1>

        <h2 className='text-[1.2rem] font-semibold mb-4'>True Pepperoni Pizza With Thin Crust</h2>

        <p className='mb-4 text-gray-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium corporis architecto beatae, neque quisquam eum, blanditiis magni provident facere eveniet ex, minima unde quae cum eligendi assumenda obcaecati harum laboriosam?</p>

        <div className='flex w-[300px] justify-between items-center mb-4 text-center'>

        <div>
        <i class="fa-solid fa-fire-flame-curved text-[1.5rem]"></i>
        <p className='text-[0.90rem]'>Calories 480</p>
        </div>

        <div>
        <i class="fa-solid fa-cheese text-[1.5rem]"></i>
        <p className='text-[0.90rem]'>Cheese 120g</p>
        </div>

        </div>

        
        <button className='bg-red-400 rounded-full text-white p-2 px-9 font-semibold'>Order</button>

        <span className='ml-5 font-extrabold text-[1.2rem]'>$10.99</span>

      </div>

      <div className='w-[30%]'>
        <img src='./images/pizza-hero.png' width="300px"/>
      </div>

    </div>

    <div className='flex w-[100%] justify-around items-center flex-wrap p-10'>

    <Item/>
    <Item/>
    <Item/>
    <Item/>
    <Item/>
    <Item/>
    <Item/>
    <Item/>

    </div>

    <div className='flex justify-center items-center w-[100%] mt-20'>
      <NewsLetter/>
    </div>


    </div>  

    </div>
  )
}

export default Hero
