// objects

let car = {
    // color, year, make, model
    // property: value
    color: "blue",
    year: 2005,
    make: "lexus",
    model: "ls123",
    // this is an array of people, there are . each person is being
    // saved as a string value, there are 5 items in the array but the
    // index starts at 0 so it goes up to index 4. steve = index 0,
    // mike = index 4.
    prevOwners: ["steve", 'mary', 'joe', 'joann', 'mike'],
    isUsed: true,
    //method
    makeDrive: function(){
        console.log("the car is going")
    }

}
//
// let actualYear = car.year + 2;
// console.log(typeof car.year);
// console.log(actualYear);

//this will print out the 2nd index of the prevOwners array within the
// car object
// console.log(car.prevOwners[2]);


// Arrays

// array of objects == nesting objects inside of an array

// let arr = [3, 6, 7,8, 0] // 5 elements, up to index 4
//
// let weather = [
//     // index zero, element one
//     {day: "Monday",
//         temp: 67,
//         isRain: true,
//         perc: 'rain',
//         isSunny: false
//     },
//     // index one, element two
//     {day: "Tuesday", temp: 73, isRain: true, perc: 'rain', isSunny: false},
//     // index two, element three
//     {day: "Wednesday", temp: 84, isRain: false, perc: 'none', isSunny: true},
//     {day: "Thursday", temp: 42, isRain: true, perc: 'snow', isSunny: false}
// ];



// // print out 3rd element from our weather array --> 2nd index
// console.log(weather[2]);
//
// // print out whether it's raining on the 1st element // 0 index;
// console.log(weather[0].isRain);

// print out all the temperatures from all the objects from our weather
// array

// for loop - an easier way to get values from every element inside any
// array

// 1) loop through array --> which will give us each element
// individually, which in the weather array is going to be each object
// individually

// let i = 0 --> start at index 0 of the array
// i <= array.length --> keep going until you reach below or exactly at
// the end of the array
// increment by one
// console.log(weather.length); // 4
// looping through indexes not number of elements (length)
// for(let i = 0; i < weather.length; i++){
//     // 2) now that you're looping through every item, you realize that
//     // what we get back is one object
//
//     console.log(`new iteration returning new elemtn in the array - object: `);
//     // this prints out weather array at the index that the loop is
//     // currently on
//     // array[i] --> similar to calling the object by its name
//     // 3) now that we have each object (weather[i] we use dot notation
//     // to get values from inside of that object
//     console.log(weather[i].temp);
//
// //    4) because we're in a for loop, it's going to get that value from
//     //    every object until we reach the end of the array
//
// }


// objects --> label makers , labeled folders
// arrays - filing cabinets

let sports = [
    {sport: "soccer", day: "Tuesdays", price: 150, rating: 10},
    {sport: "tennis", day: "Wednesdays", price: 250, rating: 8},
    {sport: "basketball", day: "Mondays", price: 1350, rating: 4},
    {sport: "swimming", day: "Sundays", price: 75, rating: 2},

]

// write a function that returns an array with all the prices

// 0. create a function and name it "returnAllPrices" (make sure to add
// a parameter for the array you will be passing in --> remember that a
// parameter is nothing but a placeholder name for the value to be
// passed in -- this will make sense on step 7.)
// 1. create an empty array and save it to a variable, so that you can
// push (add) your prices of each object ot it and then return just
// that
// 2. loop through array
// 3. print out what we're working with within the loop
// 4. get the value of the price of the object we're currently on
// (remember we'd be dealing with array[i] --> since we're looping
// through and starting at i = 0 (index == 0) which means array[i] ==
// array[index we're currently on] ... if we're using a for loop
// 5. push that value to our empty array --> this will add the current
// price we're on, to our array (that's living outside of our for loop)
// and now our array is basically collecting the prices as we loop
// through all the objects
// 6. once the loop is completed, return that new array
// 7. execute your function and pass in the array as an argument --
// remember that the array is coming for the array's actual name.


// Now do it again using forEach method ...




