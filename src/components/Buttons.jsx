import React from 'react'
import Button from './Button'

const Buttons = (props) => {
  return (
    <div className="w-2/3 m-[auto] flex">
                <Button name="To UpperCase" handler={props.upperCaseHandler} emoji={props.emoji} darkMode={props.darkMode} lightMode={props.lightMode} />

                <Button name="To LowerCase" handler={props.lowerCaseHandler} emoji={props.emoji} darkMode={props.darkMode} lightMode={props.lightMode} />

                <Button name="Clear Text" handler={props.clearTextHandler} emoji={props.emoji} darkMode={props.darkMode} lightMode={props.lightMode} />

                <Button name="Copy Text" handler={props.copyTextHandler} emoji={props.emoji} darkMode={props.darkMode} lightMode={props.lightMode} />

                <Button name="Remove Extra Spaces" handler={props.extraSpaceHandler} emoji={props.emoji} darkMode={props.darkMode} lightMode={props.lightMode} />
            </div>
  )
}

export default Buttons