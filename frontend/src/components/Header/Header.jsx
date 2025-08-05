import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import heroImage from '/361.jpg'; // ✅ Update to your image path

const Header = () => {
    return (
<<<<<<< HEAD
        <div className='header'>
            <div className='header-contents'>
                <h2>Fish Online Servies <strong> Alampur Mandal</strong></h2>
                {/* <p>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p> */}
                <Link to = "/menu" ><button className='view-button'>View Menu</button></Link>
            </div>
        </div>
    )
}
=======
        <header
            className="hero"
            style={{ backgroundImage: `url(${heroImage})` }}
        >
            {/* Overlay for dark effect */}
            <div className="hero__overlay"></div>
>>>>>>> 92660a4bd3bf4db442c375b2ca843960589fc51d

            {/* Content */}
            <div className="hero__content">
                <h1 className="animated-gradient-title">
                    Fresh Fish Delivery in{" "}
                    <span className="highlight-gradient">Alampur</span>
                </h1>
                <p>
                    Enjoy fresh, high-quality fish delivered straight to your door.  
                    Healthy, delicious, and just a click away.
                </p>
                <Link to="/menu">
                    <button className="hero__btn">View Menu</button>
                </Link>
            </div>
        </header>
    );
};

export default Header;
