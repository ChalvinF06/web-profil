const container = document.querySelector(".container");
const wisata = document.querySelector(".wisata");

container.addEventListener("click", function (a) {
  if (a.target.className == "objek") {
    wisata.src = a.target.src;
  }
});
