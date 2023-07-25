import React ,{useState} from 'react'

export default function TextForm(props) 
{

    const handleUpClick = () => {
        // console.log("Uppercase was Clicked" + text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted To UpperCase","success");
    }
    const handleLoClick = () => {
        
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted To LowerCase","success");
    }

    const handleClearClick = () => {
        
        setText("");
        props.showAlert("Clear >> ","success");
    }


    const handleOnChange = (event) => {
        // console.log("On Changed");
        setText(event.target.value);
       
    }

    const handleCopy = () => {
        var text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied >>","success");
    }

    const handleExtraSpaces = () => {
        let newText= text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Space Removed","success");
    }

    const [text, setText] = useState("");
    
  return (
    <>
    <div className="container" style={{color : props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <label htmlFor="myBox" className="form-label"></label>
            <textarea className="form-control" value={text}  onChange={handleOnChange} style={{backgroundColor : props.mode==='dark'?'grey':'white',color : props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8" ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert To UpperCase</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert To LowerCase</button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        <button className="btn btn-secondary mx-1" onClick={handleClearClick}>Clear</button>
    </div>
    <div className="container my-3" style={{color : props.mode==='dark'?'white':'#042743'}}>
        <h2>Summary</h2>
        <p> <b>{text.split(" ").length} </b> Words and <b>{text.length}</b> Characters</p>
        <p> <b>Time to read :- </b> {0.008 * text.split(" ").length} Minutes</p>
        <h2> Preview </h2>
        <p>{text.length>0 ? text : 'Enter some text'}</p>
    </div>
    </>
  )
}
