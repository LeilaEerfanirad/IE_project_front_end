import './leftPane.scss'
import { NavLink } from 'react-router-dom'
import { FaTwitter } from "react-icons/fa";
const LeftPane = () => {
    return (
        <div className='leftPane'>
            <div className="leftPane__container">
                <header>
                    <FaTwitter/>
                </header>
                <nav >
                    <NavLink className='leftPane__container--leftNav' to='/profile'>profile</NavLink>
                    <NavLink className='leftPane__container--leftNav' to='/explore'>explore</NavLink>
                    <NavLink className='leftPane__container--leftNav' to='/notification'>notification</NavLink>
                </nav>
                <footer>
                    <button className='leftPane__container--button'>tweet</button>
                </footer>
               
            </div>
        </div>
    )
}

export default LeftPane