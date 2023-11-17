setInterval(function()
{

let chicagoElement = document.querySelector("#chicago");
if(chicagoElement){
let chicagoDateElement= chicagoElement.querySelector(".date");
let chicagoTimeElement= chicagoElement.querySelector(".time");


chicagoDateElement.innerHTML=moment().tz("America/Chicago").format("MMMM Do YYYY");
chicagoTimeElement.innerHTML=moment().tz("America/Chicago").format("h:mm:ss [<small>]A[</small>]");

}
let londonElement = document.querySelector("#london");
if(londonElement){
let londonDateElement= londonElement.querySelector(".date");
let londonTimeElement= londonElement.querySelector(".time");


londonDateElement.innerHTML=moment().tz("Europe/London").format("MMMM Do YYYY");
londonTimeElement.innerHTML=moment().tz("Europe/London").format("h:mm:ss [<small>]A[</small>]");
}
let dubaiElement = document.querySelector("#dubai");
if(dubaiElement){
let dubaiDateElement= dubaiElement.querySelector(".date");
let dubaiTimeElement= dubaiElement.querySelector(".time");


dubaiDateElement.innerHTML=moment().tz("Asia/Dubai").format("MMMM Do YYYY");
dubaiTimeElement.innerHTML=moment().tz("Asia/Dubai").format("h:mm:ss [<small>]A[</small>]");



}},1000);



function updateCity(event){
    let cityTimeZone = event.target.value;
    if(cityTimeZone==="current"){
        cityTimeZone = moment.tz.guess();
    }
 
    if (cityTimeZone!== "America/Santo_Domingo"){

   cityName=cityTimeZone.replace("_"," ").split("/")[1];}
    else{
    cityName="Punta Cana"
    }
    let cityTime = moment().tz(cityTimeZone);
    let citiesElement=document.querySelector("#cities");

    citiesElement.innerHTML=`
    <div class="city">
    <div>
    <h2>${cityName}</h2>
    <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
    </div>
    <div class="time"> ${cityTime.format("h:mm:ss")} <small>${cityTime.format("A")}</small></div>
    </div>`;

 
}


let citiesSelectElement=document.querySelector("#city");
citiesSelectElement.addEventListener("change",updateCity);


