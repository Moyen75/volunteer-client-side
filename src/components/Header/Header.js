import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'
import logo from '../../logos/Group 1329.png'

const Header = () => {
    return (
        <div className='main-header'>
            <Navbar expand={true}>
                <Container>
                    <Navbar.Brand href="/home" className="ms-0"> <img src={logo} className="w-25 justify-content-start" alt="" /> </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end me-5">
                        <Navbar.Text className=' header-link'>
                            <Link to="/home">Home</Link>
                            <Link to="/donation">Donation</Link>
                            <Link to="/events">Events</Link>
                            <Link to="/blogs">Blogs</Link>
                            <Link to='/register'><button className='btn btn-primary'>Register</button></Link>
                            <Link to='/admin'><button className='btn btn-dark'>Admin</button></Link>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;