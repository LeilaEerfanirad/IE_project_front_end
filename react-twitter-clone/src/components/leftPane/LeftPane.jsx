import './leftPane.scss'
import { NavLink } from 'react-router-dom'
import { FaTwitter } from "react-icons/fa";
import { MdOutlineSearch } from "react-icons/md";
import { BiUser } from "react-icons/bi";
import { IoMdNotificationsOutline } from "react-icons/io";const LeftPane = () => {
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
               
            </div>
        </div>
    )
}

export default LeftPane