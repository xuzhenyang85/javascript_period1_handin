const fetch = require("node-fetch");

const URL = "https://swapi.co/api/people/";


function fetchPerson(url){
    fetch(URL)
    .then(res => res.json())
    .then(data => {
        console.log(data["results"][0]);
        //return ( data["results"][0]);
    })
    .catch(err => console.log("Error: "+err.messege));
  }

  async function printNames() {
    console.log("Before");
    const person1 = await fetchPerson(URL+1);
    const person2 = await fetchPerson(URL+2);
    console.log(person1.name);
    console.log(person2.name)
    console.log("After all"); 
  }

  printNames();