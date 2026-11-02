// NOVAX: kleine verbeteringen voor toetsenbord- en navigatiegebruik.
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".media-card").forEach((card) => {
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") { event.preventDefault(); window.location.href = card.href; }
    });
  });
});
