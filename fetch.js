class Fetch {
  async dohvati(input) {
    let myKey = "790566d5558fa45b714e8a8e9a351e42";

    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${myKey}&units=metric`);

    let data = await response.json();

    return data;
  }
}
