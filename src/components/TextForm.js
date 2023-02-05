import React from 'react';
import { useState } from 'react';

function TextForm(props) {
  const [text, setText] = useState("");
  function copyToClip(){
    props.data('Text Copied Succesfully')
    if(text.length>0){
    navigator.clipboard.writeText(text);
    alert("Text Copied Successfully")
    }
  }
  return (
    <>
      <div className={`container col-6 text-${(props.mode==='dark')?'light':'dark'}`}>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">Enter text here</label>
          <textarea className="form-control" onChange={() => {
            setText(document.getElementById("upper").value);
          }} value={text} id="upper" rows="8"></textarea>
        </div>
        <button type="button" className="btn btn-primary btn-sm mx-2 my-1" onClick={() => {
          props.data('Text changed to UpperCase')
          setText(text.toUpperCase());
        }}>UpperCase</button>
        <button type="button" className="btn btn-primary btn-sm mx-2 my-1" onClick={() => {
          props.data('Text Changed To LowerCase')
          setText(text.toLowerCase());
        }}>LowerCase</button>
        <button type="button" className="btn btn-primary btn-sm mx-2 my-1" onClick={copyToClip}>Copy To Clipboard</button>
        <div className='my-1'>
          <h3>Details</h3>
          <p>{text.length} characters and {(text.split(/\s+/)[text.split(/\s+/).length-1]==="")?text.split(/\s+/).length-1:text.split(/\s+/).length} words</p>
        </div>
      </div>
    </>
  )
}
export default TextForm;
