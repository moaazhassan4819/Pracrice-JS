// console.log("Welcome to Apna College");
// console.log("Moaaz Hassan");
// console.log("I Like Js");

// fullname = "Moaaz Hassan";
// console.log(fullname);
// age = 20;
// console.log(age);
// price = 99.99;
// console.log(price);
// X = null;
// console.log(X);
// Y = undefined;
// console.log(Y);
// isfollow = false;
// console.log(isfollow);

// {
//     let a = 10;
//     console.log(a);
// }
// {
//     let a = 5;
//     console.log(a);
// }
// let fullname = "Moaaz";
// isFollow = true;
// let y = Symbol("Hello!@")
// let fullname = "Moaaz Hassan";
// console.log(fullname);
// let age = 24
// console.log(age)
// let x = null;
// let x = BigInt("123");

// const student = {
//     fullName : "Moaaz Hassan",
//     age : 20,
//     percentage : 74.04,
//     isPass : true,
// };
// student["age"]= student["age"] +1;
// console.log(student.age);
// student ["name"] = "Moaaz  Rao";
// console.log(student["name"]);

// const profile = {
// name: "moaaz",
// isFollow: true,
// followers: 123,
// following: 123,
// };
// console.log(typeof profile["followers"]);


//operators

// let a = 5;
// let b = 2;
// console.log("a =", a,  "& b =", b,);
// console.log("a + b =", a + b);      //Addition
// console.log("a - b =", a - b);      //Subtraction
// console.log("b - a=", b - a);       //Subtraction
// console.log("a * b =", a * b);      //Multiplication
// console.log("a / b =", a / b);      //division
// console.log("b / a =", b / a);      //division
// console.log("a % b =", a % b);      //Modulus
// console.log("b % a =", b % a);      //Modulus
// console.log("a ** b =", a ** b);    //Exponentiation
// console.log("b ** a =", b ** a);    //Exponentiation
// console.log("a ** a =", a ** a);    //Exponentiation
// console.log("b ** b =", b ** b);

//unary operators//
// let a = 5;
// let b = 2;
// console.log("a =", a, "& b =", b);
// // a = a + 1;
// // console.log("a =", a);

// a++;                //Increament operator
// console.log("a =", a);

// b--;                //Decreament operator
// console.log("b =", b);

// let x = 10;
// let y = 8;
// console.log("x =", x, "; y =",y);

// console.log("x =", x++);        //post-increament
// console.log("x =", x++);        //post-increament

// console.log("y =", y--);        //post-increament
// console.log("y =", y--);        //post-increament

// console.log("x =", ++x);    //pre-increamenr;
// console.log("x =", --x);    //pre-decreament;


//Assign operators;
// let m = 12;
// let n = 14;
// console.log("m =", m, "; n =", n);


// n += 4;
// console.log("n =", n)

// m -= 4;
// console.log("m =", m);

// m *= 4;
// console.log("m =", m);

// m /= 4;
// console.log("m =", m);

// n %= 4;
// console.log("n =", n);

// m %= 4;
// console.log("m =", m);

// m **= 3;
// console.log("m =", m);

// n **= 3;
// console.log("n =", n);


///Comparison operators

// let a = 4;
// let b = 8;
// console.log("a =", a, "b =", b);
// console.log("1) a == b", a == b);
// console.log("2) a != b", a != b);
// console.log("a !== b", a !== b);
// console.log("a === b", a === b);
// console.log("4 < 8", a < b);
// console.log("4 >= 8", a > b);
// console.log("4 <= 8", a <= b);

// let c = 4;
// let d = 4;
// console.log("c =", c, "& d =", d);
// console.log("1) c == d", c == d);
// console.log("1) c != d", c != d);
// console.log("c === d", c === d);
// console.log("4 < 4", a < b);
// console.log("4 > 4", a > b);

// logical operators

// let a = 6;
// let b = 5;
// console.log("a =", a, "& b =", b);
// console.log("a > b && a === b", a > b && a === 6);
// console.log("a < b && a === b", a < b && a === 6);
// console.log("a < b || a === b", a < b || a === 6);
// console.log("!(6<5) =", !(a < b));
// console.log("!(6<5) =", !(a > b));

//conditional  statement
// if statement
// let age = 19;
// if (age >= 18) {
//     console.log("You can Vote");
// }
// if (age <= 18) {
//     console.log("You can't vote");
// }

// let mode = "dark";
// let color;
// if (mode === "dark"){
//     color = "black";
// }
// if (mode === "light"){
//     color = "white";
// }
// console.log(color);

/// if-else statement


////    ---------------->>>>>> else-if statement <<<---------------------------------
// let mode = "blue";
// let color;
// if (mode === "dark"){
//     color = "black";
// } else if (mode === "blue"){
//    color = "blue";
// } else if (mode === "pink"){
//     color = "pink";
// } else {
//    color = "white";
// }
// console.log(color);

// //agar koi single condition lazmi print kar wani hai to ye kare gy

