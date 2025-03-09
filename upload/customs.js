var button = document.createElement("span");

button.innerText = "Watch AnimeSaturn";

button.className = "button";

button.addEventListener("click", function() {
  // Mở URL trong tab mới khi click
  window.open("https://animefrenzy-ss.s3.amazonaws.com/anime.html", "_blank");
});
document.getElementById("view-full").appendChild(button);
