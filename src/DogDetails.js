import { useParams } from "react-router-dom";

/** Renders details for the dog in url
 * 
 * props - dog (obj like {name: '', age: 10, src: '', facts: []})
 * 
 * state - None
 * 
 * App -> DogDetails
 */

function DogDetails({ dogs }) {

  const {name} = useParams();
  const dog = dogs.find( d => d.name === name );

  return (
    <div className="DogDetails">
      <h3 className="DogDetails-name">{dog.name}</h3>
      <p className="DogDetails-age">{dog.age}</p>
      <ul className="DogDetails-facts">
        {dog.facts.map( fact => <li>{fact}</li>)}
      </ul>
      <img src={dog.src} className="DogDetails-image" alt="dog" />
    </div>
  )

}

export default DogDetails;