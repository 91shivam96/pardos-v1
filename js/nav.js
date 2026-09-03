(function () {
  const hamburger = document.getElementById("hamburger");
  const nav = document.getElementById("nav");
  if (!hamburger || !nav) return;

  const setOpen = (open) => {
    hamburger.classList.toggle("active", open);
    nav.classList.toggle("is-open", open);
    hamburger.setAttribute("aria-expanded", String(open));
    document.body.classList.toggle("nav-open", open);
  };

  hamburger.setAttribute("aria-expanded", "false");
  hamburger.setAttribute("aria-controls", "nav");

  hamburger.addEventListener("click", () => {
    setOpen(!nav.classList.contains("is-open"));
  });

  nav.querySelectorAll("a, button").forEach((el) => {
    el.addEventListener("click", () => setOpen(false));
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") setOpen(false);
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 900) setOpen(false);
  });
})();
