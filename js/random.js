const restaurants = [
  { id: "kyosuke", page: "temp.html" },
  { id: "natsumi", page: "temp.html" },
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
