const sections = document.querySelectorAll("section");
let currentSectionIndex = 0;
let isScrolling = false;

function scrollToSection(index) {
  isScrolling = true;
  sections[index].scrollIntoView({ behavior: "smooth" });
  setTimeout(() => {
    isScrolling = false;
  }, 1000); // Change this value to adjust the time it takes for the scroll animation to complete
}

function handleScroll(event) {
  if (isScrolling) return;

  const direction = event.deltaY > 0 ? 1 : -1;
  const nextSectionIndex = currentSectionIndex + direction;

  if (nextSectionIndex >= 0 && nextSectionIndex < sections.length) {
    scrollToSection(nextSectionIndex);
    currentSectionIndex = nextSectionIndex;
    event.preventDefault();
  }
}

window.addEventListener("wheel", handleScroll);
