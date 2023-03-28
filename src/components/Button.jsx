import React from 'react'

const Button = (props) => {
  return (
    <button className='m-[auto] px-4 py-2 bg-blue-100 text-blue-900 font-bold rounded-lg hover:shadow transition' onClick={props.handler} style={props.emoji === "🌙" ? props.darkMode : props.lightMode}>{props.name}</button>
  )
}

export default Button