import React from 'react'

const Item = ({item}) => {
  return (
    <div className='flex w-[240px] justify-between items-center mt-36 shadow-md p-3 bg-slate-300 rounded-md cursor-pointer'>

      <div>
        <img src='./images/pizza-hero.png' width="100px"/>
      </div>

      <div>
        <h1>Speciality</h1>
        <p>$10.99</p>
      </div>

    </div>
  )
}

export default Item
