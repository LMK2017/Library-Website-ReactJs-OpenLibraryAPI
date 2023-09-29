import React from 'react';
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About BookHub</h2>
            <p className='fs-17'>Welcome to BookHub, your digital library oasis! Discover and 
            access your favorite books online with ease. Our search engine lets you find any 
            book and shows you where it's available across the web. Whether classics or 
            bestsellers, embark on your literary journey right here. Explore, search, and 
            read—your next adventure begins at BookHub.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
