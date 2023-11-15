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


var people = [
  {
    name: "Sabri Batistutta",
    role: "Server Developer",
    img: "female_avatar.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis eveniet temporibus libero minima modi, architecto quae quam sequi asperiores nobis!",
  },
  {
    name: "Mahamadi Zanre",
    role: "Full Stack Developer",
    img: "male_avatar.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis eveniet temporibus libero minima modi, architecto quae quam sequi asperiores nobis!",
  },
  {
    name: "Marco Leroi",
    role: "Java Developer",
    img: "doctor_avatar.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis eveniet temporibus libero minima modi, architecto quae quam sequi asperiores nobis!",
  },
  {
    name: "Alice Gatz",
    role: "Data Manager",
    img: "blonde_avatar.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis eveniet temporibus libero minima modi, architecto quae quam sequi asperiores nobis!",
  },
  {
    name: "Lisa Pillon",
    role: "React Developer",
    img: "sweet_avatar.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis eveniet temporibus libero minima modi, architecto quae quam sequi asperiores nobis!",
  },
];

const container = document.getElementById("container");

// Create first person when window is charged
window.addEventListener("DOMContentLoaded", (event) => {
  var template =
    `
    <article class="review-box" id="add-review">
            <p class="img-box"><img src="../../../src/imgs/avatars/`+ people[0].img +`" alt=""></p>
            <h1 class="title">` + people[0].name +`</h1>
            <h2 class="role">` + people[0].role +`</h2>
            <p class="desc">` + people[0].desc +`</p>
        </article>
    `;
  container.insertAdjacentHTML("beforeend", template);
});



var addRandomPeople = function () {
    let randomNumber = Math.floor(Math.random() * people.length) + 1;

    var template =
    `
    <article class="review-box" id="add-review">
            <p class="img-box"><img src="../../../src/imgs/avatars/`+ people[randomNumber].img +`" alt=""></p>
            <h1 class="title">` + people[randomNumber].name +`</h1>
            <h2 class="role">` + people[randomNumber].role +`</h2>
            <p class="desc">` + people[randomNumber].desc +`</p>
        </article>
    `;
  container.insertAdjacentHTML("beforeend", template);


    console.log(randomNumber);
}

// Add random person
const addButton = document.getElementById("add-person");

addButton.addEventListener("click", addRandomPeople);

