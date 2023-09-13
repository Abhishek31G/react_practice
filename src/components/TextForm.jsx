/* eslint-disable react/prop-types */
import {useState} from 'react';



export default function TextForm(props) {
  const [text,setText] = useState('');
//   const handleUpClick = ()=>{
//     // console.log("Button was clicked handleUpClick was called");
//     let newText = text;
//     setText(newText.toUpperCase())
//   }
const handleUpperCase = ()=>{
    // console.log("Button was clicked handleUpClick was called");
    let newText = text;
    setText(newText.toUpperCase())
    props.showAlert("Converted to Upper Case!", "success");
  }

const handleLowerCase = ()=>{
// console.log("Button was clicked handleUpClick was called");
let newText = text;
setText(newText.toLowerCase())
props.showAlert("Converted to Lower Case!", "success");
}

function toTitleCase(obj){
    const titleCase = obj
    .toLowerCase()
    .split(' ')
    .map((word)=>{
        return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');
    return titleCase
}
const handleTitleCase = ()=>{
    // console.log("Button was clicked handleUpClick was called");
    let newText = text;
    setText(toTitleCase(newText));
    props.showAlert("Converted to Title Case!", "success");
}

const handleClearText = ()=>{
  setText("");
  props.showAlert("Text is cleared!", "success");
}

const handleCopyClipBoard = ()=>{
  navigator.clipboard.writeText(text);
  props.showAlert("Copied to clipboard!", "success");
  
}

const handleExtraSpaces = ()=>{
  let newText = text.split(/[ ]+/);
  setText(newText.join(" "));
  props.showAlert("Extra Spaces removed!", "success");
} 

const handleOnChange = (event)=>{
  // console.log("onChange");
  setText(event.target.value)
}
  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} placeholder='Enter your text here'  id="myBox"
        onChange={handleOnChange} style={{backgroundColor: props.mode==='dark' ? 'lightgrey':'#C9DFEC'
        
         }} rows="7"></textarea>
      </div>
      {/* <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button> */}
      {/* You can also use &nbsp;&nbsp; to have a space n=between your buttons*/}
      {/* Here we have used mx-2 to have space between two buttons on x-axis */}

          <button className={`btn btn-${props.mode==='yellow'?'info': props.mode==='red' ? 'warning':'primary'} mx-2`} onClick={handleUpperCase}>Convert to Uppercase</button>
          <button className={`btn btn-${props.mode==='yellow'?'info': props.mode==='red' ? 'warning':'primary'} mx-2`} onClick={handleLowerCase} >Convert to LowerCase</button>
          <button className={`btn btn-${props.mode==='yellow'?'info': props.mode==='red' ? 'warning':'primary'} mx-2`} onClick={handleTitleCase}>Convert to TitleCase</button>
          <button className={`btn btn-${props.mode==='yellow'?'info': props.mode==='red' ? 'warning':'primary'} mx-2`} onClick={handleCopyClipBoard}>Copy to Clipboard</button>
          <button className={`btn btn-${props.mode==='yellow'?'info': props.mode==='red' ? 'warning':'primary'} mx-2`} onClick={handleExtraSpaces}>Remove Extra Spaces</button>
          <button className={`btn btn-${props.mode==='yellow'?'info': props.mode==='red' ? 'warning':'primary'} mx-2`} onClick={handleClearText}>Clear</button>

    </div>

    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
        <h2>Summary of your text</h2>
        <p><em>{text.length!==0 ? text.trim().split(' ').length : 0} words and {text.length} characters.</em></p>
        <strong><em>{(text.length!==0 ? text.trim().split(' ').length : 0)* 0.0033} minutes read.</em></strong>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
      </div>
    </>
  )
}
