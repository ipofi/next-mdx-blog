import React from 'react'

const Button = ({ text }) => {
  return (
    <button className='button' onClick={({ target }) => (target.innerText += '☲')}>
      {text}
    </button>
  )
}

export default Button
