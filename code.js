///////////////////if condition 
// task one 1
/*
let num = 9; // "009" ;
// let num = 20; // "020"
// let num = 110; // "110"

if(num < 10){
    console.log(`00${num}`)
}else if(num > 10 && num < 100){
    console.log(`0${num}0`)
}else if(num >= 100){
    console.log(num)
}

*/

// task tow 2
/*
let num1 = 9;
let str = "9";
let str2 = "20";

if(num1 == str){
    console.log("{num1} Is The Same Value As {str}")
}
if(typeof(num1) !== typeof(str) && num1 == str){
    console.log("{num1} Is The Same Value As {str} But Not The Same Type")
}
if(typeof(num1) !== typeof(str2) && num1 !== str2){
    console.log("{num1} Is Not The Same Value Or The Same Type As {str2}")
}
if(typeof(str) == typeof(str2) && str !== str2){
    console.log("{str} Is The Same Type As {str2} But Not The Same Value")
}
*/



// task three 3
/*
let num1 = 10;
let num2 = 30;
let num3 = "30";

// Needed Output
"30 Is Larger Than 10 And Type string Not The Same Type As number"
"30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number"
"{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}"

if(num3 > num1 && typeof(num3) !== typeof(num2) && num3 > num1 && num3 == num2 && typeof(num3) !== typeof(num1) && num3 !== num1 && typeof(num3) !== typeof(num1) && typeof(num3) !== typeof(num2)){
    console.log(
        `
            "30 Is Larger Than 10 And Type string Not The Same Type As number"
            "30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number"
            "{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}"
        `
)
}
*/

// task four 4

// Edit What You Want Here

/*
let num1 = 11;
let num2 = 10;
let num3 = 11;
let num4 = 33;

// Condition 1

if (num1 > num2) {
    console.log("True");
} else {
    console.log("False");
}

// Condition 2

if (num1 > num2 && num1 < num4) {
    console.log("True");
} else {
    console.log("False");
}

// Condition 3

if (num1 > num2 && num1 === num3) {
    console.log("True");
} else {
    console.log("False");
}

// Condition 4

if ((num1 + num2) < num4) {
    console.log("True");
} else {
    console.log("False");
}

// Condition 5

if ((num1 + num3) < num4) {
    console.log("True");
} else {
    console.log("False");
}

// Condition 6

if ((num1 + num2 + num3) < num4) {
    console.log("True");
} else {
    console.log("False");
}

// Condition 7

if (num4 - (num1 + num3) + num2 === 21) {
    console.log("True");
} else {
    console.log("False");
}

console.log(num4 - (num1 + num3) + num2) // === 21
*/

////////////////////////// switch
/*
let day =""
day = "   tuesday  ";
day =day.trim().charAt(0).toUpperCase() + day.trim().slice(1)


switch (day){
    case "Friday":
    case "Saturday":
    case "Sunday":
        console.log("No Appointments Available")
        break;
    case "Monday":
    case "Thursday":
        console.log("From 10:00 AM To 5:00 PM")
        break;
    case "Tuesday":
        console.log("From 10:00 AM To 6:00 PM")
        break;
    case "Wednesday":
        console.log("From 10:00 AM To 7:00 PM")
        break;
    default: console.log("Its Not A Valid Day")

}
*/

//////// array


/*
let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1
myFriends.pop()
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

// Method 2
myFriends.length =num
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];
*/

/*
let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// Write Your Code Here

friends.pop()
friends.shift()
console.log(friends); // ["Eman", "Osama"]
*/

/*
let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

// Write One Single Line Of Code
finalArr=arrOne.concat(arrTwo).sort().reverse()
console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]
*/





/*
let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(words.pop()[0].slice(website.length).toUpperCase()); // ZERO
*/



let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solution

for(let i=0; i<=haystack.length; i++){
    if(haystack[i] = needle){
        console.log("found")
    }else{
        console.log(haystack);
    }
}












































