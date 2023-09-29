import React from 'react';
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className='holder'>
        <header className='header'>
            <Navbar />
            <div className='header-content flex flex-c text-center text-white'>
                <h2 className='header-title text-capitalize'>find your book of choice.</h2><br />
                <p className='header-text fs-18 fw-3'>Welcome to BookHub, your digital library 
                oasis! Discover and access your favorite books online with ease. Our search 
                engine lets you find any book and shows you where it's available across the 
                web. Whether classics or bestsellers, embark on your literary journey right 
                here. Explore, search, and read—your next adventure begins at BookHub.</p>
                <SearchForm />
            </div>
        </header>
    </div>
  )
}

export default Header