/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
// import {useState} from "react";

export default function About(props) {
  // const [myStyle, setMyStyle] = useState({
  //   // color: "black",
  //   color: props.mode==='light'?'light':'dark',
  //   backgroundColor: "white"
  // })

  // const [changeMode, setChangeMode] = useState({
  //   color: props.mode==='light'?'light':'dark'
  // })

  // const [btnText, setBtnText] = useState('Enable Dark Mode');

  // const toggleStyle = ()=>{
  //   if(myStyle.color === "black"){
  //       setMyStyle({
  //       color: "white",
  //       backgroundColor: "black",
  //       border: "1px solid white"})
  //       setBtnText('Enable Light Mode')
  //   }else{
  //       setMyStyle({
  //           color: "black",
  //           backgroundColor: "white"
  //       })
  //       setBtnText('Enable Dark Mode')
  //   }

  // }

  return (
    <>
      <div className="container my-3" 
      style={{backgroundColor: props.mode==='dark'?"#72A0C1": props.mode==='yellow'?"#ffcc00": 
      props.mode==='red'?"#d74338": props.mode==='light'?"#F8F8F8":"white"}}>
        <h1>About Us</h1>
        <div className="accordion" id="accordionExample">
          <div className="accordion-itcode">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                style={{backgroundColor: props.mode==='dark'?"#72A0C1": props.mode==='yellow'?"#ffcc00": 
                props.mode==='red'?"#d74338": props.mode==='light'?"#F8F8F8":"white"}}
              >
                What we do!
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={{backgroundColor: props.mode==='dark'?"#ADD8E6": props.mode==='yellow'?"#FFFF8F": 
      props.mode==='red'?"#FBCEB1": props.mode==='light'?"white":"white"}}>
                <strong><code>TextUtils is a utility which can be used to manipulate 
                your text in the way you want.</code></strong>
              </div>
            </div>
          </div>
          <div className="accordion-itcode">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
                style={{backgroundColor: props.mode==='dark'?"#72A0C1": props.mode==='yellow'?"#ffcc00": 
                props.mode==='red'?"#d74338": props.mode==='light'?"#F8F8F8":"white"}}
              >
                Features we provide
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={{backgroundColor: props.mode==='dark'?"#ADD8E6": props.mode==='yellow'?"#FFFF8F": 
      props.mode==='red'?"#FBCEB1": props.mode==='light'?"white":"white"}}>
                <strong><code>You can convert your texts to following cases and much more: </code></strong>
                <ul>
                  <li><code>Upper Case</code></li>
                  <li><code>Lower Case</code></li>
                  <li><code>Title Case</code></li>
                  <li><code>Copy text to clipboard.</code></li>
                  <li><code>Rcodeove extra spaces</code></li>
                </ul> 

              </div>
            </div>
          </div>
          <div className="accordion-itcode">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
                style={{backgroundColor: props.mode==='dark'?"#72A0C1": props.mode==='yellow'?"#ffcc00": 
                props.mode==='red'?"#d74338": props.mode==='light'?"#F8F8F8":"white"}}
              >
                Contact Author
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={{backgroundColor: props.mode==='dark'?"#72A0C1": props.mode==='yellow'?"#ffcc00": 
      props.mode==='red'?"#d74338": props.mode==='light'?"#F8F8F8":"white"}}>
                <ul style={{backgroundColor: props.mode==='dark'?"#ADD8E6": props.mode==='yellow'?"#FFFF8F": 
                          props.mode==='red'?"#FBCEB1": props.mode==='light'?"white":"white"}}>
                  <li><strong>Name: </strong><code>Abhishek Gandhewar</code>&nbsp;</li>
                  <li><strong>E-mail: </strong><code>abhishekgandhewar@gmail.com</code>&nbsp;</li>
                  <li><strong>Contact no: </strong><code>+91-7775886269</code>&nbsp;</li>
                </ul> 
              </div>
            </div>
          </div>
        </div>
        {/* <div className="container my-3">
            <button onClick={toggleStyle} type="button" className="btn btn-primary">{btnText}</button>
        </div> */}
      </div>
    </>
  );
}
