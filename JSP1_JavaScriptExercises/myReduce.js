// a) join() array
var all= ["Lars", "Peter", "Jan", "Bo"];
var nameString = all.join(",");
console.log(`a): ${nameString}`);

// b) use array reduce
const numbers = [2, 3, 67, 33]; 
var reducer = (accumulator,currentValue) => accumulator + currentValue;
var result = numbers.reduce(reducer);
console.log(`b) ${result}`);

// c) 
var members = [
    {name : "Peter", age: 18},
    {name : "Jan", age: 35},
    {name : "Janne", age: 25},
    {name : "Martin", age: 22},
   ]

var res = members.reduce((accu,curval,i,arr)=>{
    if(i<arr.length-1){
        return accu + curval.age;
    }
    else{
        return (acc + curval.age) /a.length;
    }
},0);
console.log(res);