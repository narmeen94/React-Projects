import React from "react";
//import {useState} from "react";


function About(props) {

    //writing some javascript for styling:
    // const [myStyle,setMyStyle] = useState(
    //     {backgroundColor : 'white',
    //     color : 'black'})

    let myStyle={

      color: props.mode==='dark'?'white':'#092847',
      backgroundColor:props.mode==='dark'?'#092847':'white'
    }
    let buttonStyle={

      color: props.mode==='dark'?'white':'black',
      backgroundColor:props.mode==='dark'?'black':'white'
    }
      
    

    // const toggleStyle=()=>{
    //     if (myStyle.color==="white"){
    //         setMyStyle({
    //             backgroundColor : "white",
    //             color : "black" })
    //         setBtnText("Enable Dark Mode")
    //     }
    //     else {setMyStyle({
    //             backgroundColor :"black" ,
    //             color : "white"

    //         })
    //         setBtnText("Enable Light Mode")

    //     }
            
        

        //const [btnText,setBtnText]=useState("Enable Dark Mode")
    

  return (
    //copying the accordian code from bootstrap:
    
    <div className="container" style= {myStyle}>
        <h1>About Us</h1>
        <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button style= {buttonStyle}
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Accordion Item #1
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
            style= {myStyle}
          >
            <div className="accordion-backgroundColor" style= {myStyle}>
              <strong>This is the first item's accordion backgroundColor.</strong> It is
              shown by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-backgroundColor</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item" style= {myStyle}>
          <h2 className="accordion-header">
            <button style= {buttonStyle}
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              
            >
              Accordion Item #2
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
            style= {myStyle}
          >
            <div className="accordion-backgroundColor" style= {myStyle}>
              <strong>This is the second item's accordion backgroundColor.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-backgroundColor</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item" style= {myStyle}>
          <h2 className="accordion-header">
            <button style= {buttonStyle}
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Accordion Item #3
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse" style= {myStyle}
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-backgroundColor" style= {myStyle}>
              <strong>This is the third item's accordion backgroundColor.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-backgroundColor</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
      </div>
      

  );
  }


export default About;
