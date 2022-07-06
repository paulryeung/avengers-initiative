console.log("Hello World Avengers!");

//array of abilities is an array of strings
let abilities = [];

//button for add ability
let addAbilityEl = document.querySelector("#add-ability");
let inputAbilityEl = document.querySelector("#input-ability-1");
let divAbilityEl = document.querySelector(".abilities-div");
let formAbilityEl = document.querySelector("#avengers-recruitment");

//there is one ability by default
let abilityCounter = 2;

//if button is found, setup the event listener so no errors
if (addAbilityEl) {
  //eventlistener for button
  addAbilityEl.addEventListener("click", function (evt) {
    console.log("Ha this button works!");

    //only run stuff if 4 or less ability fields
    if (abilityCounter <= 4) {
      //create an extra label
      let newLabelEl = document.createElement("label");
      newLabelEl.innerHTML = `Ability ${abilityCounter} `;

      //create new input
      let newInputEl = document.createElement("input");
      newInputEl.setAttribute("id", `input-ability-${abilityCounter}`);
      newInputEl.setAttribute("type", "text");
      newInputEl.setAttribute("name", `ability${abilityCounter}`);

      console.log("This is new input: ", newInputEl);
      //create a line break
      let newBreakEl = document.createElement("br");

      //append child to div
      divAbilityEl.appendChild(newLabelEl);
      divAbilityEl.appendChild(newInputEl);
      divAbilityEl.appendChild(newBreakEl);
      abilityCounter++;
    }
  });
}
