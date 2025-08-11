function toggleAnswer(el) {
  el.classList.toggle("active");
}

document.querySelectorAll(".question").forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.toggle("active");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const temoignages = document.querySelectorAll(".temoignage");

  // Ajoute la classe anim pour activer l'effet
  temoignages.forEach((t) => t.classList.add("anim"));

  // Détecte quand ils sont visibles
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = Array.from(temoignages).indexOf(entry.target);
          setTimeout(() => {
            entry.target.classList.add("visible");
          }, index * 600); // 200ms de décalage entre chaque carte
        }
      });
    },
    { threshold: 0.2 }
  );

  temoignages.forEach((t) => observer.observe(t));
});
