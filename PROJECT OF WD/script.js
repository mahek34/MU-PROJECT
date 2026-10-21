const happyButton = document.getElementById("happyButton");
const message = document.getElementById("message");

happyButton.addEventListener("click", function () {
  const reminders = [
    "You are doing better than you think. ♡",
    "Small steps still move you forward. 🌷",
    "You deserve a little kindness today. ✨",
    "Keep going, lovely things take time. 💗"
  ];
  const randomIndex = Math.floor(Math.random() * reminders.length);
  message.textContent = reminders[randomIndex];
});
