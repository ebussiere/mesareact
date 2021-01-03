//import React from 'react';
import './MesaNav.css';
import '../../App.css';
import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

const MesaNav = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar id="mesa-navbar" className="fixed-top" expand="md">
      <div>
        <a href="https://www.instagram.com/mesacreativeyyc">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://www.linkedin.com/in/eleni-christos-37980055/">
          <i className="fab fa-linkedin-in"></i>
        </a>
      </div>
      <NavbarToggler onClick={toggle}>
        <i className="fab fa-linkedin-in"></i>
      </NavbarToggler>
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink href="#home">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#about">About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#projects">Projects</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#services">Services</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#contact">Contact</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>

    // <nav id="mesa-navbar" class="navbar navbar-expand-lg navbar-dark fixed-top">
    //   <div>
    //     <a href="https://www.instagram.com/mesacreativeyyc">
    //       <i class="fab fa-instagram"></i>
    //     </a>
    //     <a href="https://www.linkedin.com/in/eleni-christos-37980055/">
    //       <i class="fab fa-linkedin-in"></i>
    //     </a>
    //   </div>
    //   <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    //     <span class="navbar-toggler-icon"></span>
    //   </button>
    //   <div class="collapse navbar-collapse" id="navbarSupportedContent">
    //     <ul class="navbar-nav mr-auto">
    //       <li class="nav-item">
    //         <a class="nav-link" href="#home">Home</a>
    //       </li>
    //       <li class="nav-item">
    //         <a class="nav-link" href="#about">About</a>
    //       </li>
    //       <li class="nav-item">
    //         <a class="nav-link" href="#projects">Projects </a>
    //       </li>
    //       <li class="nav-item">
    //         <a class="nav-link" href="#services">Services</a>
    //       </li>
    //       <li class="nav-item">
    //         <a class="nav-link" href="#contact">Contact</a>
    //       </li>
    //     </ul>
    //   </div>
    // </nav>
  );
};

export default MesaNav;
