import React from 'react'
import Spline from '@splinetool/react-spline';

function App() {
  return (
    <div className='w-screen h-screen relative font-Poppins'>
      <Spline scene="https://prod.spline.design/6OXt9GN-4aKN9q5y/scene.splinecode" />
      <div className='h-fit w-screen flex justify-between  absolute top-0'>
        <h1 className=' uppercase font-semibold text-xl pt-[4vh] pl-[15vw] text-[#514bb8]'>hydo</h1>
        <div className='flex gap-[3vw] pr-[15vw] pt-[4vh]'>
          <h1>Home</h1>
          <h1>About</h1>
          <h1>Contact</h1>
        </div>
      </div>
      <div className=' absolute bottom-[8%] left-[42%] flex flex-col items-center text-center'>
          <h1 className=' capitalize text-sm'>the most epic water bottle known to make. <br /> hydrate with style like no one before</h1>
          <button className='mt-5 bg-[#514bb8] px-5 py-3 rounded-full text-white'>Explore Products</button>
        </div>
    </div>
  )
}

export default App