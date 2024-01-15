import './leftPane.scss'
import { useNavigate } from 'react-router-dom';
import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom';
import { NavLink } from 'react-router-dom'
import { FaTwitter } from "react-icons/fa";
import { MdOutlineSearch } from "react-icons/md";
import { BiUser } from "react-icons/bi";
import { IoMdNotificationsOutline } from "react-icons/io";
const LeftPane = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        // Navigate to the login route
        navigate('/login');
    }
    const handleSignup = () => {
        // Navigate to the login route
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
                        profile
                    </NavLink>
                    <NavLink className='leftPane__container--leftNav' to='/explore'>
                        <MdOutlineSearch className='leftPane__container--icon'/>    
                        explore
                    </NavLink>
                    <NavLink className='leftPane__container--leftNav' to='/notification'>
                        <IoMdNotificationsOutline className='leftPane__container--icon'/>
                        notification
                    </NavLink>
                </nav>
                <footer>
                    
                    <button className='leftPane__container--button'>tweet</button>
                    
                </footer>
                <button onClick={handleLogin} className='leftPane__container--button'>login</button>
                <button onClick={handleSignup} className='leftPane__container--button'>sign up</button>
           
            </div>
        </div>
    )
}

export default LeftPane