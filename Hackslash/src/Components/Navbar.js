import React from 'react'

import { HashLink as Link } from 'react-router-hash-link'

export default function Navbar() {
  return (
   <div>
    <nav class="navbar navbar-expand-lg custom_nav-container ">
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <div class="d-flex ml-auto flex-column flex-lg-row align-items-center">
              <ul class="navbar-nav  ">
                <li class="nav-item active">
                <Link smooth to='#/' className="nav-link">Home</Link>
                </li>
                <li class="nav-item">
                <Link smooth to='#about' className="nav-link">About</Link>
                </li>
                <li class="nav-item">
                <Link smooth to='#contact' className="nav-link">Contact</Link>
                </li>
                <li class="nav-item">
                <Link smooth to='#services' className="nav-link">Services</Link>
                </li>
                <li class="nav-item">
                <Link smooth to='#register' className="nav-link">Register</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
   </div>
  )
}
