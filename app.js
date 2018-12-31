//                           #1 First and Last Character

/*
function removeChar(str){
return str.slice(1, -1);
};
*/

/*                      #2 Basic Mathematical Operations

function basicOp(operation, value1, value2)
{
  if(operation === "+"){
   return value1 + value2;
  } else if (operation === "-"){
  return value1 - value2;
  } else if (operation === "*"){
   return value1 * value2;
  } else if (operation === "/"){
  return value1 / value2
  }

console.log("*",2,4);
}
*/

/*                    #3  Volume of a Cuboid

var Kata;

Kata = (function() {
  function Kata() {}

  Kata.getVolumeOfCuboid = function(length, width, height) {
    return length * width * height;
  };

  return Kata;

})();

*/

/*               #4 Grasshopper - Personalized Message

function greet (name, owner) {
   return name == owner ? 'Hello boss' : 'Hello guest';
}

greet('Mike','dude')

*/

/*                 #5 Even or Odd

function even_or_odd(number) {
 if(number % 2 === 0) {
     return "Even";
 } else {
    return "Odd"
 }
}

/*                #6  Function 2 - squaring an argument

function square(input){
  return input * input;
};

*/

/*       #7 Multiply

function multiply(a, b){
 return a * b
}
*/

/*       #8 Find the smallest integer in the array
           function numberToString(num) {
           return num.toString();
                      }
                    */
/*        #9 Opposite number
function opposite(number) {
return -number
}
*/
/*        #9    Reverse List Order
function reverseList(list) {
  let newList = list.reverse();

  return newList;
}
*/

//                                  Total Amount Of Points

/*
function points(games) {
  return games.reduce((current, element) => {
    let arraySplit = element.split(':');
    return (arraySplit[0] > arraySplit[1]) ? current += 3 : (arraySplit[0] < arraySplit[1]) ? current : current += 1;
  }, 0);
}
*/
/*
function points(games) {
  return games.reduce((acc, val) => {
    if (val[0] > val[2]) {
      return acc + 3
    } else if(val[0] == val[2]) {
      return acc + 1
    } else {
      return acc
    }
  }, 0)
}
console.log(points);

*/
