/* console.log('hello abhishek sharma');
console.log("paddh le bhai ab nhi toh kab ");
console.log('hello abhishek ');
console.log("now focus on the JS");
// we can comment in JS like double forwarded slash
// this is how we print a message 

let firstName = 'abhishek';
let lastName = 'sharma';
// in this let is (keyword) firstName is (variable)

firstName = 'ravi';
console.log(firstName, lastName);

let fullName = 'ravi sharma';


console.log(fullName);


let yourName;

yourName = 'aman';

console.log(yourName);



var myName = 'abhishek sharma';
console.log(myName);
//constant

const myFullName = 'rohit kumar';

console.log(myFullName);

//data types

//string

let x = 'rupesh';

//number

let num1 = 78;
let num2 = 2.25;

//boolean

let mybool = true;
let mybool2 = false;

let islighton = true;

//undefined

let y;

console.log(x);
console.log(num1, num2);
console.log(mybool);
console.log(mybool2);
console.log(islighton);
console.log(y);

console.log(typeof x);
console.log(typeof num1);
console.log(typeof num2);
console.log(typeof mybool);
console.log(typeof mybool2);
console.log(typeof islighton);
console.log(typeof y);

//let firstname='samsher';
//let lastname='singh';
// let fullname= firstname+  ' ' + lastname;
// console.log(fullname);

// second way to add 2 strings 

let firstname = 'samsher';
let lastname = 'singh';

let fullname = `${firstname} ${lastname} is my full name `;

console.log(fullname);

console.log(fullname.toUpperCase());

console.log(fullname.toLowerCase());

//console.log(firstname.length);

//ARITHMETIC OPERATORS

let a = 10;
let b = 5;

let sum = a + b;
let sub = a - b;
let multi = a * b;
let div = a / b;
let rem = a % b;

console.log(sum);
console.log(sub);
console.log(multi);
console.log(div);
console.log(rem);

//increment
let num3 = 5;
num3++;
console.log(num3);

//decrement
let num = 5;
num--;
console.log(num);


//exponentiation (means power of the number )
//           in this figure 3*3*3*3*3 = 243
let d = 3;
let ex = d ** 5;
console.log(ex);


 */


                    // ARRAY
//     let fruits = ['apple', 'mango', 'banana'];
//     let codingLanguages = ['javascript', 'python', 'go'];
//     console.log(codingLanguages);
//     console.log(fruits);
//     console.log(fruits[0]);
// console.log(codingLanguages[1]);

// fruits.push('orange');
// console.log(fruits);

// fruits.unshift('watermelon');
// console.log(fruits);

// fruits.pop('');
// console.log(fruits);
// fruits.shift('');
// console.log(fruits);


// fruits.shift

               //OBJECT LITERALS

//    let person = {
//     firstname : 'subham',
//     lastname : 'sharma',
//     hobbies : ['chess','coding'],
//     address : {
//         state:'bihar',
//         country: 'india',
//     }
//        }            ;
//    console.log(person.firstname, person.lastname);
  
//    person.hobbies.push('cricket');
//    console.log(person.hobbies);
//    person.hobbies.unshift('football');
//    console.log(person.hobbies);
//    console.log(person.hobbies.length);

//    person.age=19;
//    console.log(person.age);

//    console.log(person.address.state, person.address.country);

             
         // object literals practice

 /* let person = {
    firstname : 'abhishek',
    lastname : 'sharma',
    age : '17',
    contact : '7503840820',
    hobbies: ['chess','cricket,'],
    address : {
    state:'bihar',
    country:'india',
}
}

console.log(person.hobbies[0]);

person.hobbies.push('football');
console.log(person.hobbies)
person.hobbies.unshift('coding');
console.log(person.hobbies);
person.height = 6.4;
console.log(person.height);

person.email = 'rs994764gmail.com';
console.log(person.email);

console.log(person);
console.log(person.address.state);
*/

          //ARRAY OF OBJECT LITERALS

//  let peoples= [
//     {
//         name : 'aman',
//         age : '24',
//         iscoder : 'no',
//     },
//     {
//         name : 'ravi shah',
//         age : '24',
//         iscoder : 'no',
//     },
//     {
//         name : 'abhishek',
//         age : '24',
//         iscoder : 'yes',
//     },
//  ];
    
//  console.log(peoples);

//  peoples[0].name = 'rupesh';
//  console.log(peoples[0]);


  // ***** conditionals in javascript ************************
//  IF ELSE

         // basic programme of if
// let age=20;

// if(age<18)  {
//     console.log('youn cannot drive');
//  }  else  {
//     console.log('you can get licensed');

//  }
//  let age=112;
 
//  if(age===10) {
//     console.log('age is equal to 10');
//  }
// else {
//     console.log('age is not equal to 10');
// }

 //**************comparison operators *********************

 //comparison operators are used to compare values

