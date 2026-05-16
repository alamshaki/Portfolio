window.addEventListener("scroll", () => {
  const section = document.querySelector(".navbar");
  if (!section) return;
  const sectionTop = section.getBoundingClientRect().top;
  section.style.backdropFilter =
    sectionTop === 0 ? "blur(10px)" : "blur(0px)";
});
