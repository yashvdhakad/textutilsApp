import React from 'react'

const Textarea = (props) => {
  return (
    <textarea className='w-1/2 h-60 block m-[auto] p-4 border-2 border-zinc-200 rounded-lg text-black font-bold transition' placeholder='Put your text here and click the button below to see your output.' value={props.text} onChange={props.onChangeHandler} style={props.emoji === "🌙" ? props.lightMode : props.darkMode}></textarea>
  )
}

export default Textarea