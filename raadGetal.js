let number2guess = Math.floor(Math.random() * 10)+ 1;
let numberGuessed;

do {
    numberGuessed = parseInt(prompt("Raad het getal (1 tot en met 10)"), 10); 

    if (numberGuessed === number2guess) {
        alert("Gewonnen!");
    } else {
       
        if (numberGuessed < number2guess) {
            alert("L gepakt! Het juiste getal is hoger. Probeer het opnieuw!");
        } else {
            alert("L gepakt! Het juiste getal is lager. Probeer het opnieuw!");
        }
    }
} while (numberGuessed !== number2guess); 
