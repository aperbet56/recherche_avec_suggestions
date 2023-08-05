// Récupération des différents éléments
const searchInput = document.querySelector("#search");
const results = document.querySelector(".result__box");

// Création de la variable availableKeywords
let availableKeywords = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "langage de programmation",
  "développement web",
  "Comment créér un site web",
  "Tutoriels de développement web",
  "Où apprendre à coder",
  "Programmation informatique",
  "Formation sur le développement web",
  "Où se former à la programmation informatique",
  "Programmation informatique",
  "Métier de développeur web",
  "Développement front-end",
  "Développement back-end",
  "Full-stack",
  "Développeur web",
  "Responsive",
];

// Ecoute de l'événement keyup sur le champs de recherche
searchInput.addEventListener("keyup", () => {
  let result = [];
  let input = searchInput.value;
  if (input.length) {
    result = availableKeywords.filter((keyword) => {
      return keyword.toLowerCase().includes(input.toLowerCase());
    });
    console.log(result);
  }
  displayResults(result);

  // S'il n'y a pas de résultat pour cette recherche
  if (!result.length) {
    results.textContent = "";
  }
});

// Fonction displayResults ayant pour paramètre result pour afficher les suggestions
const displayResults = (result) => {
  const content = result.map((list) => {
    return "<li onClick=selectInput(this)>" + list + "</li>";
  });
  results.innerHTML = "<ul>" + content.join("") + "</ul>";
};

// Fonction selectInput ayant pour paramètre list afin que le resultat sélectionné s'affiche dans le champs de recherche
const selectInput = (list) => {
  searchInput.value = list.textContent;
  results.textContent = "";
};
