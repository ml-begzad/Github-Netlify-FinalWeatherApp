function showCityTemp(response) {
  console.log(response.data);
  let temp = Math.round(response.data.temperature.current);
  let deg = document.querySelector("#degree");
  deg.innerHTML = `☀️${temp}°C`;
  let countryName = document.querySelector("#header1-countryName");
  countryName.innerHTML = `${response.data.city}`;
}
function showSearchItem(event) {
  event.preventDefault();
  let getSearchInput = document.querySelector(".searchInput");

  // loading actual temperature using axios...........
  let ApiKey = "129d4of0f9b211a0bda998b26baata31";
  let city = getSearchInput.value;
  let url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${ApiKey}`;
  axios.get(url).then(showCityTemp);
}
let getSearchId = document.querySelector(".searchBtn");
getSearchId.addEventListener("click", showSearchItem);

function showCurentDate() {
  let now = new Date();
  let days = [
    "Saturday",
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
  ];
  let day = days[now.getDay()];
  let gettime = document.querySelector(".showDate");
  return (gettime.innerHTML = `${day} ${now.getDate()}, ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`);
}

showCurentDate();
