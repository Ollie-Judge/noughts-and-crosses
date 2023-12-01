let userChoice = [];

let gameBoardArray = document.querySelectorAll(".gameBoarditem");

let check = () => {
  if (
    userChoice.includes("div1") &&
    userChoice.includes("div2") &&
    userChoice.includes("div3")
  ) {
    console.log("win");
  }
};

let userChosenDiv = gameBoardArray.forEach(function (div) {
  let click = 0;
  console.log(click);
  div.addEventListener("click", function () {
    if (click === 0) {
      click = 1;
      console.log(click);
      div.innerHTML = "Hello World";
      let chosenDivId = div.getAttribute("id");
      userChoice.push(chosenDivId);
      console.log(userChoice);
      console.log("click", chosenDivId);
    } else {
      div.removeEventListener("click", userChosenDiv);
    }

    check(userChoice);
  });
});
