document.getElementById("center").style.width = "40%";
document.getElementById("center").style.height = "70vh";
document.getElementById("center").style.margin = "auto";
document.querySelector("#center").style.backgroundColor = "rgb(39, 39, 226)";
document.getElementById("center").style.borderRadius = "10px";
document.getElementById("center").style.color = "white";
document.getElementById("center").style.fontSize = "25px";
document.querySelector("#center").style.padding = "15px";

let teamName = "Zues"
var memberName = ["Tolu", "Luchi", "HayJ", "OreOluwa", "Etionsa", "Simple_soul", "Mavdavis", "TJ", "Khalid"]


document.getElementById("team").innerHTML = "Group Name:" + " " + teamName;
document.getElementById("member1").innerHTML = "1: " + memberName[0];
document.getElementById("member2").innerHTML = "2: " + memberName[1];
document.getElementById("member3").innerHTML = "3: " + memberName[2];
document.getElementById("member4").innerHTML = "4: " + memberName[3];
document.getElementById("member5").innerHTML = "5: " + memberName[4];
document.getElementById("member6").innerHTML = "6: " + memberName[5];
document.getElementById("member7").innerHTML = "7: " + memberName[6];
document.getElementById("member8").innerHTML = "8: " + memberName[7];
document.getElementById("member9").innerHTML = "9: " + memberName[8];

// Question 2
let teamMember = ["Simple_soul", "Tolu", "Luchi", "HayJ", "OreOluwa", "Etionsa", "Mavdavis", "TJ", "Khalid"];
console.log(teamMember[2]);


//Question 3
const zeus = {
    firstName: "Chukwu", 
    lastName: "Cynthia",
    bestMovie: "Morbius",
    bestFood: "Fufu and Egusi",
    complexion: "Fair",
    birthMonth: "May",
    state: "Anambra",
    groupName: " Team Zeus",
}

console.log(zeus["bestMovie"]);

//Question 4
const myNoun1 = "Cynthia";
const myVerb1 = "sleep";
const myAdjective1 = "sweet";

console.log(myNoun1 + " is " + myAdjective1);
console.log(myVerb1 + " is " + myAdjective1);
console.log(myNoun1 + " can " + myVerb1);
console.log(myNoun1 + " " + myVerb1 + " under the tree ");
console.log(myNoun1 + " seems like a " + myAdjective1 +  " soul ");

// Question 5

function division(num1, num2) {
    console.log((num1 % num2));
}

division(5, 2);

//Question 6

//(-b +- squareroot((b * b) - 4ac)) / 2a;

function quadraticEquation (a, b, c) {
    x1 = (-b + Math.sqrt((b**2) - (4 * a * c))) / 2 * a;
    x2 = (-b - Math.sqrt((b**2) - (4 * a * c))) / 2 * a;
    return {x1, x2};
}

console.log(quadraticEquation(1, 5, 6));


//  Question 7

const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quicly";
const wordBlanks = " ";

console.log("the" + wordBlanks + myAdjective + wordBlanks + myNoun + wordBlanks + myVerb + wordBlanks + myAdverb);



//Question 8

function areaofACircle(r) {
    const PI = 3.142;
    const areaCircle = PI * (r**2);
    return areaCircle;
}

console.log(areaofACircle(9).toFixed(2));

//Question 9

function calculateSimpleInterest(principal, rate, time) {
    simpleInterest = (principal * rate * time) / 100;
    return simpleInterest;
}

console.log(calculateSimpleInterest(8200, 17.5, 2.5));

//Question 10

console.log(10 % 4)

//Question 11

const meritHigherBMI = "Merit has a higher BMI";
const nutJobHigherBMI = "NutJob has a higher BMI";

function calculateBmi(mass, height) {
    const BMI = mass / (height ** 2);
    return BMI;
}

meritBMI1 =calculateBmi(78, 1.69);
nutJobBMI1 = calculateBmi(92, 1.95);

if (meritBMI1 > nutJobBMI1) {
    console.log(meritHigherBMI + " has " + Math.round(meritBMI1));
}
else {
    console.log(nutJobHigherBMI + " has " + Math.round(nutJobBMI1));
}

meritBMI2 =calculateBmi(85, 1.76);
nutJobBMI2 = calculateBmi(95, 1.88);

if (meritBMI2 > nutJobBMI2) {
    console.log(meritHigherBMI + " has " + Math.round(meritBMI2));
}
else {
    console.log(nutJobHigherBMI + " has " + Math.round(nutJobBMI2));
}