import React from 'react'
import './Sidebar.css'

const Sidebar = () => {
  return (
    <header className="header-left" id="navbar-collapse-toggle">
        <div className="top">
            <a href="#/">C</a>
        </div>
        <ul className="nav nav-menu">
            <li>
                <a href="/" className="nav-link active" data-toggle="tooltip" title="HOME">
                    <i className="fa fa-user-o"></i>
                </a>
            </li>
            <li>
                <a href="#about" className="nav-link active" data-toggle="tooltip" title="ABOUT">
                    <i className="fa fa-address-book-o"></i>
                </a>
            </li>
            <li>
                <a href="https://www.canva.com/design/DAE9rw4s9zw/zJIjDsA6SRY8JRMsbpSNBQ/edit?utm_content=DAE9rw4s9zw&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" className="nav-link active" data-toggle="tooltip" title="RESUME">
                    <i className="fa fa-file-word-o"></i>
                </a>
            </li>
            <li>
                <a href="#skills" className="nav-link active" data-toggle="tooltip" title="Education">
                    <i className="fa fa-book"></i>
                </a>
            </li>
            <li>
                <a href="#messageme" className="nav-link active" data-toggle="tooltip" title="CONTACT">
                    <i className="fa fa-volume-control-phone"></i>
                </a>
            </li>
        </ul>

    </header>
  )
}

export default Sidebar