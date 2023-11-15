// Infos button , when click will display description content
const infosBtn = document.getElementById("infos");

infosBtn.addEventListener("click", function (params) {
  const description = document.getElementById("description");

  if (description.style.opacity !== "1") {
    description.style.opacity = "1";
  } else {
    description.style.opacity = "0";
  }
});

// Click Me button
const changeColorButton = document.getElementById("button");
const background = document.querySelector("body");

changeColorButton.addEventListener("click", function () {
  var colorCode = "FFFFFF";

  let codeHex = (Math.random() * 0xfffff * 1000000).toString(16);
  colorCode = "#" + codeHex.slice(0, 6);

  background.style.backgroundColor = colorCode;
});
