import SearchBar from './SearchBar';
import { NavLink } from 'react-router-dom';

const Nav = ({ onSearch }) => {

    return (
        <div>
        <nav>
        <SearchBar onSearch={onSearch}/>
        
        <NavLink to= '/about' className={({ isActive }) => (isActive ? 'active' : undefined)}>
        ABOUT
        </NavLink>
        </nav>
        <NavLink to= '/home'  className={({ isActive }) => (isActive ? 'active' : undefined)}>
        HOME
        </NavLink>
        
        
        </div>
       
    )
}

export default Nav;