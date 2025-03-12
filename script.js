const loadingQuotes = [
  {
    text: "Hold on, the site is loading...",
    subtext: "Few more seconds... to cook... 👨‍🍳",
  },
  {
    text: "Getting the ingredients ready...",
    subtext: "Good food takes time! 🥘",
  },
  { text: "Preheating our servers...", subtext: "Almost there! 🔥" },
  {
    text: "Stirring up something special...",
    subtext: "Just a moment longer! 🥄",
  },
  {
    text: "Adding the final touches...",
    subtext: "Excellence is worth the wait! ✨",
  },
];

let quoteIndex = 0;
let quoteInterval;

function updateLoadingText() {
  const loadingText = document.querySelector(".loading-text");
  const loadingSubtext = document.querySelector(".loading-subtext");

  quoteIndex = (quoteIndex + 1) % loadingQuotes.length;
  loadingText.textContent = loadingQuotes[quoteIndex].text;
  loadingSubtext.textContent = loadingQuotes[quoteIndex].subtext;
}

document.querySelector(".cta-button").addEventListener("click", function (e) {
  e.preventDefault();
  const content = document.querySelector(".content");
  const loadingContent = document.querySelector(".loading-content");

  content.classList.add("loading");
  loadingContent.style.display = "block";

  quoteInterval = setInterval(updateLoadingText, 3000);

  const targetUrl = this.href;

  setTimeout(() => {
    clearInterval(quoteInterval);
    window.location.href = targetUrl;
  }, 10000);
});
