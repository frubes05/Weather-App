class UI {
  constructor() {
    this.container = document.querySelector(".content");
  }

  showInfo(data) {

    let widget=data.weather[0].icon;

    this.container.innerHTML = `

        <div>
            <div class="inner">
                </br>
                <span class="grad">${data.name}</span></br>
                <img class="slika" src='http://openweathermap.org/img/wn/${widget}.png'/></br>



                <span class="temp">${data.main.temp}°C</span></br>

                <span class="opis">${data.weather[0].description}</span></br>

            </div>
        </div>

        `;
    this.container.style.display="block";
  }


}
