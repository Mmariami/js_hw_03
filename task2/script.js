const countProps = function(obj) {
    let amount = Object.keys(obj)
    // console.log(Array.isArray(Object.keys(obj)));
    return amount.length
};


console.log(countProps({})); 
console.log(countProps({ name: 'Mango', age: 2 })); 
console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); 
