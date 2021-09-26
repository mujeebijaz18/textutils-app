import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('');

    const handleUppercase = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Converted to Uppercase', 'success');
    }

    const handleLowercase = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Converted to Lowercase', 'success');
    }

    const handleremoveSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert('Extra spaces are removed', 'success');
    }

    const handleCopy = () => {
        let copyText = document.getElementById("myBox");
        copyText.select();
        navigator.clipboard.writeText(copyText.value);
        document.getSelection().removeAllRanges();
        props.showAlert('Text copied to clipboard', 'success');
    }

    const handleClearText = () => {
        let newText = '';
        setText(newText);
        props.showAlert('Text Cleared', 'success');

    }

    let countWords = () => {
        let newText = text.split(/[ ]+/);
        return newText.length - 1;
    }

    const onChangeHandler = (event) => {
        setText(event.target.value);
    }



    return (
        <>
            <div className="container" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h3>{props.heading}</h3>
                <div className="mb-3">
                    <textarea className="form-control" id="myBox" value={text} onChange={onChangeHandler} rows="8" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#4f4e4e', color: props.mode === 'light' ? 'black' : 'white' }}></textarea>
                </div>
                <button className="btn btn-primary mx-1 my-1" disabled={text.length === 0} onClick={handleUppercase}>Convert to UPPERCASE</button>
                <button className="btn btn-primary mx-1 my-1" disabled={text.length === 0} onClick={handleLowercase}>Convert to lowercase</button>
                <button className="btn btn-primary mx-1 my-1" disabled={text.length === 0} onClick={handleremoveSpaces}>Remove Extra Spaces</button>
                <button className="btn btn-primary mx-1 my-1" disabled={text.length === 0} onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-danger mx-1 my-1" disabled={text.length === 0} onClick={handleClearText}>Clear Text</button>
            </div>
            <div className="container my-6" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h5>Your text summary</h5>
                {/* <p>{text.toString().split(" ").length - 1} Words and {text.length} Characters</p> */}
                <p>{countWords()} Words and {text.length} Characters</p>

                <p>{0.008 * text.toString().split(" ").filter((element) => { return element.length !== 0 }).length} Minutes read</p>
            </div>
        </>
    )
}
