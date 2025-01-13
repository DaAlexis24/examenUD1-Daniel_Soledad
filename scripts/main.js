const choicesList = document.querySelectorAll(".choices-container button");
console.log(choicesList);
const sendReply = document.querySelector(".button-container button");
const principalContainer = document.querySelector(".container");
const greetingsContainer = document.querySelector(".greetings-container");
const showAnswer = document.querySelector(".show-answer");
console.dir(showAnswer);
let answer = null;
principalContainer.style.display = "block";
greetingsContainer.style.display = "none";

choicesList.forEach((button) => {
  button.addEventListener("click", () => {
    choicesList.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
    answer = button.textContent;
    console.log(answer);
  });
});

sendReply.addEventListener("click", () => {
  if (answer) {
    principalContainer.style.display = "none";
    greetingsContainer.style.display = "block";
    showAnswer.textContent = `Seleccionaste ${answer} de 5`;
  }
});
