let playersSection = document.querySelector("#players");
let loginSection = document.querySelector("#login");
let teams = document.querySelectorAll(".team-item");

teams.forEach((ele) => {
  ele.addEventListener("click", () => {
    playersSection.classList.add("active");
  });
});

document.querySelector(".btn-light").addEventListener("click", () => {
  loginSection.classList.add("active");
});
