import React from 'react'

const TextInfo = (props) => {
  return (
    <div className='w-fit m-[auto] text-lg text-black font-bold transition' style={props.emoji === "🌙" ? {color: "black"} : {color: "white"}}>
                Characters: {props.text.length}, Words: {props.text === "" ? "0" : props.text.split(/\s+/).filter((e)=>{return e.length!=0}).length}, Time to Read: {props.text === "" ? "0 " : 0.25 * props.text.split(" ").length}sec</div>
  )
}

export default TextInfo