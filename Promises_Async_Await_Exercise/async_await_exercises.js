var fetch = require("node-fetch");


const URL = "https://swapi.co/api/people/";
//data["results"][0]
function fetchPerson(url){
    fetch(URL)
    .then(res => res.json())
    .then(data => {console.log(data["results"][0])})
    .catch(err => console.log("Error: "+err.messege))
  };

async function printNames() {
  console.log("Before");
  const person1 = await fetchPerson(URL+1);
  const person2 = await fetchPerson(URL+2);
  console.log(person1.name);
  console.log(person2.name)
  console.log("After all"); 
}
//printNames();

  var now = require("performance-now");
  var start = now();
  var end = now();
  
  //console.log(start.toFixed(3)); // the number of milliseconds the current node process is running 
  //console.log((start-end).toFixed(3)); // ~ 0.002 on my system 

  let promiseFactory = function(msg,delay){
    return new Promise( (resolve,reject) => {
      start.toFixed(3);
      var ok = true;
      var err = "UPPPS";
      if(msg = "a"){
        ok = false;
        err  = ` a is not allowed`;
      }
      if(ok){
        resolve(msg.toUpperCase(msg));
      }
      else{
        reject(err);
      }
    },(start-end).toFixed(3));
  };