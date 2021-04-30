//inst classes//

const fetchaj = new Fetch();
const info = new UI();

//add event listeners//

const userInput = document.querySelector(".userInput");
const button = document.querySelector(".gumb");
button.addEventListener("click", (e) => {
  let vrijednost = userInput.value;

  fetchaj.dohvati(vrijednost).then((data) => {

    info.showInfo(data);

  });

  e.preventDefault();
});
