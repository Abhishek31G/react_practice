/* eslint-disable react/prop-types */
// import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode==='light'?'light':props.mode==='dark'?'dark'
    :props.mode==='red'?'danger':props.mode==='yellow'?'warning':'dark'} 
    bg-${props.mode==='light'?'light':props.mode==='dark'?'dark'
    :props.mode==='red'?'danger':props.mode==='yellow'?'warning':'dark'}`}>
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">{props.title}</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">{props.about}</Link>
          </li>
          {/* <li className="nav-item">
            <a className="nav-link"><code>Contact Us</code></a>
          </li> */}
        </ul>
        <span onClick={props.changeTheme} style={{backgroundColor: props.mode==='red'?'yellow' : props.mode==='dark'?'red':'red', color: props.mode==='yellow'?'white':'black' }} 
        className={`badge rounded-pill text-bg mx-3 ${props.mode==='light'?'red':'light'}`}>{props.mode==='yellow'?"Enable Red Mode" : props.mode==='light'?"Enable Red Mode": props.mode==='dark'?"Enable Red Mode":"Enable Yellow Mode"}</span>
        {/* <span  onClick={props.changeTheme} className={`badge rounded-pill text-bg-warning mx-3 ${props.mode==='light'?'dark':'light'}`}>Enable Yellow Mode</span> */}
        <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'} mx-3`}>
          <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
          <label className="form-check-label" style={{color: props.mode==='yellow'?'black':props.mode==='red'?'white':props.mode==='dark'?'white':props.mode==='light'?'black':'white'}} 
          htmlFor="flexSwitchCheckDefault">{props.mode==='dark'?"Enable Light Mode":"Enable Dark Mode"}</label>
        </div>
      </div>
    </div>
  </nav>
  )
}

Navbar.propTypes = {
  title : PropTypes.string.isRequired,
  about : PropTypes.string
}

// Navbar.defaultProps = {
//   title :"Your title here",
//   about : "Your about text here"
// }
