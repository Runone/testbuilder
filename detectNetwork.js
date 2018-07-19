// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
    var numbers = cardNumber.substring(0,2);
    var prefixThree = cardNumber.substring(0,3);
    var prefixFour = cardNumber.substring(0,4);


    if((numbers ===  '38' || numbers === '39') && (cardNumber.length === 14)) {
        return "Diner's Club";
        }
        else if ((numbers === '34' || numbers === '37') && (cardNumber.length === 15)) {
        return "American Express";
}       else if ((cardNumber[0] === '4') && (cardNumber.length === 13 || cardNumber.length === 16 || cardNumber.length === 19)) {
        return "Visa";
    }   else if ((numbers === '51' || numbers === '52' || numbers === '53' || numbers === '54' || numbers === '55') && (cardNumber.length === 16)){
        return "MasterCard";
    }   else if ((( prefixFour === '6011' || numbers === '65') || (prefixThree >= '644' && prefixThree <= '649')) && (cardNumber.length === 16 || cardNumber.length === 19)) {
        return "Discover";
    }   else if ((prefixFour = '5018' || prefixFour = '5020' || prefixFour = '5038' || prefixFour = '6304')) && (cardNumber.length === ) {}
    }
    else {
        return "Other Network";
    }
};


// The Diner's Club network always starts with a 38 or 39 and is 14 digits long
// The American Express network always starts with a 34 or 37 and is 15 digits long

// Once you've read this, go ahead and try to implement this function, then return to the console.

// detectNetwork('38345678901234')
//
// If you see the output
//
// < "Diner's Club
detectNetwork('38345678901234')  //(Diner's Club)
detectNetwork('39345678901234') //(Diner's Club)
detectNetwork('343456789012345') //(American Express)
detectNetwork('373456789012345') //(American Express)
detectNetwork('4123456789012') // (Visa)
detectNetwork('4123456789012345') // (Visa)
detectNetwork('4123456789012345678') // (Visa)
detectNetwork('5112345678901234') // (MasterCard)
detectNetwork('5212345678901234') // (MasterCard)
detectNetwork('5312345678901234') // (MasterCard)
detectNetwork('5412345678901234') // (MasterCard)
detectNetwork('5512345678901234') // (MasterCard)