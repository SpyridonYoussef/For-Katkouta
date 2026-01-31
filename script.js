const messages = [
  "You are not alone 💗 but by my side within my heart",
  "Soft hearts are strong hearts with emotional intelligence my unique princess",
  "You are doing better than you think , resembling everything beautiful in this universe",
  "You deserve gentleness",
  "I’m here, always by your side"
];

function showLove() {
  const msg = messages[Math.floor(Math.random() * messages.length)];
  document.getElementById("message").innerText = msg;
}
