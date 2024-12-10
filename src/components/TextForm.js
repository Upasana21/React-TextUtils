import React, { useState } from "react";

export default function TextForm(props) {
  const onUppercaseClicked = () => {
    setText(text.toUpperCase())
    props.showAlert("converted to uppercase","success")
  };
  const onlowercaseClicked = () => {
    setText(text.toLowerCase());
    props.showAlert("converted to lowercase","success")
  };
  const clearText = () => {
    setText('')
    props.showAlert("text cleared","success")
};
 const onCopyClick =() =>{
  let text = document.getElementById('myBox');
  text.select();
  navigator.clipboard.writeText(text.value);
  props.showAlert("copied to clipboard","success")

 }
  const handleOnChange = (e) => {
    setText(e.target.value)
  };
  const [text, setText] = useState(""); //hook

  return (
    <>
    <div className={`container text-${props.mode==='light'?'dark':'light'}`}>
      <h2>{props.heading}</h2>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="myBox"
          rows="8"
          style={{backgroundColor:props.mode==='dark'?'black':'white',color:props.mode==='dark'?'white':'black'}}
        ></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={onUppercaseClicked}>Convert to UpperCase</button>
      <button className="btn btn-primary mx-1" onClick={onlowercaseClicked}>Convert to LowerCase</button>
      <button className="btn btn-primary mx-1" onClick={clearText}>Clear Text</button>
      <button className="btn btn-primary mx-1" onClick={onCopyClick}>Copy Text</button>
    </div>
    <div className={`container my-3 text-${props.mode==='light'?'dark':'light'}`}>
        <h3>Your Text Summary</h3>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} minutes to read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:'Enter text on textbox to preview it here'}</p>
    </div>
    </>
  );
}
