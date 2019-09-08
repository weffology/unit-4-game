$(document).ready(function(){
    // Declare global variables
    var computerNumber = 0;
    var wins = 0;
    var losses = 0;
    var crystalValue1 = 0;
    var crystalValue2 = 0;
    var crystalValue3 = 0;
    var crystalValue4 = 0;
    var totalScore = 0;  
    
    //Create a reset function that can be called on page load or when number exceeds computer choice
    function reset () {
    
        //Create function to choose random numbers between a range
        function getRandomNumber (min, max) {
            return Math.floor(Math.random() * (max - min + 1) ) + min;
        } 
        
        //Generate and push out a fresh computer number
        computerNumber = getRandomNumber(19,120);
        $("#computerNumber").text(computerNumber);

        //Clear total score value
        totalScore = 0;
        $("#score").text(0);

        //Update number of wins & losses
        $("#wins").text(wins);
        $("#losses").text(losses);

        //Generate and push out a fresh value for crystal #1
        crystalValue1 = getRandomNumber(1,12);
        $("#crystal-1").val(crystalValue1);
        
        //Generate and push out a fresh value for crystal #2
        crystalValue2 = getRandomNumber(1,12);
        $("#crystal-2").val(crystalValue2);
        
        //Generate and push out a fresh value for crystal #3
        crystalValue3 = getRandomNumber(1,12);
        $("#crystal-3").val(crystalValue3);

        //Generate and push out a fresh value for crystal #4
        crystalValue4 = getRandomNumber(1,12);
        $("#crystal-4").val(crystalValue4);
    }
    
    //Call the reset function on page load
    reset();

    //Create a function that will run when the crystals are clicked
    function crystalClick () {
        var clickNumber = $(this).val();
        totalScore = parseInt(totalScore) + parseInt(clickNumber);
        $("#score").text(totalScore);
        if (totalScore === computerNumber) {
            wins++;
            reset();
        }
        else if (totalScore > computerNumber) {
            losses++;
            reset();
        }
    }

    //Create event listener that will run crystalClick function when each crystal is clicked.
    $(".crystal-icon").click(crystalClick);
    
})
