function updateTime() {
  let pretoriaElement = document.querySelector("#Pretoria");
  if (pretoriaElement) {
    let pretoriaDateElement = pretoriaElement.querySelector(".date");
    let pretoriaTimeElement = pretoriaElement.querySelector(".time");
    let pretoriaTime = moment().tz("South_Africa/Gauteng");

    pretoriaDateElement.innerHTML = pretoriaTime.format("MMMM	Do YYYY");
    pretoriaTimeElement.innerHTML = pretoriaTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  let capeTownElement = document.querySelector("#Cape-town");
  if (capeTownElement) {
    let capeTownDateElement = capeTownElement.querySelector(".date");
    let capeTownTimeElement = capeTownElement.querySelector(".time");
    let capeTownTime = moment().tz("South_Africa/Western_cape");

    capeTownDateElement.innerHTML = capeTownTime.format("MMMM	Do YYYY");
    capeTownTimeElement.innerHTML = capeTownTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></div>
  </div>
  `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
