import React from 'react';
import './Navbar.css';
import '../../App.css';

function Navbar() {
  return (
    <nav id="mesa-navbar" class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div>
        <a href="https://www.instagram.com/mesacreativeyyc">
          <i class="fab fa-instagram"></i>
        </a>
        <a href="https://www.linkedin.com/in/eleni-christos-37980055/">
          <i class="fab fa-linkedin-in"></i>
        </a>
      </div>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link" href="#home">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#about">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#projects">Projects </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#services">Services</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
