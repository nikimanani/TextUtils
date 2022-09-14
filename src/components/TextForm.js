import React, { useState } from 'react'


export default function TextForm(props) {
    const [text, setText] = useState("")
    const handleUpClick = () => {
        console.log("Uppercase was clicked " + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted into Uppercase","success")
    }
    const handledownClick = () => {
        console.log("Lowercase was clicked " + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted into Lowercase","success")
    }
    const clearClick = () => {
        console.log("clear button clicked " + text);
        let newText = "";
        setText(newText);
        props.showAlert("Clear text","success")
    }
    const speakClick = () => {
        console.log("speaker works");
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
        props.showAlert("text spoken","success")
    }
    const handleSpace = () => {
        var text1 = text.split(/[ ]+/);
        setText(text1.join(" "));
        props.showAlert("Extra spaces removed","success")

    }  
    const handleOnChange = (e) => {
        setText(e.target.value)
    }
 
    //setText("new Text here")
    return (
        <>
            <div className="container" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h3>{props.heading}</h3>
                <div className="mb-3">
                <textarea className="form-control" onChange={handleOnChange} style={{ backgroundColor: props.mode === 'light' ? 'white' : 'grey', color: props.mode === 'light' ? 'black' : 'white' }} value={text} id="mybox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary" onClick={handleUpClick}>Convert To Uppercase</button>
                <button className="btn btn-primary  mx-2" onClick={handledownClick}>Convert To Lowercase</button>
                <button className="btn btn-primary  mx-2" onClick={speakClick}>Speak Text</button>
                <button className="btn btn-primary  mx-2" onClick={handleSpace} >Remove Extra Space</button>
                <button className="btn btn-primary  mx-2" onClick={clearClick}>Clear Text</button>
            </div>
            <div className="container my-5 px-2 " style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h3> Your text summary</h3>
                <p>{text.split(" ").length}words and {text.length}characters</p>
                <p>{0.008 * text.split(" ").length} minutes to read</p>
                <h3>Preview</h3>
                <p>{text.length>0?text:'Enter something into textarea to preview'}</p>

            </div>
        </>
    )
}
