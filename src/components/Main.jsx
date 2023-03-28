import { useState } from "react"
import Button from './Button'

const Main = (props) => {
    const [text, setText] = useState("")

    const onChangeHandler = (e) => {
        setText(e.target.value);
    }

    const upperCaseHandler = () => {
        setText(text.toUpperCase());
    }
    const lowerCaseHandler = () => {
        setText(text.toLowerCase());
    }
    const clearTextHandler = () => {
        setText("");
    }
    const copyTextHandler = () => {
        navigator.clipboard.writeText(text)
    }
    const extraSpaceHandler = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }

    return (
        <>
            <textarea className='w-1/2 h-60 block m-[auto] p-4 border-2 border-zinc-200 rounded-lg text-black font-bold transition' placeholder='Put your text here and click the button below to see your output.' value={text} onChange={onChangeHandler} style={props.emoji === "🌙" ? props.lightMode : props.darkMode}></textarea>

            <div className="w-2/3 m-[auto] flex">
                <Button name="To UpperCase" upperCaseHandler={upperCaseHandler} emoji={props.emoji} darkMode={props.darkMode} lightMode={props.lightMode} />

                <Button name="To LowerCase" lowerCaseHandler={lowerCaseHandler} emoji={props.emoji} darkMode={props.darkMode} lightMode={props.lightMode} />

                <Button name="Clear Text" clearTextHandler={clearTextHandler} emoji={props.emoji} darkMode={props.darkMode} lightMode={props.lightMode} />

                <Button name="Copy Text" copyTextHandler={copyTextHandler} emoji={props.emoji} darkMode={props.darkMode} lightMode={props.lightMode} />

                <Button name="Remove Extra Spaces" extraSpaceHandler={extraSpaceHandler} emoji={props.emoji} darkMode={props.darkMode} lightMode={props.lightMode} />
            </div>

            <div className='w-fit m-[auto] text-black font-bold space-y-2 transition' style={props.emoji === "🌙" ? {color: "black"} : {color: "white"}}>
                Characters: {text.length}, Words: {text === "" ? "0" : text.split(/\s+/).filter((e)=>{return e.length!=0}).length}, Time to Read: {text === "" ? "0 " : 0.25 * text.split(" ").length}sec</div>

            <div className="w-1/2 m-[auto] font-bold">Preview: {text}</div>
        </>
    )
}

export default Main