import SearchBar from '../SearchBar/SearchBar';
import { Link } from 'react-router-dom';
import './Nav.css'

const Nav = ({ onSearch }) => {
    

    return (
        <div class='nav'>
        
        <SearchBar onSearch={onSearch}/>
        < Link to= '/about' class='botonabout'>ABOUT</Link>
        < Link to= '/home' class='botonhome'>HOME</Link>
        < Link to= '/favorites' class='botonhome'>FAVORITES</Link>
        
        
        </div>
       
    )
}

export default Nav;