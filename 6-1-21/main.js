// syntax

// let jQueryObject = {
//     hide: function(){
//         // hides stuff
//     },
//     show: function(){
//     //    shows stuff
//     }
// }

// jquery.nameOfMethod();

//$ === jqueryObject
// "selector" === whatever element on the document that we want to manipulate
// selectors always have to be in quotes
// you can select by Tag name, by id , by class
// console.log("before hide");
// $("h1").hide();
// console.log("after hide");
//
// console.log("before show");
// $("h1").show();
// console.log("after show");
//
// // select by id
// $("#hide").hide();
//
// //select by class
// $(".blue").hide();


// functions as arguments
// function daysOfWeek(){
//     return "Tuesday";
// }
//
// function logDate(getDay){
//     let currentDayOfWeek = getDay
//     // Date() is an existing JS function/method that returns an object that displays the date
//     // by calling "new" Date() we're creating a new instance of that Date() object with the
//     // CURRENT time and date
//     console.log(new Date());
//     return currentDayOfWeek;
// };
//
// console.log(logDate(daysOfWeek()));

// document.ready() --jQuery function tell us when the dom is finished loading
// we'll be passing in a function into the method as an argument
// $(document).ready( //... run this code )

// $(document).ready(function () {
//     console.log("our document is now ready. print this line out")
// })

// let's break up the above example
// 1. $(document) - selecting the DOM
// 2. ready() is a method that we're getting from our pre-existing jquery object
// 3. we are passing in a brand new function, which we're both defining and executing, as an
// argument to our ready method.
// 3. ready() method is accepting a function as an argument
// 3. ready method is going to execute the function being passed in once the document (dom) is
// "ready" or finished loading.
// 4. the function being passed in is what will be executed when the document is ready
// 4. ready is specific to when the dom is finished loading, but there will other methods that
// will execute function being passed in when X method is true/called

// hide h1 only when the h1 is clicked on
// 1. selected element that will be listening for an event
// 2. what event(method) are we applying to that selected element from our dom
// 3. what function (if any) will be executed when that selected element hears the method stated
// $("h1").click(function () {
//     console.log("h1 was clicked");
//     $("h1").hide();
//     console.log("h1 was hidden");
// })

// //
// passing functions as arguments

