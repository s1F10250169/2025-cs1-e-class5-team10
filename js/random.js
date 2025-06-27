const restaurants = [
  { id: "kyosuke", page: "./ra-men/ra-men.html" },
  { id: "natsumi", page: "./ra-men/ra-men.html" },
  { id: "zenji", page: "./ra-men/ra-men.html" },
  { id: "gusto", page: "./famiresu/famiresu.html" },
  { id: "saizeriya", page: "./famiresu/famiresu.html" },
  { id: "dennys", page: "./famiresu/famiresu.html" },
  { id: "jonathan", page: "./famiresu/famiresu.html" },
  { id: "toutyou", page: "./teisyoku/teisyoku.html" },
  { id: "gakusyoku", page: "./teisyoku/teisyoku.html" },
];

window.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("random-button");
  if (button) {
    button.addEventListener("click", () => {
      const chosen =
        restaurants[Math.floor(Math.random() * restaurants.length)];
      window.location.href = `${chosen.page}?scrollTo=${chosen.id}`;
    });
  }
});
