import { useState } from "react"

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
                <button className='m-[auto] px-4 py-2 bg-blue-100 text-blue-900 font-bold border-2 border-blue-100 rounded-lg hover:shadow' onClick={upperCaseHandler}>To UpperCase</button>

                <button className='m-[auto] px-4 py-2 bg-blue-100 text-blue-900 font-bold border-2 border-blue-100 rounded-lg hover:shadow' onClick={lowerCaseHandler}>To LowerCase</button>

                <button className='m-[auto] px-4 py-2 bg-blue-100 text-blue-900 font-bold border-2 border-blue-100 rounded-lg hover:shadow' onClick={clearTextHandler}>Clear Text</button>

                <button className='m-[auto] px-4 py-2 bg-blue-100 text-blue-900 font-bold border-2 border-blue-100 rounded-lg hover:shadow' onClick={copyTextHandler}>Copy Text</button>

                <button className='m-[auto] px-4 py-2 bg-blue-100 text-blue-900 font-bold border-2 border-blue-100 rounded-lg hover:shadow' onClick={extraSpaceHandler}>Remove Extra Spaces</button>
            </div>

            <div className='w-fit m-[auto] text-blue-900 font-bold space-y-2'>
                Characters: {text.length}, Words: {text === "" ? "0" : text.split(" ").length}, Time to Read: {text === "" ? "0 " : 0.25 * text.split(" ").length}sec</div>

            {/* <div className="">Preview: {text}</div> */}
        </>
    )
}

export default Main