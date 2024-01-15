import './leftPane.scss'
import { NavLink } from 'react-router-dom'
const LeftPane = () => {
    return (
        <div className='left-pane'>
            <div className="container">
                <header>Twitter</header>
                <nav>
                    <NavLink to='/explore'>explore</NavLink>
                    <NavLink to='/notification'>notification</NavLink>
                    <NavLink to='/profile'>profile</NavLink>
                    <NavLink to='/explore'>explore</NavLink>
                </nav>
                <footer>
                    <button className='twitt'>tweet</button>
                </footer>
               
            </div>
        </div>
    )
}

export default LeftPane