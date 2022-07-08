import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
const Nav = () => {
    const auth = localStorage.getItem("users");
    const navigate = useNavigate();
    const logout = () => {
        localStorage.clear();
        navigate('/signup');
    }
    return (
        <div>
            <img 
            alt = 'logo'
            src = 'https://w7.pngwing.com/pngs/644/743/png-transparent-a-o-t-wings-of-freedom-eren-yeager-bertholdt-hoover-attack-on-titan-logo-others-angle-emblem-rectangle.png' 
            className='logo'/>
            {auth ?
                <ul className="nav-ul">
                    <li><Link to="/">Products</Link></li>
                    <li><Link to="/add">Add product</Link></li>
                    <li><Link to="/update">Update Product</Link></li>
                    {/* <li><Link to ="/logout">Logout</Link></li> */}
                    <li><Link to="/profile">Profile</Link></li>
                    <li><Link onClick={logout} to ="/signup">Logout - {JSON.parse(auth).name}</Link></li>
                    {/* <li>{!auth? <Link to ="/signup">Sign-Up</Link> : <Link onClick={logout} to ="/signup">Logout</Link>}</li>
                <li><Link to ="/Login">Login</Link></li> */}
                    {/* {
                    auth ? <li><Link onClick={logout} to ="/signup">Logout</Link></li>
                    :
                    <>
                    
                    </>
                } */}
                </ul>
                :
                <ul className='nav-ul nav-right'>
                    <button className='button-38'><li><Link to="/signup">Sign Up</Link></li></button>
                    <button className='button-38'><li><Link to="/Login">Login</Link></li></button>
                </ul>
            }
        </div>
    )
}

export default Nav;