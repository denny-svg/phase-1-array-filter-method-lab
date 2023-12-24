// Code your solution here
 function findMatching(driver, names) {
    return driver.filter(driver => driver.toLowerCase() === names.toLowerCase());
    
 }

 function fuzzyMatch(drivers, query) {
    return drivers.filter(driver => driver.toLowerCase().startsWith(query.toLowerCase()));
  }
  
  const namesArray = ["Sammy", "Sarah", "Sally"];
  
  const result = fuzzyMatch(namesArray, 'Sa');
  console.log(result);
    
 function matchName(driver, list) {
    return driver.filter(driver => driver.name.toLowerCase()=== list.toLowerCase());
 }

const drivername = 
[
    'Bobby', 
    'Sammy', 
    'Sally', 
    'Annette', 
    'Sarah', 
    'bobby'
];
 
console.log (findMatching(drivername, 'Bobby'));
console.log(findMatching(drivername, 'Sammy'));
console.log(findMatching(drivername, 'Susan'));

console.log(fuzzyMatch(drivername, 'Sa'));
console.log(fuzzyMatch(drivername, 'y'));
console.log(fuzzyMatch(drivername, 'mm'));

const driverlist = [
    {name: 'Bobby', hometown: 'Pittsburgh'},
    {name: 'Sammy', hometown: 'New York'},
    {name: 'Sally', hometown: 'Cleveland'},
    {name: 'Annette', hometown: 'Los Angelse'},
    {name: 'bobby', hometown: 'Tampa Bay'},
];

console.log(matchName(driverlist, 'Bobby'));
console.log(matchName(driverlist, 'Sammy'));
console.log(matchName(driverlist, 'Sally'));
console.log(matchName(driverlist, 'Annette'));
console.log(matchName(driverlist, 'bobby'));
