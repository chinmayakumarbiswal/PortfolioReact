import React from 'react'
import './Mobheader.css'
import chinmaya2 from './chinmaya2.png'

const Mobheader = () => {
  return (
    <div class="mob-header">
        <div class="d-flex">
            <div class="navbar-brand">
            <a href="#/">
                <img src={chinmaya2} alt="chinmay2"/>
                </a>
            </div>
            <button class="toggler-menu">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
    </div>
  )
}

export default Mobheader