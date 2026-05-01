var textbox = document.getElementById("textbox");

var toFahrenheit = document.getElementById("toFahrenheit");

var toCelsius = document.getElementById("toCelsius");

var result = document.getElementById("result");

let temp;




function convert(){

    if(toFahrenheit.checked){

        temp = textbox.value;

        temp = temp * 9 / 5 + 32;

        result.textContent = temp + "°F"

    }
    else if (toCelsius.checked){
        temp = textbox.value;
        temp = (temp - 32) *  (5 / 9);
        result.textContent = temp + "°C"

        
    }

    else{
        result.textContent = "Select a unit";
    }


}