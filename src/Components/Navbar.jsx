import React from 'react';
import { useState } from "react";
import { Link } from 'react-router-dom';
import cart_logo from './Assets/cart_logo.png';
import './Navbar.css';

export default function Navbar () {
    const [menu, setMenu] = useState("home");
    
    return (
        <div className ='navbar'>
            <div className = 'navbar-logo'>
                <p>Art Gallery</p>
            </div>

            <ul className='nav-menu'>
                <li onClick ={()=>{setMenu("home")}}>
                   <Link to='/' className='link-style'>Home</Link>{menu === "home"? <hr/ > : <></>}
                </li>
                <li onClick={()=>{setMenu("paintings")}}><Link to='/paintings' className='link-style'>Paintings</Link>{menu==="paintings"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("sculptures")}}><Link to="sculptures" className='link-style'>Sculptures</Link>{menu==="sculptures"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("portraits")}}>
  <Link to='/portraits' className='link-style'>Portraits</Link>
  {menu==="portraits" ? <hr/> : <></>}
</li>

     
                <li onClick ={()=>{setMenu("aboutus")}}>
                    <Link to ='/aboutus'className='link-style'>About us</Link>{menu === "aboutus"? <hr/ > : <></>}
                </li>
                <li onClick ={()=>{setMenu("help")}}>
                  <Link to ='/help'className='link-style'>Help</Link>{menu === "help"? <hr/ > : <></>}
                </li>
            </ul>
            <div className = "nav-cart-logo">
               <Link to ='/login'> <button>Login</button></Link>
               <Link to='/cart'> <img src ={cart_logo} alt="cart_logo"></img></Link>
                <div className = "nav-cart-count">0</div>
            </div>
        </div>
    );
}
