        /** Problem number-1: Covert feet to mile Start */

function feetToMile(feet) {
    if (Math.sign(feet) == -1) {
        return "You cannot input a Negative Value!";
    }

    else if (isNaN(feet) == true) {
        return "You must input a Numerical value! ";
    }
    
    else{
        var result =  feet * 0.000189394;
        return result.toFixed(2);
    }
       
}

var feetResult = feetToMile(-50000);
console.log(feetResult);

        /**Problem number-1: Covert feet to mile End */




