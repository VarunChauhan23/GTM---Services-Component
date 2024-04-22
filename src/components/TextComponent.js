import React from 'react'
import Transition from './Transition'
import styles from './TextComponent.module.css'

const TextComponent = () => {
  return (
    <div className={styles['text-container']}>
      <div>
        <h2 className={styles['headings']}>Best service</h2>
        <h2 className={styles['headings']}>provided by us:</h2>
        <h1 className={styles['ios-heading']}>IOS Development</h1>
        <hr className={styles['line-break']} />
        <Transition />
      </div>
    </div>
  )
}

export default TextComponent