let userChoice = [];

let computerChoiceArray = [];

const generateComputerChoice = () => {
  let computerChoice = Math.floor(Math.random() * 9 + 1);
  computerChoiceArray.push("div" + computerChoice);
  console.log(computerChoiceArray);
  outputComputerChoice();
};

const outputComputerChoice = () => {
  if (userChoice.includes(computerChoiceArray.at(-1))) {
    generateComputerChoice();
  }
  // get the last item in the computer choice array, everytime the user clicks a div
  console.log("computer output" + computerChoiceArray.at(-1));
  let selectedDiv = document.getElementById(computerChoiceArray.at(-1));
  console.log("next step " + selectedDiv);
  selectedDiv.innerHTML = "O";
  selectedDiv.removeEventListener("click");

  // access the div that the computer has chosen, then remove the event listener for the click and put a 'O' as the inner html
};

let gameBoardArray = document.querySelectorAll(".gameBoarditem");

let check = () => {
  if (
    userChoice.includes("div1") &&
    userChoice.includes("div2") &&
    userChoice.includes("div3")
  ) {
    window.alert("win1");
  }
  if (
    userChoice.includes("div4") &&
    userChoice.includes("div5") &&
    userChoice.includes("div6")
  ) {
    window.alert("win2");
  }
  if (
    userChoice.includes("div7") &&
    userChoice.includes("div8") &&
    userChoice.includes("div9")
  ) {
    window.alert("win3");
  }
  if (
    userChoice.includes("div1") &&
    userChoice.includes("div4") &&
    userChoice.includes("div7")
  ) {
    window.alert("win4");
  }
  if (
    userChoice.includes("div2") &&
    userChoice.includes("div5") &&
    userChoice.includes("div8")
  ) {
    window.alert("win5");
  }
  if (
    userChoice.includes("div3") &&
    userChoice.includes("div6") &&
    userChoice.includes("div9")
  ) {
    window.alert("win6");
  }
  if (
    userChoice.includes("div1") &&
    userChoice.includes("div5") &&
    userChoice.includes("div9")
  ) {
    window.alert("win7");
  }
  if (
    userChoice.includes("div7") &&
    userChoice.includes("div5") &&
    userChoice.includes("div3")
  ) {
    window.alert("win8");
  }
};

let userChosenDiv = gameBoardArray.forEach(function (div) {
  let click = 0;
  console.log(click);
  div.addEventListener("click", function () {
    if (click === 0) {
      click = 1;
      console.log(click);
      div.innerHTML = "X";
      let chosenDivId = div.getAttribute("id");
      userChoice.push(chosenDivId);
      generateComputerChoice();
      console.log(userChoice);
      console.log("click", chosenDivId);
    } else {
      div.removeEventListener("click", userChosenDiv);
    }

    check(userChoice);
  });
});