//  1. >          greater than
//  2. <          less than
//  3. >=         greater than or equal to
//  4. <=         less than or equal to 
//  5. ==         equal to
//  6. !=         not equal to
//  7. ===        equal value to and equal type
//  8. !==        not equal value to not equal type


// let age = 18;

// if(age === '18'){
//     console.log('age is  equal to 18');

// }

// else{
//     console.log('age is  not equal  to 18');
// }

// let age = 19;
// if(age === 18){
//     console.log('Age is equal to 18');
// } 
// else if(age > 65){
//     console.log('age is greater than 65 ')
// }

// else if (age > 18){
//     console.log('age is greater than 18');
// }
// else{
//     console.log('age is less than 18');
// }  


            //    LOGICAL OPERATORS
            //    &&          -AND OPERATORS
            //    ||          -OR OPERATORS

            // let age=199;


            //  if(age > 18 || age < 65){
            //     console.log('you are safe to drive')
            //  } 
            //  else{
            //     console.log('you are not safe to drive')
            //  }


                  //************ switch

                //   let fruit='fdfd';

                //   switch(fruit)  {
                //     case 'Apple' :
                //         console.log('hello');
                //         console.log('your favourite fruit is Apple');
                //         break;
                //     case 'Mango' :
                //         console.log('your favourite fruit is Mango');
                //         break;
                //     case 'Banana' :
                //         console.log('your favourite fruit is Banana');
                //         break;
                //     case 'Watermelon' :
                //         console.log('your favourite fruit is watermelon');
                //         break;
                //         default:
                //             console.log('please enter a different fruit name')
                //   }
                 

                //   let no=2;

                //   switch(no){
                //     case 1 :
                //         console.log('one')
                //         break;
                //     case 2 :
                //         console.log('two')
                //         break;
                //     case 3 :
                //         console.log('three')    
                //         break;
                //         default:
                //             console.log('please enter another number')
                //   }



             //  *************LOOP
             //for loop
             // while loop
             // for of loop


            //  for(let i=1; i<5; i++)
            // {
            //     console.log(i, 'hello world');
            // }
            // for(let y=6; y>0;  y-- )
            // {
            //     console.log(y,'hello duniya')
            // }


//             let fruits=['apple', 'mango','banana'];

//             for(let i=fruits.length; i>=0; i--)
// {
//     console.log(fruits[i]);

// }

// while loop

// x=0;
// while(x<3)
// {
//     console.log(x,'hello abhishek')
//     x++;
// }


// let fruits=['apple','banana','orange'];

// u=0;
// while(u<fruits.length)
// {
//     console.log(fruits[u]);
//     u++;
// }


// for of loop

// let fruits = ['apple', 'mango' ,'banana', 'orange', 'watermelon'];

// for(fruit of fruits)
// {
//     console.log(fruit);

// }


//                     *************function
// functions : A group/block of code that 
//             performs a particular task

// function printdetails()
// {
//     console.log('first name:abhishek');
//     console.log('last name:sharma');
//     console.log('age:24');
//     console.log('gender:male');
// }

// printdetails();


// let fruits = ['apple', 'mango' ,'banana', 'orange', 'watermelon'];

// let codinglanguage = ['javbascript','python','go'];


// function printelement()
// {
//     for (fruits of fruits){
//         console.log(fruits);
//     }
// }

// printelement();

// function printelement(myarray)

// {
// for(i of myarray){
//     console.log(i);
// }

// }
// printelement(fruits);
// printelement(codinglanguage);

//                               Return type function

// function sum(num1, num2){
//     const sum=num1 + num2 ;
//     // console.log(sum);
//     return sum;
// }

// var mysum = sum(12, 13);
// console.log(mysum);

// var mysum2= mysum+10;
// console.log(mysum2);

//                            Arrow function

// const sum = (num1, num2)  => 
//   num1 + num2;
    

//  let mysum = sum(89, 6);
//  console.log(mysum);
//  let mysum2 = mysum + 15;
//  console.log(mysum2);


//  const saymyname = (name) => 
//     console.log('hello', name);

//    saymyname ('abhishek sharma');

//                          JAVASCRIPT ARRAY METHOD
  
//                               CONCAT

// let petanimal = ['dog', 'cat', 'rabbit'];
// let wildanimal = ['lion', 'tiger' , 'wolf'];

// let animal = wildanimal.concat(petanimal);
// console.log(animal);


//                         CHECK IF ELEMENTS EXISTS

// let array = ['abhishek', 'aman', 'rohit'];
// let isavailable = array.includes('rohit');
// console.log(isavailable);

//                     FIND THE INDEX OF ELEMENT
//  let array = [2,4,6,8,10];
//  let index =  array.indexOf(8);
//  console.log(index);


//                           REVERSE METHOD
// let array = [1,2,3,4,5];
// let num = array.reverse();
// console.log(num);

//                   CONVERTING AN ARRAY TO STRING
 let array = [1,2,3,4,5,6];
 mystring = array.toString();
 console.log(array);
 console.log(mystring);