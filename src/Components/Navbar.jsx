/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './Navbar.css'
function Navbar() {
  return (
    <div class="container">
    <nav>
        <div class="brand">
            <a href="#"><h2>The Ranveer Show </h2></a>
        </div>
        <ul>
            <li><a href="#" text ="Home" >Home</a></li>
            <li><a href="#" text ="Videos" >Videos</a></li>
            <li><a href="#" text ="Premium" >Premium</a></li>
            <li><a href="#" text ="About Us" >About Us</a></li>
            <li><a href="#" text ="SignIn" >SignIn <i class="fa-regular fa-user"></i></a></li>
        </ul>
    </nav>
</div>
  )
}

export default Navbar
