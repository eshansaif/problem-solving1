        /**----> Problem number-1: Covert feet to mile <---- */

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

        /**---------------------End----------------------  */


        /**----> Problem number-2: Wood Calculator  <---- */

function woodCalculator(chair,table,bed) {

    if ((Math.sign(chair,table,bed) === -1)) {
        return "You must input a positive value!";
    }

    else if (isNaN(chair,table,bed) === true) {
        return "You must input a Numerical value! ";
    }
    
    else{
    var total = (chair * 1) + (table * 3) + (bed * 5);
     return total;
    }
}

var totalWood = woodCalculator(12, 4, 2);
console.log(totalWood);

         /**---------------------End----------------------  */


         /**----> Problem number-3: Brick Calculator  <---- */

function brickCalculator(floor) {
    var noOfBrick = 0;
    if (floor <=10 && floor >= 1) {
         noOfBrick = floor * (15 * 1000);
        return noOfBrick;

    }else if(floor <= 20 ){

        first10Floor = 10 * (15 * 1000);
        remaining = floor - 10;
        second10Floor = remaining * (12 * 1000);
        noOfBrick = first10Floor + second10Floor;
        return noOfBrick;

    }else if(floor >= 21){
        first10Floor = 10 * (15 * 1000);
        second10Floor = 10 * (12 * 1000);
        remaining = floor - 20;
        thirdRestFloor = remaining * (10 * 1000);
        noOfBrick = first10Floor + second10Floor + thirdRestFloor;
        return noOfBrick;
    }
}

var totalNoOfBrick = brickCalculator(12);
console.log(totalNoOfBrick);

        /**---------------------End----------------------  */


        /**----> Problem number-3: Find Shortest string from Array  <---- */

function tinyFriend(strArr) {

    var shortName = strArr[0];

    for (let i = 0; i < strArr.length; i++) {
        const element = strArr[i];

        if (element.length < shortName.length) {
            shortName = element;
        }    
    }
    return shortName;
}

var friendsNames = ["Eshan", "Evan", "Sumi", "Shanjeed", "Ali"];
var tinyFriendName = tinyFriend(friendsNames);
console.log(tinyFriendName);

        /**---------------------End----------------------  */







