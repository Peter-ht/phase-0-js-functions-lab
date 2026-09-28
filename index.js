function calculateTax(amount) {
    return amount*0.10
}


console.log(calculateTax(50));

function convertToUpperCase(text) {
    return text.toUpperCase();
    
}
console.log(convertToUpperCase("hello peter"));

function findMaximum(num1,num2) {
    if (num1>num2) {
        return num1
        
    }else{
        return num2
    }
    
}
console.log(findMaximum(20,35))

function isPalindrome(word) {
    let reversed = word.split("").reverse().join("");
    if(word === reversed) {
        console.log(true);
    }else{
        console.log(false);
    }
    
}

isPalindrome("civic");

function calculateDiscountedPrice(originalPrice,discountPercentage) {
    
   return originalPrice-(originalPrice*discountPercentage/100)
    
}
console.log(calculateDiscountedPrice(100,20))




// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };