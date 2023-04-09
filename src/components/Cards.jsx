import Card from './Card';

const Cards = ({ characters, onClose }) => {
   return (
      <div>
         {
            characters.map((props) => {
               return(
                  <Card
                     key={props.id}
                     id={props.id}
                     name={props.name}
                     status={props.status}
                     species={props.species}
                     gender={props.gender}
                     image={props.image}
                     origin={props.origin.name}
                     onClose={onClose}
                  />
               )
            })
         }
      </div>
   )
}

export default Cards
