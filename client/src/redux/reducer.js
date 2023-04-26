import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actions-type";

const initialState = {
    myFavorites: [],
    allCharacters: [],
}

const reducer = (state = initialState, {type, payload}) =>{
    switch(type){
        case ADD_FAV:
            return {
                ...state,
                myFavorites: payload,
                allCharacters: payload
            }
        case REMOVE_FAV:
            return {
                ...state,
                myFavorites: payload,
                allCharacters: payload
            }
        case FILTER:
            const filterchar = state.allCharacters.filter(char => char.gender === payload)
            return{
                ...state,
                myFavorites :
                    payload === 'allcharacters'
                    ?[...state.allCharacters]
                    :filterchar
            }
        case ORDER: 
            const allCharactersFav = [...state.allCharacters]
                        return{
                        ...state,
                        myFavorites: 
                        payload === 'A'
                        ?allCharactersFav.sort((a, b) => a.id - b.id)
                        :allCharactersFav.sort((a, b) => b.id - a.id)
                    }

        default:
           return {...state}
    }
}


export default reducer