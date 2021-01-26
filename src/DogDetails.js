import { useParams } from "react-router-dom";
import "./DogDetails.css";

/** Renders details for the dog in url
 * 
 * props - dogs (array like [{name: '', age: 10, src: '', facts: []},...])
 * 
 * state - None
 * 
 * App -> DogDetails
 */

function DogDetails({ dogs }) {
  console.log("DogDetail rendered");

  const {name} = useParams();
  const dog = dogs.find( d => d.name === name );

  return (
    <div className="DogDetails">
      <h3 className="DogDetails-name">{dog.name}</h3>
      <p className="DogDetails-age">{dog.age}</p>
      <ul className="DogDetails-facts">
        {dog.facts.map( fact => <li key={fact} >{fact}</li>)}
      </ul>
      <img src={dog.src} className="DogDetails-image" alt="dog" />
    </div>
  )

}

export default DogDetails;