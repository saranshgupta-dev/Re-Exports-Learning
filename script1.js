

// function re(){ // function ke andar likhne se pura code execute hoga
//     try{
//     console.log('A');
//     throw new Error('oops')
// }
// catch(error){
//      console.log('B');
//      return  'C'     // or return last mai print hoga
// }
// finally{
//     console.log('D');
// }
// }
// console.log(re());

// completely error ayege because return function ke andar use karna hota hai 
// try{
//     console.log('A');
//     throw new Error('oops')
// }
// catch(error){
//      console.log('B');
//      return       // kuch bhi print nhi hoga SyntaxError : Illegal return statement 
// }
// finally{
//     console.log('C');
// }

// function hello(){
//     try{
//         console.log('A');
//         return 10  // yaha 10 ko override kiya finally ke return ne
//     }
//     catch(err){
//         console.log(err.message);
//     }
//     finally{ 
//         console.log('C');
//         // return 20 // genrally finally mai return avoid karna chahiye
//     }
// }
// console.log(hello());

// function hey(){
// try{
//     console.log('A');
//     // let result = x + 10 // error ane se sab execute hoga
//     // console.log('B');
//     return // return keyword function ko return karega but finally execute karke
// }
// catch(error){  // error nhi hai toh catch execute nhi hua 
//     console.log('C');
// }
// finally{
//     console.log('D'); // without error with return ke sath try or finally 
//     return
// }
// console.log('E');
// }
// hey()

// login Validation using try catch 
// function login(username,passward){
//     try{
//         if(!username){
//             throw new Error('Username is required')
//         }
//         if(!passward){
//             throw new Error('Password is required')
//         }
//         console.log('Login Successfull');
//     }
//     catch(error){
//         console.log(error.message);
//     }
//     finally{
//         console.log('Login Process Completd');
//     }
// }
// login('saransh','')

// try{
//     console.log('try block');
//     let x = y + 10
//     // console.log(x);
// }
// catch(error){
//     console.log('catch block');
// }
// finally{
//     console.log('final block');
// }

// try{
//     console.log('start');
//     let result = x + 10
//     console.log(result);
//     console.log('end');
// }
// catch(err){
//     console.log('error',err);
// }
// console.log('Program End');

// try{
//     console.log('start');
//     let result = 10/0
//     console.log(result);
//     console.log('end');
// }
// catch(error){
//     console.log('Error',error);
// }

// default + Named dono ek sath 
// export default function fetchData(){
//     console.log('Fetching Data sucessfully ');
// }
// export const BASE_URL = "<https://api.example.com>";

// export function add(a,b){
//     return a + b
// }
// export function mul(a,b){
//     return a * b
// }
// export function sub(a,b){
//     return a - b
// }

// export const PI = 3.14159

// export default class User{
//   constructor(name,age){
//     this.name = name 
//     this.age = age
//   }
// }