import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div style={{ height: '250px', marginTop: '100px' }} className="mt-5 w-full bg-violet-600 text-white p-4">
      <div className="flex justify-between p-4">
        {/* Intro Section */}
        <div style={{ width: '400px' }} className="intro">
          <h5 className="text-xl font-bold">
            <i className="fa-solid fa-truck-fast me-2"></i> E Cart
          </h5>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio eos praesentium accusamus culpa eius est quaerat quidem voluptatibus .</p>
          <p>Code licensed by Leena Sherin, docs CC BY 3.0.</p>
          <p>Currently v5.3.2.</p>
        </div>

        {/* Links Section */}
        <div className="flex flex-col">
          <h5 className="text-xl font-bold">Links</h5>
          <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>Landing Page</Link>
          <Link to="/home" style={{ textDecoration: 'none', color: 'white' }}>Home Page</Link>
          <Link to="/history" style={{ textDecoration: 'none', color: 'white' }}>Watch History Page</Link>
        </div>

        {/* Guides Section */}
        <div className="flex flex-col">
          <h5 className="text-xl font-bold">Guides</h5>
          <a href="https://react.dev/" style={{ textDecoration: 'none', color: 'white' }} target="_blank" rel="noopener noreferrer">React</a>
          <a href="https://react-bootstrap.netlify.app/" style={{ textDecoration: 'none', color: 'white' }} target="_blank" rel="noopener noreferrer">React Bootstrap</a>
          <a href="https://www.npmjs.com/package/react-router-dom" style={{ textDecoration: 'none', color: 'white' }} target="_blank" rel="noopener noreferrer">React Router</a>
        </div>

        {/* Contact Us Section */}
        <div className="flex flex-col">
          <h5 className="text-xl font-bold">Contact Us</h5>
          <div className="flex">
            <input type="text" placeholder="Enter your email here" className="rounded p-1" />
            <button className="btn btn-info ms-2">
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
          <div className="icons flex justify-between mt-3">
            <a href="https://twitter.com/" style={{ textDecoration: 'none', color: 'white' }} target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="https://www.instagram.com/" style={{ textDecoration: 'none', color: 'white' }} target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://www.facebook.com/" style={{ textDecoration: 'none', color: 'white' }} target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="https://www.linkedin.com/" style={{ textDecoration: 'none', color: 'white' }} target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://github.com/" style={{ textDecoration: 'none', color: 'white' }} target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="tel:+123456789" style={{ textDecoration: 'none', color: 'white' }} target="_blank" rel="noopener noreferrer">
              <i className="fa-solid fa-phone"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="text-center mt-4">
        <p>Copyright © January 2025, E Cart. Built with React Redux.</p>
      </div>
    </div>
  );
};

export default Footer;
