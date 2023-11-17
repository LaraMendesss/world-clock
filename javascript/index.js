setInterval(function()
{

let recifeElement = document.querySelector("#recife");
if(recifeElement){
let recifeDateElement= recifeElement.querySelector(".date");
let recifeTimeElement= recifeElement.querySelector(".time");


recifeDateElement.innerHTML=moment().tz("America/Recife").format("MMMM Do YYYY");
recifeTimeElement.innerHTML=moment().tz("America/Recife").format("h:mm:ss [<small>]A[</small>]");

}
let londonElement = document.querySelector("#london");
if(londonElement){
let londonDateElement= londonElement.querySelector(".date");
let londonTimeElement= londonElement.querySelector(".time");


londonDateElement.innerHTML=moment().tz("Europe/London").format("MMMM Do YYYY");
londonTimeElement.innerHTML=moment().tz("Europe/London").format("h:mm:ss [<small>]A[</small>]");

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
