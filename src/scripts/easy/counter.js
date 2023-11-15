// Infos button , when click will display description content
const infosBtn = document.getElementById("infos");

infosBtn.addEventListener("click", function (params) {
  const description = document.getElementById("description");

  if (description.style.opacity !== "1") {
    description.style.opacity = "1";
    description.style.display = "block";
} else {
    description.style.opacity = "0";
    description.style.display = "none";
  }
});

// Counter
const count = document.getElementById("count");

reset.addEventListener("click", function (params) {
  count.innerHTML = 0 + "";
});

var buttons = document.querySelectorAll("button").forEach(element => {
    element.addEventListener("click", function (params) {

        switch (element.id) {
            case "decrease":
                count.textContent--;
                break;
            case "increase":
                count.textContent++;
                break;
            case "reset":
                count.innerText = 0;
                break;
        
            default:
                break;
        }

    })
});
