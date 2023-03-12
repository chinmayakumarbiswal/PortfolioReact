import React from 'react'
import './Sidebar.css'

const Sidebar = () => {
  return (
    <header class="header-left" id="navbar-collapse-toggle">
        <div class="top">
            <a href="#/">C</a>
        </div>
        <ul class="nav nav-menu">
            <li>
                <a href="/" class="nav-link active" data-toggle="tooltip" title="HOME">
                    <i class="fa fa-user-o"></i>
                </a>
            </li>
            <li>
                <a href="#about" class="nav-link active" data-toggle="tooltip" title="ABOUT">
                    <i class="fa fa-address-book-o"></i>
                </a>
            </li>
            <li>
                <a href="https://www.canva.com/design/DAE9rw4s9zw/zJIjDsA6SRY8JRMsbpSNBQ/edit?utm_content=DAE9rw4s9zw&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" class="nav-link active" data-toggle="tooltip" title="RESUME">
                    <i class="fa fa-file-word-o"></i>
                </a>
            </li>
            <li>
                <a href="#skills" class="nav-link active" data-toggle="tooltip" title="Education">
                    <i class="fa fa-book"></i>
                </a>
            </li>
            <li>
                <a href="#messageme" class="nav-link active" data-toggle="tooltip" title="CONTACT">
                    <i class="fa fa-volume-control-phone"></i>
                </a>
            </li>
        </ul>

    </header>
  )
}

export default Sidebar