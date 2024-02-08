var inputvalue = document.querySelector("#cityinput");
var btn = document.querySelector("#add");
var city = document.querySelector("#cityoutput");
var descrip = document.querySelector("#description");
var temp = document.querySelector("#temp");
var wind = document.querySelector("#wind");
var apik = "3444215ceea9da0a4f987981fb098f69";
function convertion(val){
  return (val - 273).toFixed(3);
}

btn.addEventListener('click', function()
{
  fetch("https://api.openweathermap.org/data/2.5/weather?q=" +inputvalue.value +"&appid=" +apik)
    .then((res) => res.json())

    .then((data) =>
     {
      var nameval = data["name"];
      var descrip = data["weather"][0]["description"];
      var temperature = data["main"]["temp"];
      var windspeed = data["wind"]["speed"];

      city.innerHTML = ` Weather of <span> ${nameval} </Sspan>`;
      temp.innerHTML = `Temperature : <span> ${convertion(temperature)} ºC</span>`;
      description.innerHTML = `Sky Conditions :  <span> ${descrip} </span> `;
      wind.innerHTML = ` Wind Speed : <span>${windspeed} Km/h </span> `;
    })

    .catch((err) => alert("You have entered wrong city name"))
});
