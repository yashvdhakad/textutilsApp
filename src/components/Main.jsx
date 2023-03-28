import { useState } from "react"
import Textarea from './Textarea'
import Buttons from './Buttons'
import TextInfo from './TextInfo'

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
        <div className="space-y-24">
            <Textarea text={text} emoji={props.emoji} lightMode={props.lightMode} darkMode={props.darkMode} onChangeHandler={onChangeHandler} />

            <Buttons emoji={props.emoji} lightMode={props.lightMode} darkMode={props.darkMode} upperCaseHandler={upperCaseHandler} lowerCaseHandler={lowerCaseHandler} clearTextHandler={clearTextHandler} copyTextHandler={copyTextHandler} extraSpaceHandler={extraSpaceHandler} />

            <TextInfo text={text} emoji={props.emoji} />
            
            <div className="w-1/2 m-[auto] font-semibold border-2 rounded-lg p-4">{text.length>0 ? text : "Your text will preview here."}</div>
        </div>
    )
}

export default Main