// if (mode = "dark") console.log(mode);


///=======================ternary operators ======================================////
////condition ? true output : false output
// let age =  25;
// let result = age >= 18 ? "adult" : "not adult";
// console.log(result);

// age >= 18 ? console.log("adult") : console.log("not adult");

// alert("hello!");

// let name = prompt("Name:");
// console.log(name);


//Q # 01 Get user to input a number using prompt("Enter a Number;"). Check if the number is a 
// multiple of 5 or not.

// let num = prompt("Enter a Number");
// if (num % 5 === 0){
//     console.log(num, "is multiple of 5");
// } else {
//     console.log(num, "is not multiple of 5");
// }

//Q # 02 write a code which can gives grades to students according to their scores:
/// *90-100, A;     *70-89, B;      *60-69, C;      *50-59, D;      *0-49, F;

// let score = prompt("enter your score: (0-100)");
// let Grade;
// if (score >= 90 && score <= 100) {
//     Grade = "A";
// } else if (score >= 70 && score <= 89) {
//     Grade = "B";
// } else if (score >= 60 && score <= 69) {
//     Grade = "C";
// } else if (score >= 50 && score <= 59) {
//     Grade = "D";
// } else if (score >= 0 && score <= 49) {
//     Grade = "F";
// }
// console.log("According to your scores, Your Grade was:", Grade);



/////=============================>>>>>>For loop <<<==================================================/////

// for (let i = 1; i <=10; i++) {
//     console.log("apna_college");
//}

// calculate sum of 1 t0 5
// for(let i=1; i<=5; i++) {
//     console.log("i =", i);
// }

// let sum = 0;
// let n = 14;
// for (let i=0; i<=n; i++){
//     sum = sum + i;
// }
// console.log("sum =", sum);
// console.log("loop has ended");

///=====================>>> while loop ==============================================>>>>///
// let i = 1;
// while (i <= 10) {
//     console.log("i =", i);
//     i++;
// }
// let i = 1;
// while (i <= 10) {
//     console.log("apna_college");
//     i++;
// }


///=================================================>>>Do while loop ==============================================>>>>///
// let i = 1;
// do {
//     console.log("i =", i);
//     i++;
// } while (i <= 10);

///==================================================>>> for-of loop ==============================================>>>>///

// let write = "javascript";
// let length = 0;
// for (let i of write) {
//     console.log("i =", i);
//     length++;
// }
// console.log("String size =", length);

///==================================================>>> for-in loop ==============================================>>>>///
// let student = {
// name : "Moaaz_Hassan",
// age : 20,
// cgpa : 7.5,
// ispass : true,
// };

// for (let key in student) {
// console.log("key =", key, "value =",  student[key]);
// }


//////////======================================= Practice Question ==========================================///////
///Print all even numbers 0 to 100.

// for (let i=0; i<=100; i++){
//     if(i%2 !== 0){
//     console.log("i =", i);
//     }
// }

//////////======================================= Practice Question ==========================================///////
// let gameNum = 25;
// let userNum = prompt("Guess the game num :");
// console.log(userNum);;







// console.log("Welcome to my website!");
// fullName = ("Moaaz Hassan");
// age = 24;
// price = 30;
// x = null;
// //null ka pata to hai magar khali box hai
// y = undefined;
// // undefined ka matlb pata hi nahi kiya value store hai hamare pss 
// isFollow = false;
// console.log(isFollow);

// let student = {
//     fullName : "Moaaz Hassan",
//     age : 21,
//     class : 13,
//     marks : 750,
//     isPass : true,
// };
// student["age"] = student["age"] + 14;
// student["fullName"] = "Saad Hassan";
// console.log(student["class"]);

//CONDITIONAL STATEMENT
// let age = 21;
// console.log("age = 21");

// if (age >= 18) {
//     console.log("You can vote.");
// } else {
//     console.log("You cann't vote.");
// }


// let mode = "dark";
// let color;

// if (mode === "dark") {
//     color = "black";
// } else {
//     color = "white";
// }
// console.log(color);

// let num = 2211;
// if (num%2 === 0){
//     console.log(num, "is even");
// } else {
//     console.log(num, "is odd");
// }

// let age = 18;
// let result = age >= 18 ? "adult": "not-adult";
// console.log(result);

// let num = prompt("Enter a number");
// if (num % 5 === 0){
//     console.log(num, "is multiple of 5");
// } else {
//     console.log(num, "is not multiple of 5");
// }

// let marks = prompt("Enter your marks.");
// if (marks >= 90) {
//     console.log(marks, "percentage", "A+1 grade");
// } else if (marks >= 80) {
//     console.log(marks, "percentage", "A+ grade");
// } else if (marks >= 70) {
//     console.log(marks, "percentage", "A grade");
// } else if (marks >= 60) {
//     console.log(marks, "percentage", "B grade");
// } else if (marks >= 50) {
//     console.log(marks, "percentage", "C grade");
// } else if (marks >= 40){
//     console.log(marks, "percentage", "D grade");
// }
