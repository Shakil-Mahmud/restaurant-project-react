import React from 'react'
import {Navbar, NavbarBrand} from 'reactstrap'


const Navigation = () =>{
    return(
        <Navbar color='dark'>
            <div className = 'container'>
                <NavbarBrand href='/'>DHAKAIYA RESTAURANT</NavbarBrand>
            </div>
        </Navbar>
    )
}

export default Navigation;
