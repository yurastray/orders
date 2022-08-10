let inputStepa = document.querySelector(".Stepa__form-input");
inputstray = document.querySelector(".stray__form-input");
submitStepa = document.querySelector(".Stepa__form-submit");
submitstray = document.querySelector(".stray__form-submit");
formStepa = document.querySelector(".Stepa");
formstray = document.querySelector(".stray");
messageToShowStepa = document.querySelector(".mainMessage__Stepa");
messageToShowstray = document.querySelector(".mainMessage__stray");
idMessagesStepa = 0;
idMessagesstray = 0;
let objectForMessages = [[], []];
submitStepa.addEventListener("click", (event) => {
  event.preventDefault();
  let message = inputStepa.value;
  inputStepa.value = "";
  let nowaDate = new Date();
  let messageObject = {
    name: "Stepa",
    date: "" + nowaDate.getHours() + ":" + nowaDate.getMinutes() + "",
    messages: message,
  };
  objectForMessages[0].push(messageObject);
  messageToShowStepa.textContent +=
    objectForMessages[0][idMessagesStepa]["date"] +
    ":" +
    objectForMessages[0][idMessagesStepa]["name"] +
    ":" +
    objectForMessages[0][idMessagesStepa]["messages"];
  idMessagesStepa++;
  formStepa.classList.add("hidden");
  messageToShowstray.textContent = "";
  formstray.classList.remove("hidden");
});
submitstray.addEventListener("click", (event) => {
  event.preventDefault();
  let message = inputstray.value;
  let nowaDate = new Date();
  inputStepa.value = "";
  let messageObject = {
    name: "Stray",
    date: "" + nowaDate.getHours() + ":" + nowaDate.getMinutes() + "",
    messages: message,
  };
  objectForMessages[1].push(messageObject);
  messageToShowstray.textContent +=
    objectForMessages[1][idMessagesstray]["date"] +
    ":" +
    objectForMessages[1][idMessagesstray]["name"] +
    ":" +
    objectForMessages[1][idMessagesstray]["messages"];
  idMessagesstray++;
  formStepa.classList.remove("hidden");
  messageToShowStepa.textContent = "";
  formstray.classList.add("hidden");
});
