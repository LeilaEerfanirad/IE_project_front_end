import './leftPane.scss'
import { useNavigate } from 'react-router-dom';
import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom';
import { NavLink } from 'react-router-dom'
import { FaTwitter } from "react-icons/fa";
import { MdOutlineSearch } from "react-icons/md";
import { BiUser } from "react-icons/bi";
import { GoHome } from "react-icons/go";
import { IoMdNotificationsOutline } from "react-icons/io";
const LeftPane = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/login');
        
    }
    const handleLogout = () => {
        const confirm = window.confirm('Are you sure you want to log out?');
        // console.log(confirm);
        if(confirm){
            localStorage.setItem('isLogedin', false);
        }

    }
    const handleSignup = () => {
        navigate('/signup');
    }
    
    return (
        <div className='leftPane'>
            <div className="leftPane__container">
                <header>
                    <FaTwitter/>
                </header>
                <nav >
                    <NavLink className='leftPane__container--leftNav' to='/profile'>
                        <BiUser className='leftPane__container--icon'/>
                         Profile
                    </NavLink>
                    <NavLink className='leftPane__container--leftNav' to='/home'>
                        <GoHome className='leftPane__container--icon'/>
                        Home
                    </NavLink>
                    <NavLink className='leftPane__container--leftNav' to='/explore'>
                        <MdOutlineSearch className='leftPane__container--icon'/>    
                        Explore
                    </NavLink>
                    <NavLink className='leftPane__container--leftNav' to='/notification'>
                        <IoMdNotificationsOutline className='leftPane__container--icon'/>
                        Notification
                    </NavLink>
                </nav>
                <footer>  
                    <button className='leftPane__container--button'>Tweet</button>
                </footer>
                <button onClick={handleLogin} className='leftPane__container--button'>Login</button>
                <button onClick={handleSignup} className='leftPane__container--button'>Sign Up</button>
                <button onClick={handleLogout} className='leftPane__container--button'>Log Out</button>
           
            </div>
        </div>
    )
}

export default LeftPane