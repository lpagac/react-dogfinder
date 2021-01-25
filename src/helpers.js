/** Helper functions for Dog Finder App */

/** Returns array of name values from array of object passed
 * 
 * params - dogs (array like [{name: '', age: 10, src: '', facts: []}, ...])
 * 
 * returns - names (array like ['whiskey', 'duke', ...])
 */

function getNames(dogs) {
  let names = [];
  for (let dog of dogs) {
    names.push(dog.name);
  }
  return names;
}

export { getNames };