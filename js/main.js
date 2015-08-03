// add scripts
console.log("sanity check!");

// Define a function called getStudentName that takes a single object as an argument and returns the value of the name property/key.

// A)
var student = {name: 'Michael', age: 27 }
// getStudentName(name) // => Michael

function getStudentName(object) {
  console.log(object.name);
  return object.name;
}
getStudentName(student);

// B)
var student = {name: 'Michael', age: 27 }
// getStudentName(name) // => Michael

function getStudentName(object) {
  return student.name;
}
getStudentName(name);


// 2 - Working
// Define a function called getTotalLetters that takes an array of strings as an argument and returns the total number of letters in all strings.

var stringArray = ['javascript', 'is', 'not', 'python'];
// getTotalLetters(stringArray) // => 19

function getTotalLetters (array) {
  var x = array.join().toString();
  var count = 0;
  console.log(x);
  for (var i = 0; i < x.length; i++) {
    if (x[i] !== ",") {
      count++;
    }
  }
  console.log(count);
  return count;
}

getTotalLetters(stringArray);


// 3. WORKING??
// 3. Define a function called 'createObject' that takes two arguments and returns a new object with a key of the first argument and the value of the second argument.

// createObject('city', 'Boulder') // => {city: "Boulder"}

function createObject (key, value) {
  var obj = {
    key: value
  }
  console.log(obj);
  return obj;
}
createObject('city', 'Boulder');
// or

function createObject (key, value) {
  console.log({ key: value });
  return { key: value };
}
createObject('city', 'Boulder');


// Working
// 4. Define a function called getNegativeIndex that takes an array and a negative number as arguments and returns the value from the array at the given negative index.

var letterArray = ['a', 'b', 'c', 'd', 'e'];
// getNegativeIndex(, -3) // => return c

function getNegativeIndex(array, number) {
  var y = number + 1; // or should it be -1
  var x = array.slice(number, y); // or should they be reversed
  console.log(y);
  console.log(x);
}
getNegativeIndex(letterArray, -3);




// 5. Define a function called removeCharacter that takes a string and a single character (string or integer) as arguments and returns the string with the characters removed. Do not modify the original string. STRETCH: Write a test case for this last requirement.

removeCharacter('javascript', 'a') // => jvscript
removeCharacter('javascript', 1) // => javascript
removeCharacter('12345', 2) // => 1345

function removeCharacter(string, character) {
  var string2 = string.split(character).join("");
  console.log(string);
  console.log(string2);
}

  // what's wrong with my logic here? why wasn't it even entering into the loop???
  // for (var i = 0; i < string2.length; i++) {
  //   if (string2.charAt(i) === character) {
  //     console.log(i +" i");
  //     conosle.log(character);
  //     console.log("firing");
  //     a = string2.indexOf(i);
  //     console.log(a);
  //     b = a + 1;
  //     console.log(b);
  //     string2.slice(a,b);
  //   }
  //   console.log(string2);
  // }


// Working
// 6. Define a function called ouputObject that takes an object as an argument and returns each key-value pair in the following format 'key .
//Object.keys and ages.john
// for in loop = research it
var ages = {john: 10, jerry: 11, jenny: 12 }
outputObject(ages); // => john is 10, jerry is 20, and jenny is 30

function outputObject (object) {
  var txt = "";
  var x;
  for (x in ages) {
      txt += x + " is " + ages[x] + ", ";
      console.log(txt);
  }
}

// function outputObject (object)
//   for (var i = 0; i < object.length; i++) {
//     console.log(object[i] + " is " + object.i);
//   }
// }

// 7. Define a function called getVowels that takes a string as an argument and returns an array of all the vowels in the string. Do not include duplicates.
// check to see if the first letter is one of the vowels.
// if it is, do something, if it isn't keep checking.
// two sets of arrays compare them to gether if they hit, slice that vowel out of vowels array
var vowels = ['a','e','i','o','u'];

var holder = [];
function getVowels (string) {
  // stringArray = string.split("");
  for (var i = 0; i < stringArray.length; i++) {
    for (var j = 0; j < vowels.length; j++) {
      if (string.charAt(i) === vowels[j]) {
        var z = vowels.indexOf(vowels[j]);
        console.log(z + " z")
        console.log(string[i] + " stringI");
        console.log(vowels[j] + " vowelsJ");
        vowels.splice(z, 1);
        console.log(vowels + " vowels");
        holder.push(string.charAt(i));
        console.log(holder + " holder");

      }
    }
  }
  console.log(holder)
  return holder;
}

getVowels('javascripting'); // => ['a', 'i']

// var vowels = ['a','e','i','o','u'];

// var holder = [];
// function getVowels (string) {
//   // stringArray = string.split("");
//   for (var i = 0; i < stringArray.length; i++) {
//     for (var j = 0; j < vowels.length; j++) {
//       if (string.charAt(i) === vowels[j]) {
//         var r = string.charAt(i);
//         console.log(r + " r")
//         string.split(r).join("");
//         console.log(string + "string");
//         console.log(string[i] + " stringI");
//         console.log(vowels[j] + " vowelsJ");
//         console.log(vowels + " vowels");
//         holder.push(string.charAt(i));
//         console.log(holder + " holder");

//       }
//     }
//   }
// }

// getVowels('javascripting')

// if (string.charAt(i) === "a") {
//       console.log('firing');
//       vowels += string.charAt(i);
//       if (stringl.charAt(i) === "i")
//         vowels += string.charAt(i);


//8. Define a function called captureTwins that takes an array as an argument and returns true if every adjacent pair of items in the array is the same, otherwise return false.
// could i sort??
// 1. sort them into two seperate elements? arrays? strings?
// compare them
// return false if any don't work.
var first = [];
var second = [];

