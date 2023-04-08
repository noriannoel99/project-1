function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  section.scrollIntoView({ behavior: "smooth" });
}

const box = document.querySelector(".box");
const circle = document.querySelector(".circle");
const box2 = document.querySelector(".box-2");
const circle2 = document.querySelector(".circle-2");

function moveCircle(event) {
  const x = event.clientX - box.offsetLeft;
  const y = event.clientY - box.offsetTop;

  const maxX = box.clientWidth - circle.offsetWidth / 2;
  const maxY = box.clientHeight - circle.offsetHeight / 2;

  let circleX = x < maxX ? x : maxX;
  let circleY = y < maxY ? y : maxY;

  circleX = circleX > circle.offsetWidth / 2 ? circleX : circle.offsetWidth / 2;
  circleY =
    circleY > circle.offsetHeight / 2 ? circleY : circle.offsetHeight / 2;

  circle.style.left = circleX + "px";
  circle.style.top = circleY + "px";
  circle2.style.left = circleX + "px";
  circle2.style.top = circleY + "px";
}

box.addEventListener("mousemove", moveCircle);
box2.addEventListener("mousemove", moveCircle);

document.addEventListener("mousemove", (event) => {
  if (
    event.clientX < box.offsetLeft ||
    event.clientX > box.offsetLeft + box.clientWidth ||
    event.clientY < box.offsetTop ||
    event.clientY > box.offsetTop + box.clientHeight ||
    event.clientX < box2.offsetLeft ||
    event.clientX > box2.offsetLeft + box.clientWidth ||
    event.clientY < box2.offsetTop ||
    event.clientY > box2.offsetTop + box.clientHeight
  ) {
    moveCircle(event);
  }
});

const projectColumns = document.querySelectorAll(".project-column");

projectColumns.forEach((projectColumn) => {
  projectColumn.addEventListener("click", () => {
    if (projectColumn.classList.contains("active")) {
      projectColumn.classList.remove("active");
    } else {
      projectColumns.forEach((projectColumn) => {
        projectColumn.classList.remove("active");
      });
      projectColumn.classList.add("active");
    }
  });
});

const form = document.getElementById("contact-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  console.log(name, email, message);

  form.reset();
}
