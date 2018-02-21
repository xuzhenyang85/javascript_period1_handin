
const names = ['Lars','Jan','Peter','Bo','Frederik'];

// normal filter funktion
const nFilter = names.filter(n => n.length <=3 );
console.log(nFilter);

// Tag i mod et array og et callback
function myFilter(array,callback){
    // Vi filterer vores array med vores callback
    return array.filter(callback)
};

let newArr = myFilter(names,n => n.length <=3)
console.log(newArr.join(' '));