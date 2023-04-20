import Card from "../Card/Card"
import { connect, useDispatch } from "react-redux"
import { filterCards, orderCards } from "../../redux/actions"
import { useState } from "react"


const Fav = ({ myFavorites }) => {
    const dispatch = useDispatch()

    const [aux, setAux] = useState(false)

    const handleOrder = (event) => {
        dispatch(orderCards(event.target.value))
        setAux(true)
       }

    const handleFilter = (event) => {
        dispatch(filterCards(event.target.value))
    }
       
    return(
        <div>
            <select onChange= {handleOrder}>
            <option value= 'A'>ASCENDENTE</option>
            <option value= 'D'>DESCENDENTE</option>
        </select>
        <select onChange = {handleFilter}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderless</option>
            <option value="unknow">unknow</option>
            <option value= 'allcharacters'>All Characters</option>
        </select>
        {
            myFavorites?.map(fav => {
                return(
                    <Card
                        key={fav.id}
                        id={fav.id}
                        name={fav.name}
                        status={fav.status}
                        species={fav.species}
                        gender={fav.gender}
                        image={fav.image}
                        origin={fav.origin.name}
                        onClose={fav.onClose}
                    />
                )
            })
        }
        
        </div>

    )
}

const mapStateToProps = (state) => {
    return{
        myFavorites: state.myFavorites
    }
}

export default connect(
    mapStateToProps,
    null
)(Fav)