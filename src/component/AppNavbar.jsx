import React, { useState } from 'react'
import { Navbar, Nav, Container, Button } from 'react-bootstrap'
import { NavLink, useNavigate } from 'react-router-dom'
import '../css/Navbar.css'

function AppNavbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const navigate = useNavigate()

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen)

  return (
    <Navbar expand='lg' className='custom-navbar'>
      <Container className='px-5'>
        <Navbar.Brand href='#' className='custom-logo'>
        Flis Technologies
        </Navbar.Brand>

        <button className='navbar-toggler' onClick={toggleSidebar}>
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
          <span className='close-btn' onClick={toggleSidebar}>
            &times;
          </span>
          <Nav className='custom-nav-links'>
            <Nav.Link id='home' as={NavLink} to='/' className='custom-nav-link'>
              Home
            </Nav.Link>
            <Nav.Link
              id='project'
              as={NavLink}
              to='/projects'
              className='custom-nav-link'
            >
              Projects
            </Nav.Link>
            <Nav.Link
              id='project'
              as={NavLink}
              to='/products'
              className='custom-nav-link'
            >
              Products
            </Nav.Link>
            <Nav.Link
              id='project'
              as={NavLink}
              to='/about-us'
              className='custom-nav-link'
            >
              About Us
            </Nav.Link>
          </Nav>
          <Button
            id='contact'
            className='custom-contact-btn'
            onClick={() => {
              navigate('/contact-us')
              toggleSidebar()
            }}
          >
            Contact Us
          </Button>
        </div>
      </Container>
    </Navbar>
  )
}

export default AppNavbar
