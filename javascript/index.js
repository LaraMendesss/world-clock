setInterval(function()
{

let miamiElement = document.querySelector("#miami");
let miamiDateElement= miamiElement.querySelector(".date");
let miamiTimeElement= miamiElement.querySelector(".time");


miamiDateElement.innerHTML=moment().tz("America/Miami").format("MMMM Do YYYY");
miamiTimeElement.innerHTML=moment().tz("America/Miami").format("h:mm:ss [<small>]A[</small>]");


let londonElement = document.querySelector("#london");
let londonDateElement= londonElement.querySelector(".date");
let londonTimeElement= londonElement.querySelector(".time");


londonDateElement.innerHTML=moment().tz("Europe/London").format("MMMM Do YYYY");
londonTimeElement.innerHTML=moment().tz("Europe/London").format("h:mm:ss [<small>]A[</small>]");

},1000);