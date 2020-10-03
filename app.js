//fetch latest version
fetch("https://vanced.app/api/v1/vanced.json")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("vanced-version").innerText = JSON.parse(data).version;
  });

//Home quotes # todo: values from json or why tf would I yet lul
const quoteArray = [
  "Read the instructions",
  "Super duper advanced",
  "Blocking ads is better than blocking me",
  "Advanced but without the ad",
  "Just read the instructions!",
  "Download Brave to support us",
  "Vanced doesn't include video downloading",
];
document.getElementById("quote").innerText = quoteArray[Math.floor(Math.random() * quoteArray.length)];

//just a stupid secret
if (Math.random() * 100000 < 69) {
  document.getElementById("quote").innerText = "Wow, you're lucky. only 69 in 100K people get this message :)";
}

//neat random header height if screen.height > 500px
if (screen.height > 500) {
  document.getElementById("header").style.height = Math.floor(Math.random() * (45 - 20 + 1) + 20) + "vh";
}

//(when it actually resizes)
window.addEventListener("resize", () => {
  setVerticalHeight();
});
