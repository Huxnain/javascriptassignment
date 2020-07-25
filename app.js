//********************************* chapter 21 - 25 *********************************

// task 1

// var first = prompt("Enter First Name");
// var last = prompt("Enter last Name");
// var fullname = alert("hello "+first+" "+last);

// task 2

// var first = prompt("fav mob model ??");
// document.write("mobile model : "+first);
// document.write("<br>string length = "+first.length);

// task 3

// var str = "Pakistan";
// var n = str.indexOf("n");
// document.write(n);

// task 4

// var str = "hello world";
// var n = str.lastIndexOf("l");
// document.write(n);

// task 5

// var str = "pakistani";
// var n = str.charAt(str.length-6);
// document.write(n);

// task 6

// var first = prompt("Enter First Name");
// var last = prompt("Enter last Name");
// var fullname = first.concat(" "+last);
// document.write("hello "+fullname);

// task 7

// var str = "hyderabad";
// var res = str.replace("hyder", "islam");
// document.write(res);

// task 8

// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var res = message.replace("and", "&");
// document.write(res);


// task 9

// var str ="472";
// var num =472;
// document.write("string"+str);
// document.write("<br>number "+num);

// task 10

// var user = prompt("write your name");
// document.write(""+user.toUpperCase());

// task 11

// var user = prompt("write your name");
// document.write(""+user.toLowerCase());


//***********************************************************************************
//********************************* chapter 26 - 30 *********************************

// task 1

// var user = prompt("write a positive integer");
// document.write("<br>Number "+user);
// document.write("<br>round off value "+Math.round(user));
// document.write("<br>floor value "+Math.floor(user));
// document.write("<br>ceil value "+Math.ceil(user));

// task 2

// var user = prompt("write a negative integer");
// document.write("<br>Number "+user);
// document.write("<br>round off value "+Math.round(user));
// document.write("<br>floor value "+Math.floor(user));
// document.write("<br>ceil value "+Math.ceil(user));

// task 3

// var user = prompt("write a integer");
// document.write("<br>absolute value "+Math.abs(user));

// task 4

// var n = Math.floor( Math.random() * 6 );
// document.write(n);

// task 5

// var n = Math.floor( Math.random() * (1,3) );
// if(n===1){
// document.write(n+"<br>random coin value: tails");
// }else if(n===2){
//     document.write(n+"<br>random coin value: heads");
// }

// task 6

// var n = Math.floor( Math.random() * (1,100) );
// document.write(n);


//***********************************************************************************
//********************************* chapter 31 - 34 *********************************

// task 1

// var n = Date();
// document.write(n);

// task 2

// var d = new Date();
// var n = d.getMonth();

// if(n==0){
//     alert("jan");
//  }else if(n==1){
//     alert("feb");
//  }else if(n==2){
//     alert("mar");
//  }else if(n==3){
//     alert("apr");
//  }else if(n==4){
//     alert("may");
//  }else if(n==5){
//     alert("june");
//  }else if(n==6){
//     alert("july");
//  }else if(n==7){
//     alert("aug");
//  }else if(n==8){
//     alert("sep");
//  }else if(n==9){
//     alert("oct");
//  }else if(n==10){
//     alert("nov");
//  }else if(n==11){
//     alert("dec");
//  }

// task 3 

// var d = new Date();
// var weekday = new Array(7);
// weekday[0] = "Sun";
// weekday[1] = "Mon";
// weekday[2] = "Tue";
// weekday[3] = "Wed";
// weekday[4] = "Thu";
// weekday[5] = "Fri";
// weekday[6] = "Sat";

// var n = weekday[d.getDay()];
// alert(n);

// task 4 

// var d = new Date();
// var weekday = new Array(7);
// weekday[0] = "It’s Fun day";
// weekday[1] = "Mon";
// weekday[2] = "Tue";
// weekday[3] = "Wed";
// weekday[4] = "Thu";
// weekday[5] = "Fri";
// weekday[6] = "It’s Fun day";

// var n = weekday[d.getDay()];
// alert(n);

// task 5

// var d = new Date();
// var n = d.getDate();
// if(n<16){
// alert("First fifteen days of the month");
// }else{
//     alert("Last days of the month");
// }

// task 6

// var d = new Date();
// var n = d.getHours();
// if(n<13){
//     alert("its AM");
// }else{
//     alert("its PM");
//  }

// task 7

// var p = prompt("enter your age"); 
// var d = new Date();
// var n = d.getFullYear();
// var res = n - p;
// document.write("your age is "+p+"\n and your birth year is "+res);

//***********************************************************************************
//********************************* chapter 35 - 38 *********************************

// task 1

// function dateandtime(){
//     var n = Date();
//     document.write(n);
// }
// dateandtime();

// task 2 

// function greet(){
//     var f = prompt("enter your first name"); 
//     var l = prompt("enter your last name"); 
//     alert("Hello "+f+ " "+l);
// }
// greet();

// task 3

// function sum(){
//     var f = +prompt("enter first num"); 
//     var s = +prompt("enter second num"); 
//     var res = f+s;
//     document.write("sum of both numbers is "+res);
// }
// sum();

// task 4

