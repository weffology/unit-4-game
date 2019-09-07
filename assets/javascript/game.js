$(document).ready(function(){

    // Declare global variables
    var computerNumber = 0;
    var wins = 0;
    var losses = 0;
    var crytalValue1 = 0;
    var crytalValue2 = 0;
    var crytalValue3 = 0;
    var crytalValue4 = 0;
    var totalScore = 0;

    //Create function to choose random numbers between a range
    function getRandomNumber (min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }
    
    //Use getRandomNumber function above to generate the computer's number choice between 19 and 120
    var computerNumber = getRandomNumber(19,120);
    $("#computerNumber").html(computerNumber);

    //Use getRandomNumber function above to generate a random number between 1-12 for each crystal

})
