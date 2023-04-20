import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Form from './components/Form/Form';
import axios from 'axios';
import Fav from './components/FAV/Fav';
import Detail from './components/Detail/Detail';
import { useState, useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate} from 'react-router-dom';


function App() {
   const [characters, setCharacters] = useState([]);
   const location = useLocation()

   const navigate = useNavigate()
   const [access, setAccess] = useState(false);
   useEffect(() => {
      !access && navigate('/');
   },[access]);
const EMAIL = 'imasuarez@gmail.com';
const PASSWORD = 'ima123';

const login = (userData) => {
   if(userData.password === PASSWORD && userData.email === EMAIL){
      setAccess(true);
      navigate('/home')
   }
}

   


   const onSearch = (id) => {
      axios(`http://localhost:3001/rickandmorty/character/${id}`)
      .then(response => response.data)
      .then((data) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

   const onClose = (id) => {
      const charactersFiltered = characters.filter(character => character.id !== (id))
      setCharacters(charactersFiltered)
   }

   return (
      <div className='App'>
   
      {location.pathname !== '/' && <Nav onSearch={onSearch} />}
      <Routes>
      <Route path= '/' element= {<Form login={login}/>}/>
      <Route path= '/home' element= {<Cards characters={characters} onClose={onClose}/>}/>
      <Route path= '/about' element= {<About/>}/>
      <Route path= '/detail/:id' element={<Detail/>}/>
      <Route path= '/favorites' element={<Fav/>}/>
     </Routes>
   
      </div>
   );
}

export default App;