// function cal(){
//     var f = +prompt("enter first num"); 
//     var s = +prompt("enter second num"); 
//     var o = prompt("enter desire operator + - * /"); 
//     if(o==="+"){
//         var res = f+s;
//     }else if(o==="-"){
//         var res = f-s;
//     }else if(o==="*"){
//         var res = f*s;
//     }else if(o==="/"){
//         var res = f/s;
//     }else{
//         alert("wrong operator");
//     }
    
//     document.write("your desire operator result is "+res);
// }
// cal();

// task 5

// function sqr(){
//     var f = +prompt("enter num to get its square root"); 
//     var res = f*f;
//     document.write(res);
// }
// sqr();

// task 6

// function factorialize() {
//     var num = +prompt("enter num to get its factorial");
//     if (num === 0 || num === 1)
//      document.write();

//     for (var i = num - 1; i >= 1; i--) {
//       num = num * i; 
//     }
//     document.write(num);
//   }

//   factorialize();


// task 7 

// function counting() {
//     var start = +prompt("enter num where u want to start a counting");
//     var end = +prompt("enter num where u want to end a counting");

//     for (var i = start ; i <= end; i++) {
//         document.write(i+"<br>");
//     }
    
//   }

// counting();

// task 8 

// function areaofrect() {
//     var width = prompt("enter a width of rectangle");
//     var height = prompt("enter a height of rectangle");

//     var a = width * height;
//     document.write(a);
//   }

// areaofrect()

//***********************************************************************************
//********************************* chapter 38 - 42 *********************************

// task 1

// function power(){

//   var x,n;
//   x = prompt("enter a x");
//   n = prompt("enter a n");
//   var i, p=1;
//   for(i=1;i<=n;i++)
//   p*=x;
//   return p;  
// }
// document.write("Power= ",power());

// task 2

// function leapYear(){
//   year = prompt("enter a x");
//   if(((year % 4 == 0) && (year % 100 != 0)) || ( (year % 400 == 0))){
//     document.write("leap");
//   }else{
//     document.write("not leap");
//   }
// }

// leapYear();

// task 3

// function main(){
//   var sub1 = +prompt("enter a sub1 marks");
//   var sub2 = +prompt("enter a sub2 marks");
//   var sub3 = +prompt("enter a sub3 marks");

//   var total = +prompt("enter a total marks of 3 subjects");

//   var avg = sub1+sub2+sub3/3.0;
//   var per = (avg/total)*100;
  
//   document.write("average marks = "+avg+"<br> percentage = "+per);

// }

// main();


// task 4

// function removeVowels(){
//   var input = prompt("enter a sub1 marks");
//   var p = input.replace(/[aeiouAEIOU]/g, "");
//   document.write(p);
// }

// removeVowels();

// task 5

// function convert(){
//   var input = +prompt("enter distance between two cities (in km.)");
//   var meter,feet,inch,centimeter;
//   meter = input * 1000;39370
//   feet = input * 3280.84;
//   inch = input * 39370;
//   centimeter = input * 100000;
//   document.write("distance in meter is "+meter+"<br>distance in feet is "+feet+"<br>distance in inches is "+inch+"<br>distance in centimeters is "+centimeter);
// }

// convert();

//task 6

// function notecal()
// {
// 	var amount = prompt("Please input amount for withdraw : ");

// 	document.write("<br>Required notes of Rs. 100  :  "+(amount/100));
// 	document.write("<br>Required notes of Rs. 50   :  "+(amount%100)/50);
// 	document.write("<br>Required notes of Rs. 10   :  "+(((amount%100)%50)/10));
// 	document.write("<br>Amount still remaining Rs. :  "+(((amount%100)%50)%10));
	
// }
// notecal();

//***********************************************************************************
//********************************* chapter 43 - 48 *********************************

// task 1

// function clickme(){
//     alert("this is alert");
// }

// task 2

// function clickme(){
//     alert("thanks for purchasing");
// }

// task 4

// function changePic1() {
//     document.getElementById("myImg").src = "http://res.cloudinary.com/vishakhanehe/image/upload/v1481149848/mickeywaving_ttphnm.gif";
//        }
//       function changePic22(){
//        document.getElementById("myImg").src = "http://res.cloudinary.com/vishakhanehe/image/upload/v1481149848/obama1_c1buc6.jpg";
//        }

//***********************************************************************************
//********************************* chapter 49 - 52 *********************************

// task 1

// function clickme(){

//     var f = document.getElementById("fn").value;
//     var l = document.getElementById("ln").value;
//     var u = document.getElementById("un").value;
//     var p = document.getElementById("ps").value;

//     document.getElementById("fnn").innerHTML = f;
//     document.getElementById("lnn").innerHTML = l;
//     document.getElementById("unn").innerHTML = u;
//     document.getElementById("pss").innerHTML = p;

// }

// task 2 

// function myFunction() {
//     var dots = document.getElementById("dots");
//     var moreText = document.getElementById("more");
//     var btnText = document.getElementById("myBtn");
  
//     if (dots.style.display === "none") {
//       dots.style.display = "inline";
//       btnText.innerHTML = "Read more"; 
//       moreText.style.display = "none";
//     } else {
//       dots.style.display = "none";
//       btnText.innerHTML = "Read less"; 
//       moreText.style.display = "inline";
//     }
//   }

//***********************************************************************************
//********************************* chapter 58 - 67 *********************************
