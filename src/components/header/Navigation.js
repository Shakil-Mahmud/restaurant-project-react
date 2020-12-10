import React, {Component} from 'react'
import {Navbar, NavbarBrand, Nav, NavItem, NavbarToggler, Collapse} from 'reactstrap'
import {Link} from 'react-router-dom'

class Navigation extends Component{

    constructor(props){
        super(props);
        this.state = {
            isNavOpen : false
        }
    }

    navToogle = () => this.setState({ isNavOpen: !this.state.isNavOpen }) 

    render(){
        return(
            <Navbar dark color='dark' expand='sm'>
                <div className = 'container'>
                    <NavbarToggler onClick={this.navToogle} />
                    <NavbarBrand href='/'>DHAKAIYA RESTAURANT</NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav className='mr-auto' navbar>
                                <NavItem>
                                    <Link to='/home' className='nav-link active' >Home</Link>
                                </NavItem>
                                <NavItem>
                                    <Link to='/menu' className='nav-link active' >Menu</Link>
                                </NavItem>
                                <NavItem>
                                    <Link to='/about' className='nav-link active' >About</Link>
                                </NavItem>
                                <NavItem>
                                    <Link to='/contact' className='nav-link active' >Contact</Link>
                                </NavItem>
                            </Nav>
                        </Collapse>
                </div>
            </Navbar>
        )
    }
}

export default Navigation;
