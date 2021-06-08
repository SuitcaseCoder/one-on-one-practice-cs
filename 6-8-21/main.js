let bordPar = $(".border");
console.log(bordPar);
let redPar = $("#red");

// when the document is ready, change the font-color of the red Paragraph to red;
// make sure the document is fully loaded before we take further action


$(document).ready(function () {
    $("p").css("color","red").hide();
})

// when the button is clicked, display the information from the user
// event event listener - .onclick --> .click()
// //onclick probs takes in a function
// we'll need an alert --> alert()
// get value from input field --> input field, how do we get the value

let btn = $("#btn");
let userInput = $("input");
console.log(btn);
console.log(userInput); // returns empty string now because not waiting for a click to load the contents

btn.click(function() {
  // alert msg with user information
    console.log(userInput.val());
    alert(userInput.val());
});
