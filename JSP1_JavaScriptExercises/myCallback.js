

const numbers = [1,4,6,7,9];

const tableRows = numbers.map((n) => "<tr>" + n + "</tr>"); // map modtager en callback som arg, men syn så blok
console.log(tableRows.join(" "));

function myMap(arr,cb){ //first arg tager arr, og callback
    let returnArr = []; // vi vil få tilbage fra callback
    for(let i = 0; i < arr.length; i++ ){
        returnArr.push(cb(arr[i])); // push en callback
    }
    return returnArr;
}


let newArray = myMap(numbers, n => "\t<li>" + n + "</li>");
let formArr = newArray.join("\n");
let ulArr = '<ul>\n'+formArr+'\n</ul>';
console.log(ulArr); // join() convert from arr to string