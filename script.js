let userChoice = [];

let gameBoardArray = document.querySelectorAll(".gameBoarditem");

let check = () => {
  if (
    userChoice.includes("div1") &&
    userChoice.includes("div2") &&
    userChoice.includes("div3")
  ) {
    console.log("win1");
  }
  if (
    userChoice.includes("div4") &&
    userChoice.includes("div5") &&
    userChoice.includes("div6")
  ) {
    console.log("win2");
  }
  if (
    userChoice.includes("div7") &&
    userChoice.includes("div8") &&
    userChoice.includes("div9")
  ) {
    console.log("win3");
  }
  if (
    userChoice.includes("div1") &&
    userChoice.includes("div4") &&
    userChoice.includes("div7")
  ) {
    console.log("win4");
  }
  if (
    userChoice.includes("div2") &&
    userChoice.includes("div5") &&
    userChoice.includes("div8")
  ) {
    console.log("win5");
  }
  if (
    userChoice.includes("div3") &&
    userChoice.includes("div6") &&
    userChoice.includes("div9")
  ) {
    console.log("win6");
  }
  if (
    userChoice.includes("div1") &&
    userChoice.includes("div5") &&
    userChoice.includes("div9")
  ) {
    console.log("win7");
  }
  if (
    userChoice.includes("div7") &&
    userChoice.includes("div5") &&
    userChoice.includes("div3")
  ) {
    console.log("win8");
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
