import {Link} from "react-router-dom";

/** Renders dogs with their images and names
 * 
 * props - dogs (array like ([{name: '', age: 10, src: '', facts: []}, ...]))
 * 
 * state - None
 * 
 * App -> DogList
 */

function DogList({dogs}) {
  function renderURL(name) {
    return `/dogs/${name}`;
  }
  function renderDogs() {
    let dogsInfo = [];
    for (let dog of dogs) {
      dogsInfo.push(
          <div className="DogList-dog">
            <img src={dog.src} alt={dog.name} />
            <p className="DogList-name"><Link to={renderURL(dog.name)}>{dog.name}</Link></p>
            <p className="DogList-age">Age: {dog.age}</p>
          </div>
      );
    }
  }

  return (
    <div className="DogList">
      {renderDogs()}
    </div>
  )
}

export default DogList;