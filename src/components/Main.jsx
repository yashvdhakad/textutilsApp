import { useState } from "react"
import Button from './Button'

const Main = () => {
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
            <textarea className='w-1/2 h-60 block m-[auto] p-4 border-2 border-blue-100 rounded-lg text-blue-900 font-bold' placeholder='Put your text here and click the button below to see your output.' value={text} onChange={onChangeHandler}></textarea>

            <div className="w-2/3 m-[auto] flex">
                <Button name="To UpperCase" upperCaseHandler={upperCaseHandler} />

                <Button name="To LowerCase" lowerCaseHandler={lowerCaseHandler} />

                <Button name="Clear Text" clearTextHandler={clearTextHandler} />

                <Button name="Copy Text" copyTextHandler={copyTextHandler} />

                <Button name="Remove Extra Spaces" extraSpaceHandler={extraSpaceHandler} />
            </div>

            <div className='w-fit m-[auto] text-blue-900 font-bold space-y-2'>
                Characters: {text.length}, Words: {text === "" ? "0" : text.split(" ").length}, Time to Read: {text === "" ? "0 " : 0.25 * text.split(" ").length}sec</div>

            {/* <div className="">Preview: {text}</div> */}
        </>
    )
}

export default Main