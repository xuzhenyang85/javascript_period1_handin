
const names = ['Lars','Jan','Peter','Bo','Frederik'];

// normal filter funktion
const nFilter = names.filter(n => n.length <=3 );
console.log(nFilter.join(" "));

function nameLength(element){
    return element.length <=3;
}

// Tag i mod et array og et callback
function myFilter(arr,cb){
    // Vi filterer vores array med vores callback
    var resultArray = [];

    for(var i = 0; i < arr.length; i++){
        if(cb(arr[i])){
            resultArray.push(arr[i]);
        }
    }
    return resultArray;
};

let result = myFilter(names,nameLength);
console.log(result.join(" "));