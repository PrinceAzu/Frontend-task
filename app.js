// A) Convert from Fahrenheit to Celsius

const convertFahrToCelsius = (fahr) => {
    let celsius = (5/9) * (fahr-32);

    if (isNaN(fahr) || typeof fahr === "boolean" || Array.isArray(fahr)) {
        return `${JSON.stringify(fahr)} is not a valid number but a/an ${typeof(fahr)}`;
    } else {
        return celsius.toFixed(4);
    }
        
}

console.log(convertFahrToCelsius(true));
console.log(convertFahrToCelsius(false));
console.log(convertFahrToCelsius(0));
console.log(convertFahrToCelsius("0"));
console.log(convertFahrToCelsius("go"));
console.log(convertFahrToCelsius({temp: 0}));
console.log(convertFahrToCelsius([1,2,3]));



//B

const checkYuGioh = (n) => {
    let result = [];
   
    for (let i = 1; i <= n; i++) {

        if (i % 6 === 0) {
            result.push("yu-gi");
        } else if (i % 10 === 0) {
            result.push("yu-oh");
        } else if (i % 30 === 0 ) {
            result.push("yu-gi-oh")
        } else if (i % 2 === 0) {
            result.push("yu");
        } else if (i % 3 === 0) {
            result.push("gi") ;
        } else if (i % 5 === 0) {
            result.push("oh");
        } else {
            result.push(i);
        }
        
    }

    return result;
}

console.log(checkYuGioh(2));
console.log(checkYuGioh(3));
console.log(checkYuGioh(5));
console.log(checkYuGioh(10));
console.log(checkYuGioh(12));


