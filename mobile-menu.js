(() => {
  const header = document.querySelector("header");
  const button = document.querySelector(".menu-toggle");
  const navigation = document.querySelector("#primary-navigation");

  if (!header || !button || !navigation) return;

  const closeMenu = () => {
    header.classList.remove("menu-open");
    document.body.classList.remove("menu-open");
    button.setAttribute("aria-expanded", "false");
    button.setAttribute("aria-label", "Open navigation");
  };

  button.addEventListener("click", () => {
    const opening = !header.classList.contains("menu-open");
    header.classList.toggle("menu-open", opening);
    document.body.classList.toggle("menu-open", opening);
    button.setAttribute("aria-expanded", String(opening));
    button.setAttribute("aria-label", opening ? "Close navigation" : "Open navigation");
  });

  navigation.addEventListener("click", (event) => {
    if (event.target.closest("a")) closeMenu();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
      button.focus();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 850) closeMenu();
  });
})();
