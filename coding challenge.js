console.log('abhishek sharma ');


// 1. write  m function which takes principal, rate 
// of interest and time as input and return the simple interest

//   function simpleint(p,r,t)
//   {
//  return (p*r*t) / 100;
//  }

//   console.log(simpleint (100054, 8, 1));

  // 2. write a function which takes a list of 
  //numbers as input and return it's sum.

  //ps :user spread operator to take input (...)

//   function sum(...numbers){
//     let total =0;
//     for(i=0; i<numbers.length; i++){
//         // console.log(numbers[i]);
//         total+= numbers[i];
//     }
//     return total;
//   }

//   console.log(sum(1,2,3,4,5));

  // 3. write a function which takes a number and prints the table

//   function printtable(num){
//      for(i=1; i<=10; i++){
//         console.log(` ${num} * ${i} = ${num*i}`);
//      }
//   }

//   printtable(9);

// 4. write a function which takes a array of number 
//   , calculates the average of number and return it


// function averagenum(number){
//     let sum=0;
//     for(let i=0; i<number.length; i++){
//         sum += number[i];
//     }
//     return sum/number.length;
    
// }


// console.log(averagenum([12,3,4,15]));

// 5. write a function which finds a number in an array
// of Number

//  return true if the number is in the array otherwise
//  return false.

// function findNumInArray(num, numbers) {
//     for(let i=0; i<numbers.length; i++){
//         if(num === numbers[i]){
//             return true;
//         }
//     }

//     return false;

// }

// console.log(findNumInArray(89, [8,9,5,5,6,2,3]));

// 6. write a function which takes an array of number
//    and returns all positive number in an array.


// function getpositivenum(numbers) {
//     let positive = [];
//   for(let i = 0; i<numbers.length; i++) {
//    if( 0 < numbers[i]){
//    positive.push(numbers[i]);
//    }
//   }

//     return positive;
// }

// console.log(getpositivenum([0,-1,2,5,-9,6]));



// function allnegativenum(numbers){
//     let negative = [];
//     for(let i=0; i<numbers.length; i++){
//         if(0 > numbers[i]) {
//             negative.push(numbers[i]);
//         }
//     }
//     return negative;

// }

// console.log(allnegativenum([2,3,5,-1,-9,-4]));


// 7. write a function which takes an array of number
//    and returns the largest number.


// function findlargestnum(numbers){
//     let largestnumber= numbers[0];

//   for(let i=0; i<numbers.length; i++){
//      if(largestnumber < numbers[i]){
//         largestnumber = numbers[i];
//      }
//   }
//   return largestnumber;
// }

// console.log( findlargestnum([1,2,3,4,5,65,7,8,96,]));


//  8. fizzbuzz

// write a function which takes a number and prints
// FIZZBUZZ if the number is divisible by both and 5.

//  if the number is divisible by 3 only then print 
//  Fizz and if thr number is divisible by 5 only 
//  then print Buzz
//  if the number is not divisible by any of them 
// then print the number

// function Fizzbuzz(num){
//     if(num %3 === 0 && num % 5 ===0){
//         console.log('Fizzbuzz');
//     }
 
//     else if(num % 3 === 0){
//         console.log("Fizz");
//     } 

//     else if(num % 5 === 0){
//         console.log("Buzz");
//     }

//     else {
//         console.log(num);
//     }

    
// }

// Fizzbuzz(7);


//  9. write a function which take an array as argument 
//     and returns the reversed array

//eg: input :[1,2,3,4,5]
// output    :[5,4,3,2,1]


// function reversearray(array){
//     let reversedarray = [];

//     for(let i=array.length-1; i>=0 ; i-- ){
//        reversedarray.push(array[i]);
//     }

//     return reversedarray;
// }

// let array1=[1,2,3,4,5];

// console.log(reversearray(array1));


//   second programme for practice

// function reversename(array){
//  let reversedname=[];
//  for(let i=array.length-1; i>=0 ; i--){
//     reversedname.push(array[i]);
//  }
//  return reversedname;
// }

// let array1=['abhishek', 'ravi' ,'jatin', 'batla'];
// console.log(reversename(array1));


// 10. write a function which takes 2 array as input 
//     and returns the merged array of the 2 array.

// function mergearray(firstarray, secondarray){

//     let mergedarray=[];
//     for(element of firstarray){
//        mergedarray.push(element);

//     }

//     for(element of secondarray){
//         mergedarray.push(element);
// }
// return mergedarray;
// }
// let firstarray = [1,2,3,4,5];
// let secondarray = [6,7,8,9];
// console.log(mergearray(firstarray, secondarray));