var in1 = ['m', 'm', 'n', 'n', 's', 's']

captureTwins(['m', 'm', 'n', 'n', 's', 's']) // => true
captureTwins(['m', 'm', 'm', 'n', 's', 's']) // => false
captureTwins(['m', 'm', 'n', 'n', 's', 's']) // => true

captureTwins(['m', 'm', 'm', 'n', 's', 's']) // => false

function captureTwins(array) {
  var pairsArray = [];
  var x = [];
  var q = 0;
  for (var i = 0; i < array.length + 1; i++) {
    var x = array.splice(0,2);
    console.log(x)
    pairsArray.push(x);
    console.log(pairsArray);
  }
  for (var j = 0; j < pairsArray.length; j++) {
    if (pairsArray[j][0] !== pairsArray[j][1]) {
      console.log(pairsArray[j] + "= [j]")
      console.log(pairsArray[j][0] + "= [j][0]");
      console.log(pairsArray[j][1] + "= [j][1]");
      q++;
      return false;
    }
    // else {
    //   if (q >= 0) {
    //     return true;
    //   }
    // }
  }
}



var in2 = ['m', 'm', 'm', 'n', 's', 's']
captureTwins(['m', 'm', 'm', 'n', 's', 's']) // => false


// function captureTwins(array) {
//   for (var i = 0; i < array.length; i++) {
//     if (array.indexOf(array(i)) % 2 === 0) {
//       first.push(i);
//       console.log(first);
//     } else {
//       second.push(i);
//       console.log(second);
//     }
//   }
// }



// Working
// 9. Define a function called testBooleanLogic that takes an array of boolean values and returns true if any value is true.

var trues = [];
var falses = [];

function testBooleanLogic (array) {
  for (var i = 0; i < array.length; i++) {
    if ( array[i] === true ) {
      console.log(array[i] + "if so true?")
      trues.push(array[i]);
      return true;
    } else {
        falses.push(array[i]);
    }
  }
  if (trues.length === 0) {
    console.log("false");
    return false;
  }
}

testBooleanLogic([false, true, false, false]) // => true
testBooleanLogic([false, false, false]) // =>  false


// 10. Define a function called getUniqueValues that takes an array of strings, and returns a new array consisting of the unique values.
/// grab the first value of the string.
/// check that value against the rest of teh string.
/// if it matches,
///   throw it out
//      grab the next value off the string...
//  if it doesn't match
//    put it in an array
//    start over....


// getUniqueValues(['m', 'n', 'm', 'r', 'r', 's']) // => ['m', 'n', 'r', 's']
// getUniqueValues(['michael', 'ben', 'kerry', 'ben']) // => ['michael', 'ben', 'kerry']


// function getUniqueValues(array) {
//   var originals = [];
//   originals = array.splice(0,1);
//   console.log(array);
//   console.log(originals + " originals Beginning");
//   for (var i = 0; i < array.length; i++) {
//      for (var j = 0; j < originals.length; j++) {
//         var r = array[i];
//         if ( array[i] === originals[j]) {
//           debugger;
//           array.shift();
//           console.log(array + " array in if");
//       } else {
//           originals.push(r);
//           array.shift();
//           // holder += array.slice(0,1);
//           debugger;
//           console.log(i + " i")
//           console.log(originals + " originals else");
//       }
//     }
//   }
// }

getUniqueValues(['m', 'n', 'm', 'r', 'r', 's']) // => ['m', 'n', 'r', 's']
getUniqueValues(['michael', 'ben', 'kerry', 'ben']) // => ['michael', 'ben', 'kerry']


function getUniqueValues(array) {
  var copy = array.splice(0,1);
  var originals = [];
  // originals = array.splice(0,1);
  // console.log(array);
  // console.log(originals + " originals Beginning");
  for (var i = 0; i < copy.length; i++) {
    console.log(copy.length)
     for (var j = 0; j < array.length; j++) {
        var r = array[j];
        console.log(r + " = r value")
        if ( copy[i] === array[j] ) {
          console.log(array[j] + " arrayI If");
          console.log(copy[i] + " copyJ If");
          array.shift();
          console.log(array + " array contents in If");
          console.log(copy + " copy contents in If");

      } else {
          originals.push(r);
          console.log(originals + "originals  contents in Else")
          array.shift();
          console.log(array + "array contents in Else")
          var w = array.splice(0,1);
          copy.push(w);
          console.log(copy + " copy contents in Else")
          // holder += array.slice(0,1);
          debugger;
          console.log(i + " i")
          console.log(originals + " originals else");
      }
    }
  }
}





// function getUniqueValues(array) {
//   var originals = [];
//   originals = array.slice(0,1);
//   console.log(originals);
//   for (var i = 0; i < array.length; i++) {
//     for (var j = 0; j < arrayCopy.length; j++) {
//       if (array[i] === originals[j]) {
//         array.slice(0,1);
//         console.log(arrayCopy + "arrayCopy");
//       } else {
//         originals.push(array[i]);
//         array.slice(0,1);
//         console.log(originals + "originals");
//       }
//     }
//   }
// }


// function getUniqueValues(array) {
//   var originals = [];
//   originals = array.slice(0,1);
//   console.log(originals)
//   for (var i = 0; i < array.length; i++) {
//     if (  )
//   }
// }


// function getUniqueValues(array) {
//   var holder = array.push
//   var originals = [];
//   for (var i = 0; i < array.length; i++ ) {
//     for (var j = 0; j < holder.length; j++) {
//       if (array[i] === holder[j]) {
//         holder.push(array[i])
//         console.log(holder + " in holder")
//       } else {
//         originals.push(array[i])
//         console.log(originals + " in originals")
//       }
//     }
//   }
// }
