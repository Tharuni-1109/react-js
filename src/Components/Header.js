import React from 'react';
import '../styles/Header.css'
const Header = () => {
    return (
            <nav class="navbar">
                    <div class="navbar-header">
                        <a class="navbar-brand" href="#">Logo image</a>
                        <a class="navbar-brand" href="#">E-commerce Website Name</a>
                        <a class="navbar-brand" href="#">About Us</a>
                        <a class="navbar-brand" href="#">Contact Us</a>
                        <a class="navbar-brand" href="#">Feedback</a>

                        <input className='searchbar' type="text" id="searchInput" placeholder="Search Here..."></input>

                        <a class="navbar-brand" href="#">
                            Profile
                            <i class="fas fa-user"></i>
                        </a>

                        <a class="navbar-brand" href="#">Orders</a>

                        <a class="navbar-brand" href="#">
                            <i class="fas fa-shopping-cart"></i>
                        </a>
                    </div>
                </nav>
    );
};

export default Header;