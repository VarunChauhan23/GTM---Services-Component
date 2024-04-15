import React from 'react'
import Transition from './Transition'
import './TextComponent.css';

const TextComponent = () => {
  return (
    <div className='text-container'>
      <div>
        <h2 className='headings'>Best service</h2>
        <h2 className='headings'>provided by us:</h2>
        <h1 className='ios-heading'>IOS Development</h1>
        <hr className='line-break' />
        <Transition />
      </div>
    </div>
  )
}

export default TextComponent