import React from 'react'
import './Home.css'
import ranveerImage from '../Images/ranveer.jpeg';
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer';

function Home() {
  return (
    <div>
  <Navbar />
    <div className='home'>
        <img
        src={ranveerImage}
        alt="Ranveer Singh"
      />
         <h1>Welcome to beer biceps!</h1>
         <p>~RANVEER  AllAHBADIA</p>
      <ul className='list'>
        <li>ENGLISH</li>
        <li>HINDI</li>
      </ul>

      <section className='container'>
   
    <div className='card'>
    <div className='box'>
    <div className='title'>
    <h3>PODCAST</h3>
    </div>
    <iframe
          width="360"
          height="215"
          src="https://www.youtube.com/embed/210uLW5dh8w"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
    <iframe
          width="360"
          height="215"
          src="https://www.youtube.com/embed/210uLW5dh8w"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        </div>
    <div className='box'>
    <div className='title'>
    <h3>INTERVIEW</h3>
    </div>
    <iframe
          width="360"
          height="215"
          src="https://www.youtube.com/embed/210uLW5dh8w"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
    <iframe
          width="360"
          height="215"
          src="https://www.youtube.com/embed/210uLW5dh8w"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        </div>
    </div>

 </section>
 <Footer/>
    </div>

    </div>
  )
}

export default Home
