

// Reuseable reset value function
function resetValue() {
    $("#user-input").val("");
};

// Main translation function, can translate any sentence or word
let camelCase = function (userInput = "") {
    let input = userInput.toLowerCase().trim().split(" ");
    console.log("INSIDE TRANSLATION Input: ", input, {input});
    console.log("INSIDE TRANSLATION Input type: ", typeof input);
    resetValue();
    let output = input.map(function (word) {
        return translateWord(word);
    });
    return output.join(" ");
};

// Main translation function, can translate any sentence or word
let sentenceCase = function (userInput = "") {
    let str = userInput;

    let lower = str.toLowerCase();
    
     // adding space between strings
    let result = lower.replace(/([A-Z])/g,' $1');
    
    // converting first character to uppercase and join it to the final string
    return result.charAt(0).toUpperCase()+result.slice(1);
    
   
};
// Translates logic for individual words
let translateWord = function (userInput = "") {
    let input = userInput.split("");
    console.log("Input: ", input, {input});
    console.log("Input type: ", typeof input);
    // let lower = userInput.toLowerCase();

    if(input.length>0){
        input[0] = input[0].toUpperCase();
    }
 
  return input.join('');

}

// Gathers input from form
$("#camel-case").submit(function (event) {
    event.preventDefault();
    console.log("I've been submitted!");
    // Reads input
    let userInput = $("#user-input").val();
    console.log("User Input: ", userInput);
    // Validate Inputs (if not vaild alerts and resets input)
    if (userInput.trim() === "") {
        alert("Please enter a vaild input.");
        resetValue();
        return;
    };

    // Display result to UI and UI state changes
    let camelCased = camelCase(userInput);
    let sentenceCased = sentenceCase(userInput);
    $("#result").show();
    $("#camel-case, #instructions").hide();
    $("#user-sentence").text(userInput);
    $("#camelOutput").text(camelCased)
    $("#sentenceOutput").text(sentenceCased)
});

// reset button and UI state changes
$(".reset").click(function () {
    $("#result").hide();
    $("#camel-case, #instructions").show();
    $("#user-sentence", "#camelOutput", "#sentenceOutput").empty();
    userInput = "";
});
