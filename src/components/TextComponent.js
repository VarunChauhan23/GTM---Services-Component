import React from 'react'
import Transition from './Transition'

const TextComponent = () => {
  return (
    <div className='sm:m-auto my-5 ml-1 flex flex-col'>
      <div className=''>
        <h2 className='sm:text-4xl text-3xl font-bold'>Best service</h2>
        <h2 className='sm:text-4xl text-3xl font-bold'>provided by us:</h2>
        <h1 className='my-3 sm:text-6xl text-4xl font-bold text-[#0D99FF]'>IOS Development</h1>
        <hr className='my-3 sm:my-5 ml-1 mr-1 border-t-2 border-gray-900' />
        <Transition />
      </div>
    </div>
  )
}

export default TextComponent