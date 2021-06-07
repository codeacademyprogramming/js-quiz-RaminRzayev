/*
    1. Write an expression which selects every <p> element in the document (write in all ways you know)
*/
// let allP= document.querySelectorAll("p");
/*
    2. Write an expression which selects every element with the wrapper class in the document (write in all ways you know)
*/
// let classA= document.getElementsByClassName("class");
// let classA=document.querySelectorAll(".class");

/*
    3. You are given an array [1,2,3,4,5,6,7,8,9,10], create a new array based on this one which only contains numbers can divide by two (with built in array methods)
*/
// let myNumber=[1,2,3,4,5,6,7,8,9,10];
// function myFunction() {
//     let myNumber2=[];
//     for (i = 0; i <= myNumber.length; i++) {

//         if(myNumber[i]%2==0){
//             myNumber2.push(myNumber[i])
//         }
//     }
//     console.log(myNumber2)
// }
// myFunction()

/*
    4. You are given an array [1,2,3,4,5,6,7,8,9,10], create a new array based on this one which is multiplied versions of every element in the array(with built in array methods)
*/
// let myNumber=[1,2,3,4,5,6,7,8,9,10];
// function myNumbers() {
//     let myNumber2=[];
//     for(i=0;i<=myNumber.length; i++){
//         myNumber2[i]=i*2;

//     }
//     console.log(myNumber2)
// }
// myNumbers()

/*
    5. Write a custom method which accepts an array and returns an array with all the values duplicated
    input: [1,2,3,4,5]
    expected output: [1,2,3,4,5,1,2,3,4,5]
*/
// let input=[1,2,3,4,5];
// let allNumber=input.concat(input);
// console.log(allNumber)
/*
    6. Write a custom method with name 'multiply' which can be invoked like the example below:
    multiply(2)(3)(5)
    expected output: 30
*/
// let multiply=function(a,b,c) {
//     return a*b*c
// }
// console.log(multiply(2,3,5))
/*
    7. [1,2,3,4,5,6,7,8,9,10], check with an array method if the array only contains numbers greater than 5
*/
// let myNumber=[1,2,3,4,5,6,7,8,9,10];
// function myFunction(){
//     let myNumber2=[];
//     for(i=0;i<myNumber.length; i++){
//         if(myNumber[i]>5){
//         myNumber2.push(myNumber[i])
//         }

//     }

//     console.log(myNumber2)

// }
// myFunction()
/*
    8. [1,2,3,4,5,6,7,8,9,10], check with an array method if the array at least contains one element which divides by 2
*/
// let myNumber=[1,2,3,4,5,6,7,8,9,10];
// function myFunction() {

//     for (i = 0; i <= myNumber.length; i++) {

//         if(myNumber[i]%2==0){
//             return true
//         }
//        else{
//           return false
//         }
//     }
//     console.log(myNumber)
// }
// myFunction()
/*
    9.  What will be the output of the following code?
        var Employee = {
            company: 'xyz'
        }
        var emp1 = Object.create(Employee);
        delete emp1.company
        console.log(emp1.company);
*/

/*
    10. I wrote a function, how can i know how many arguments provided to my function
*/

/*
    11. You are given an array like [1,2,3,4], how can you empty array? (write in )
    input: [1, 2, 3, 4]
    output: []
*/