import React from 'react'
import TextComponent from './components/TextComponent'
import MainHeading from './components/MainHeading'
import ButtonComponent from './components/ButtonComponent'
import Slider from './components/Slider'
import './App.css'

const App = () => {
  return (
    <>
      <MainHeading />
      <div className='main-container'>
        <TextComponent />
        <Slider />
      </div>
      <ButtonComponent />
    </>
  )
}

export default App