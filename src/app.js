function Winner() {
    let human = Winner.human
    let comp = 

    if (human > comp)console.log("You win.");
    if (human = comp)console.log("Draw");
    if console.log("You lose.")


}







    if {{   human == "rock" && comp == "scissors" ||
            human == "paper" && comp == "rock" ||
            human == "scissors" && comp == "paper" }
                console.log("You win!")} 

    if {  human == comp   }

    if console.log("You lose.")
}

function BMICalculator(){ 
};
BMICalculator.prototype.metric_bmi = function(obj) {
    let weight = obj.weight;
    let height = obj.height;
    if (weight > 0 && height > 0) {
      var finalBmi = weight / (height / 100 * height / 100);
      obj.bmiValue =  parseFloat(finalBmi.toFixed(2));
      setBMIMessage(obj);
        }
    };
    function setBMIMessage (obj){
        if (obj.bmiValue < 18.5) {
          obj.bmiMessage = "Underweight"
        }
        if (obj.bmiValue > 18.5 && obj.bmiValue < 25) {
          obj.bmiMessage = "Healthy"
        }
        if (obj.bmiValue > 25 && obj.bmiValue < 30) {
          obj.bmiMessage = "Overweight"
        }
        if (obj.bmiValue > 30) {
          obj.bmiMessage = "Obese"
        }
      }
