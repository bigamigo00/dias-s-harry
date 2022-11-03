const card = document.querySelector(".card");
const input = document.querySelector("input");
let serchingValue = "";
const btns = document.querySelectorAll("button");
import { image_gender } from "./utils/calculations.js";
import { TrueorFalse } from "./utils/calculations.js";
import { banner } from "./utils/calculations.js";
import { fetchData } from "./api/FetchData.js";
let dataFetched,
  word_Data,
  Fetched,
  Gryffindor_Data,
  Slytherin_Data,
  Hufflepuff_Data,
  Ravenclaw_Data;

(async () => {
  Fetched = await fetchData();
  dataFetched = Fetched;
  Gryffindor_Data = await Fetched.filter((e) => e.house === "Gryffindor");
  Slytherin_Data = await Fetched.filter((e) => e.house === "Slytherin");
  Hufflepuff_Data = await Fetched.filter((e) => e.house === "Hufflepuff");
  Ravenclaw_Data = await Fetched.filter((e) => e.house === "Ravenclaw");

  input.addEventListener("keydown", (e) => {
if (e.key === "Enter") {
  serchingValue = e.target.value;
    card.innerHTML = "";
    word_Data = Fetched.filter((e) =>
      e.name.toLocaleLowerCase().includes(serchingValue.toLocaleLowerCase())
    );
dataFetched= word_Data;
    dataFetched.forEach((el) => {
      card.innerHTML +=
        `<div class = "character">` +
        banner(el) +
        `<h1> ${TrueorFalse(el.name)}</h1>` +
        `<br>` +
        `<div class = "bl">` +
        image_gender(el) +
        `<br>` +
        `<div class= "con">` +
        `<b>Alternate Name: </b>` +
        TrueorFalse(el.alternate_names) +
        `<br>` +
        `<b>Species: </b>` +
        TrueorFalse(el.species) +
        `<br>` +
        `<b> Gender: </b>` +
        TrueorFalse(el.gender) +
        `<br>` +
        "<b> House: </b> " +
        TrueorFalse(el.house) +
        `<br>` +
        "<b> Date Of Birth: </b> " +
        TrueorFalse(el.dateOfBirth) +
        `<br>` +
        "<b> Year Of Birth: </b> " +
        TrueorFalse(el.yearOfBirth) +
        `<br>` +
        "<b> Wizard: </b> " +
        TrueorFalse(el.wizard) +
        `<br>` +
        "<b> Ancestry: </b>" +
        TrueorFalse(el.ancestry) +
        `<br>` +
        " <b> Eye colour: </b>" +
        `<i style="color: ${el.eyeColour};" class="fa-solid fa-eye "></i>` +
        `<br>` +
        "<b>Patronus: </b>" +
        TrueorFalse(el.patronus) +
        "<br>" +
        "<b>Hogwarts Student: </b>" +
        TrueorFalse(el.hogwartsStudent) +
        `<br>` +
        "<b>Hogwarts Staff: </b>" +
        TrueorFalse(el.hogwartsStaff) +
        `<br>` +
        "<b>Actor: </b>" +
        `<p>${el.actor} </p>` +
        `<br>` +
        "<b>Alternate actors: </b>" +
        TrueorFalse(el.alternate_actors) +
        `<br>` +
        "<b>Alive: </b>" +
        TrueorFalse(el.alive) +
        `</div>` +
        `</div>` +
        `</div>`;
    });
}
    
  });

  btns.forEach((element) => {
    element.addEventListener("click", () => {
      dataFetched = [];
      switch (element.innerText) {
        case `All`:
          dataFetched = Fetched;
          card.innerHTML = "";
          break;
        case `Gryffindor`:
          dataFetched = Gryffindor_Data;
          card.innerHTML = "";
          break;
        case `Slytherin`:
          dataFetched = Slytherin_Data;
          card.innerHTML = "";
          break;
        case `Hufflepuff`:
          dataFetched = Hufflepuff_Data;
          card.innerHTML = "";
          break;
        case `Ravenclaw`:
          dataFetched = Ravenclaw_Data;
          card.innerHTML = "";
          break;
      }
      dataFetched.forEach((el) => {
        card.innerHTML +=
          `<div class = "character">` +
          banner(el) +
          `<h1> ${TrueorFalse(el.name)}</h1>` +
          `<br>` +
          `<div class = "bl">` +
          image_gender(el) +
          `<br>` +
          `<div class= "con">` +
          `<b>Alternate Name: </b>` +
          TrueorFalse(el.alternate_names) +
          `<br>` +
          `<b>Species: </b>` +
          TrueorFalse(el.species) +
          `<br>` +
          `<b> Gender: </b>` +
          TrueorFalse(el.gender) +
          `<br>` +
          "<b> House: </b> " +
          TrueorFalse(el.house) +
          `<br>` +
          "<b> Date Of Birth: </b> " +
          TrueorFalse(el.dateOfBirth) +
          `<br>` +
          "<b> Year Of Birth: </b> " +
          TrueorFalse(el.yearOfBirth) +
          `<br>` +
          "<b> Wizard: </b> " +
          TrueorFalse(el.wizard) +
          `<br>` +
          "<b> Ancestry: </b>" +
          TrueorFalse(el.ancestry) +
          `<br>` +
          " <b> Eye colour: </b>" +
          `<i style="color: ${el.eyeColour};" class="fa-solid fa-eye "></i>` +
          `<br>` +
          "<b>Patronus: </b>" +
          TrueorFalse(el.patronus) +
          "<br>" +
          "<b>Hogwarts Student: </b>" +
          TrueorFalse(el.hogwartsStudent) +
          `<br>` +
          "<b>Hogwarts Staff: </b>" +
          TrueorFalse(el.hogwartsStaff) +
          `<br>` +
          "<b>Actor: </b>" +
          `<p>${el.actor} </p>` +
          `<br>` +
          "<b>Alternate actors: </b>" +
          TrueorFalse(el.alternate_actors) +
          `<br>` +
          "<b>Alive: </b>" +
          TrueorFalse(el.alive) +
          `</div>` +
          `</div>` +
          `</div>`;
      });
    });
  });
})();
