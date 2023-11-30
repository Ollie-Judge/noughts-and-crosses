let userChoice = [];

let gameBoardArray = document.querySelectorAll(".gameBoarditem");

gameBoardArray.forEach(function (div) {
  div.addEventListener("click", function () {
    div.innerHTML = "Hello World";
  });
});
