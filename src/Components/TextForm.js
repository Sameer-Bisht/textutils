import React from 'react'
import {useState} from 'react' 






export default function TextForm(props) {
  // const noOfWords = ()=>{
  //   if(text.split(" ").length - 1 === " " ){

  //      text.split(" ").length - 1 ; 
  //   }
  //   else{
  //     console.log("else")
  //     return text.split(" ").length
  //   }
  // }
  const handleOnChange = (event)=>{
    setText(event.target.value)
  }
  const handleUpClick = ()=>{
    setText(text.toUpperCase());
  }
  const handleCopyClick = ()=>{
    navigator.clipboard.writeText(text);
    props.showAlert("copied to clipboard", "success")

  }
  const handleClearClick = ()=>{
    setText(" ");
  }
  const handleLoClick = ()=>{
    setText(text.toLowerCase());
  }
  const [text, setText]  = useState("Enter Text Here");

  return (
    <> 
    
  <div style={{color : props.mode === "light"?"#212329" : "white",}} className="mb-3">
    <h1 >{props.heading} </h1>
    <label htmlFor="exampleFormControlTextarea1" className="form-label"></label>
    <textarea className="form-control" id="exampleFormControlTextarea1" style={{backgroundColor : props.mode === "light"?"white" : "grey",color: props.mode === "light"?"black" : "white"
  }} onChange={handleOnChange} value={text} rows="10" ></textarea>
    <button className="btn btn-primary my-3 mx-1 " onClick={handleUpClick}>Convert to UpperCase</button>
    <button className="btn btn-primary my-3 mx-1" onClick={handleLoClick}>Convert to LowerCase</button>
    <button className="btn btn-primary my-3 mx-1" onClick={handleClearClick}>Clear Text</button>
    <button className="btn btn-primary my-3 mx-1" onClick={handleCopyClick}>Copy to Clipboard</button>
  </div>
  <div className="container my-3 " style={{color : props.mode === "light"?"#212329" : "white",}}>
    <h1>Your Text Analysis </h1>
    <p> Words and {text.length } Characters   </p>
    <p>{text.split(" ").length*0.008} Minutes Read    </p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter something to preview it here"}</p>
  </div>
    </>
  )
}
