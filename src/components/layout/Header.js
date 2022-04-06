import React from 'react';
import { Link } from 'react-router-dom';
import logo from './todologo.png'

function Header() {
    return (
        <header style={headerStyle}>
            <img src={logo} style={logos} alt="logo" />
            <h1 style={appname}>ToDoList</h1>
            <div style={tabs}> 
            <Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle} to="/about">Help</Link>
            </div>
        </header>
    )
}

const headerStyle = {
    background: '#333',
    color: '#fff',
    // textAlign: 'center',
    padding: '10px',
    height: '50px',
    
}

const logos ={
    position: 'absolute',
    width: '35px',
    height: '35px',
    left: '9px',
    top: '10px',
    
}

const appname ={
    position:'absolute',
    // textAlign: 'left',
    left: '50px',
    fontSize: '25px',
}
const tabs = {
    textAlign: 'right', 
    padding:'5px'
}

const linkStyle = {
    color: '#fff',
    textDecoration: 'none',
    

}
export default Header;