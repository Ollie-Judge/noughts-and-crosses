let userChoice = [];

let gameBoardArray = document.querySelectorAll(".gameBoarditem");

let userChosenDiv = gameBoardArray.forEach(function (div) {
  let click = 0;
  console.log(click);
  div.addEventListener("click", function () {
    if (click === 0) {
      click = 1;
      console.log(click);
      div.innerHTML = "Hello World";
      console.log("click");
    } else {
      div.removeEventListener("click", userChosenDiv);
    }
  });
});
