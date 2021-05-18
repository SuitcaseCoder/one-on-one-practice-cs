let school = {
    teacher: "sara",
    students: 34,
    name: 'awesome school of greatness',
    // functions being stored inside of objects are called methods
    makeLunch: function () {
        console.log("it's lunchtime!");
    },
    lunch: 'delicious'
};

console.log(school.makeLunch());

let bom = {
    setTimeout: function () {
        // delays action being passed in by X amt of time
        //    what ac
    }
};

// 1. select HTML element -- either by the TYPE of element, by its
// class name or by its id name
// 2. which method do you want to use from bom/dom
// 3. now that you have your element selected and your method in place,
// how do you want your code to HANDLE this event/method

//
// var dom = {
//
// }

// //  FUNCTION PRACTICE

//rainFall is being executed when it's getting passed into my
// sayWeather function as an argument
function rainFall (fall){
    console.log(fall);
    return `${fall} is falling from the sky`; // x is falling from the sky
}


function sayWeather(place, temp, clothes, sky) {
    console.log(sky);
    // sky is the result of my rainFall function

    console.log(`The weather in ${place} is nice. It's currently ${temp} 
    degrees outside. You should maybe wear a ${clothes}. ..... and there is ${sky}`);
}

console.log(sayWeather("San Antonio", 60, 'sweater', rainFall('rain')))