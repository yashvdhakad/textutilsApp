import React, { useState } from 'react'

const Buttons = () => {
  const [text, setText] = useState("")

  const upperCaseHandler = (text) =>{
    let newText = text.toUpperCase;
    setText(newText);
  }

  return (
    <button className='block m-[auto] px-4 py-2 bg-blue-100 text-blue-900 font-bold border-2 border-blue-100 rounded-lg' onClick={upperCaseHandler}>Uppercase {text}</button>
  )
}

export default Buttons