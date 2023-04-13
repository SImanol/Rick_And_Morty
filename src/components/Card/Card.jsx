import { Link } from "react-router-dom";
import './Card.css'
import { addFav, removeFav } from "../../redux/actions";
import { connect } from "react-redux";
import { useState, useEffect } from "react";

const Card = ({ id, name, status, species, gender, origin, image, onClose, addFav, removeFav, myFavorites }) => {

   const [isFav, setIsFav] = useState(false)

const handleFavorite = () => {
   if(isFav){
      setIsFav(false);
      removeFav(id)
   }
   else{
      setIsFav(true);
      addFav({id, name, status, species, gender, origin, image, onClose})
   }
}
useEffect(() => {
   myFavorites.forEach((fav) => {
      if (fav.id === id) {
         setIsFav(true);
      }
   });
}, [myFavorites]);

   return (

      <body class='body'>
      <div class = 'all'>
         
        
            
         <button class ='click' onClick={() => onClose(id) }>X</button>
         <div class = 'text'>
         <img src={image} alt='' class='img'/>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <h2>{status}</h2>
         <h2>{origin}</h2>
         </div>
         <Link to={`/detail/${id}`} class = 'link'>
         <h2>{name}</h2>
         </Link>
         <button onClick={handleFavorite}>{isFav? '❤️' : '🤍'}</button>
      </div>
      </body>
   );
}

const mapStateToProps = (state) => {
   return{
      myFavorites: state.myFavorites
   }
}

const mapDispatchToProps = (dispatch) => {
return {
   addFav: (character) => {dispatch(addFav(character))},
   removeFav: (id) => {dispatch(removeFav(id))}
}
}

export default connect(
   mapStateToProps,
    mapDispatchToProps
    )(Card)