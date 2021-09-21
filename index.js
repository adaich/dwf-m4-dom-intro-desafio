const cosasQueAprendimos = [
  {
    tema: "terminal",
    class: "",
  },
  {
    tema: "node",
    class: "",
  },
  {
    tema: "oop",
    class: "",
  },
  {
    tema: "typescript",
    class: "",
  },
  {
    tema: "css",
    class: "",
  },
  {
    tema: "dom",
    class: "special",
  },
];

function main() {
  const listEl = document.querySelector(".lista");
  const listItems = document.querySelectorAll(".lista li");
  listItems.forEach((i) => {
    listEl.removeChild(i);
  });

  cosasQueAprendimos.forEach((i) => {
    const liEl = document.createElement("li");
    liEl.textContent = i.tema;
    if (i.class) {
      liEl.classList.add(i.class);
    }
    listEl.appendChild(liEl);
  });
}

main();
