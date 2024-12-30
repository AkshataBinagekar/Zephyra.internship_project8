import React from 'react'
import './Footer.css'
function Footer() {
  return (
    <footer>
    <div class="footerContainer">
        <div class="socialIcons">
            <a href="#home"><i class="fa-brands fa-facebook"></i></a>
            <a href="#home"><i class="fa-brands fa-instagram"></i></a>
            <a href="#home"><i class="fa-brands fa-twitter"></i></a>
            <a href="#home"><i class="fa-brands fa-google-plus"></i></a>
            <a href="#home"><i class="fa-brands fa-youtube"></i></a>
        </div>
        <div class="footerNav">
            <ul><li><a href="#home">Home</a></li>
                <li><a href="#home">News</a></li>
                <li><a href="#home">About</a></li>
                <li><a href="#home">Contact Us</a></li>
                <li><a href="#home">our Team</a></li>
            </ul>
        </div>
        
    </div>
    <div class="footerBottom">
        <p>Copyright &copy;2023</p>
    </div>
</footer>
  )
}

export default Footer
