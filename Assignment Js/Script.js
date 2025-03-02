//--------------------------------CH-01----------------------------------------------------//
//Question #01
alert("Welcome to our website!");

//Question #02
alert("Error! Please enter a valid password.");

//Question #03
alert("Welcome to JS Land...  \nHappy coding!");

//Question #04
alert("Welcome to JS Land...")

//Question #05
alert("Happy coding! \nPrevent this page from creating additional dialogs.")

//Question #06
alert ("Hello... I can run JS through my web Browser's console")


//-------------------------------------------CH-02------------------------------------------------------//

//Question #01
var username;

////Question #02
var myName = "Moaaz Hassan";

//Question #03
var message; 
message = "Hello World"; 
alert(message);

//Question #04
var fullName = "Moaaz Hassan";
alert(fullName);
var age = 20;
alert(age + "\u00A0years old");
var course = "Certified Mobile Application Development";
alert(course);

//Question #05
var name = "PIZZA\nPIZZ\nPIZ\nPI\nP";
alert(name);

//Question #06
var email = "moaazrao5819@gmail.com";
alert("My email address is\u00A0" + email);

//Question #07
var book = "A smarter way to learn JavaScript"; 
alert ("I am trying to learn from the book\u00A0" + book);

//Question #08
document.write ("Yah! I can write HTML content throuh JavaScript");

//Question #09
var speccialstring = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
alert(speccialstring);


// -------------------------------------------CH-03-----------------------------------------------//

//Question #01
var hisage = 15;
alert("I'm\u00A0" + hisage + "\u00A0years old");

//Question #02
var visittime = 10;
alert("You have visited this site\u00A0" + visittime + "\u00A0times");

//Question #03
var birthyear = 2006;
document.write ("<br> My birth year is\u00A0" + birthyear);

//Question #04 
var visitorName = "John Doe";
var producttittle = "\u00A0T-shirt(s)"; 
var quantity = 5;
document.write ("<br> <b>" + visitorName + "\u00A0<b>ordered<b>\u00A0" + quantity + producttittle + "\u00A0on XYZ Clothing store.")

//-------------------------------------------->->"CH-04"<-<----------------------------------------------//
//Question #01 Declare three variables in one statement.
var String = "Hello", NUMBER = 123, BOOLEAN = true;

//Question #02  Legal & Illegal Variable Names in JavaScript
//legal Variables Names:
var username;
var _age;
var $price;
var num123;
var camelcaseExample;

// 5 Illegal Variable Names (These will cause errors if used)
console.log ("5 Illegal Variable Names (These will cause errors if used)");

// var 123num;   //  Cannot start with a number
console.log("1 cannot start with a number; 123num");

// var my-variable;  //  Cannot contain hyphens
console.log ("2 Cannot contain hyphens; -");

// var var;   // Cannot use JS keywords
console.log ("3  Cannot use JS keywords var");

// var user name;  //  Cannot contain spaces
console.log ("4 Cannot contain spaces; user name ");

// var @price;  // Cannot contain special characters except $ and _
console.log ("5 Cannot contain special characters except $ and _;   @price");

//Question #03 Display this in your Browser
document.write("<h1>Rules for naming JS variables</h1>");
document.write("<p>Variable names can only contain <b>letters</b>, <b>numbers</b>, <b>$</b> and <b>_</b>. For example: <b>$my_1stVariable</b></p>");
document.write("<p>Variables must begin with a <b>letter</b>, <b>$</b>, or <b>_</b>. For example: <b>$name, _name</b> or <b>name</b></p>");
document.write("<p>Variable names are case <b>sensitive</b></p>");
document.write("<p>Variable names should not be JS <b>keywords</b></p>");

// -------------------------------------------CH-05--------------------------------------------

//Question #01
document.write("Ch:05 Q:01");
var num1 = 3;
var num2 = 5;
var sum = num1 + num2;
document.write ("<p>Sum of " + num1 + " & " + num2 + " is " + sum);

//for add
var num1 = 3;
var num2 = 5;
var subtraction = num1 - num2;
document.write ("<p>Subtraction of " + num1 + " & " + num2 + " is " + subtraction);

//for multiplication
var num1 = 3;
var num2 = 5;
var multiplication = num1 * num2;
document.write ("<p>multiplication of " + num1 + " & " + num2 + " is " + multiplication);

//for division
var num1 = 3;
var num2 = 5;
var division = num1 / num2;
document.write ("<p>division of " + num1 + " & " + num2 + " is " + division);

//for modulus
var num1 = 3;
var num2 = 5;
var modolus = num1 % num2;
document.write ("<p>modolus of " + num1 + " & " + num2 + " is " + modolus);

//Question #03
  // a. Declare a variable
  var myNumber;
  // b. Show the value after declaration
  document.write("Value after variable declaration is: " + myNumber + "<br>");

  // c. Initialize the variable with some number
  myNumber = 5;

  // d. Show the initial value
  document.write("Initial value: " + myNumber + "<br>");

  // e. Increment the variable
  myNumber++;

  // f. Show the value after increment
  document.write("Value after increment is: " + myNumber + "<br>");

  // g. Add 7 to the variable
  myNumber += 7;

  // h. Show the final value
  document.write("Value after addition of 7 is: " + myNumber);

  // Pehlay variable define karna hai
  let num = 13;

  // Decrement karna hai
  num--;

  // Browser per value show karni hai
  document.write("Value after decrement is: " + num + "<br>");

  // Remainder find karna hai
  let remainder = num % 3;

  // Remainder ko display karna hai
  document.write("The remainder is: " + remainder);

//Question # 04
var ticketPrice = 600;

// Total cost calculate karna (5 tickets)
var totalCost = ticketPrice * 5;

// Output show karna
document.write("<p>The cost of buying 5 movie tickets is: " + totalCost + " PKR");