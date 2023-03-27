import React from 'react'
import './Mobheader.css'
import chinmaya2 from './chinmaya2.png'

const Mobheader = () => {
  return (
    <div className="mob-header">
        <div className="d-flex">
            <div className="navbar-brand">
            <a href="#/">
                <img src={chinmaya2} alt="chinmay2"/>
                </a>
            </div>
            <button className="toggler-menu">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
    </div>
  )
}

export default Mobheader