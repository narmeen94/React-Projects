import React, { useState } from 'react'


function Textform(props) {
    const [text, setText] = useState("Enter your text here");
    

    const handleUpClick=()=>{
        //console.log( "Uppercase Request"+text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase!","success");
    }
    const handleLoClick=()=>{
        
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase!","success");
    }

    // Harry's challenge:

    const handleCapClick=()=>{

    function capitalize(input) {  
        var words = input.split(' ');  
        var CapitalizedWords = [];  
        words.forEach(element => {  
            CapitalizedWords.push(element[0].toUpperCase() + element.slice(1, element.length));  
        });  
        return CapitalizedWords.join(' ');  
    }  

    let newText=capitalize(text);
    setText(newText);
    props.showAlert("Converted to Sentence case!","success");

}

    const handleClearClick=()=>{
        
        let newText="";
        setText(newText);
    }


    const handleOnChange=(event)=>{
        //console.log( "On change");
        setText(event.target.value) //this will allow the value ={text} to change but it will only add the newly entered text 
                                    //to be added in the previous entered "you have cllicked on uppercase button"
    }
  return (
    <>
    <div id="upperDiv" className='container ' style={{color:props.mode==='dark'?'white':'black'}}>
        <h2 className='mb-4'>{props.heading} </h2>
        {/* mb-3 means margin bottom-3 i.e. space below text. */}
        <div className="container mb-5">
        {/* <label for="MyText" class="form-label">Example textarea</label> */}
        <textarea className="form-control" id="MyText"  style={{backgroundColor:props.mode==='dark'?'#092847':'white',color:props.mode==='dark'?'white':'black'}}value={text} onChange={handleOnChange} rows="8"></textarea>
        </div>
        {/* this below is written by writing "button.btn.btn.primary" and enter */}

        
        <button disabled={text.length===0} style={{color:"white",backgroundColor: props.color==="#eaa0a2"? "purple":"black"}} className="btn btn-dark mx-2" onClick={()=>{
            handleUpClick();
            }}  >Convert to Uppercase</button>
        <button disabled={text.length===0} style={{color:"white",backgroundColor: props.color==="#eaa0a2"? "purple":"black"}} className="btn btn-dark mx-2 my-1" onClick={handleLoClick} >Convert to Lowercase</button>
        <button disabled={text.length===0} style={{color:"white",backgroundColor: props.color==="#eaa0a2"? "purple":"black"}} className="btn btn-dark mx-2 my-1" onClick={handleCapClick} >Convert to Capital</button>
        <button disabled={text.length===0} style={{color:"white",backgroundColor: props.color==="#eaa0a2"? "purple":"black"}} className="btn btn-dark mx-2 my-1" onClick={handleClearClick} >Clear Text</button>
      
    </div>
    
    <div id="lowerDiv" className='container my-5' style={{color:props.mode==='dark'?'white':'black'}}>
        <h2>Your text summary:</h2>
        {/* filter sees if the word does not have any chars, it does not considers it as word./\s+/ makes sure we also count words in the next line  */}
        <p>word count: {text.split(/\s+/).filter((element)=>{return element.length!==0}).length}, number of characters: {text.length}</p>
        <p>{0.008*text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter your Text to preview here"}</p>
    </div>
    </>
  )
}

export default Textform
