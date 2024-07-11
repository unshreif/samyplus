
window.addEventListener("load", function () {
  setTimeout(function () {
    var loadingDiv = document.getElementById("loading");
    var content = document.getElementById("content");

    loadingDiv.style.display = "none";
    content.style.display = "block";
  }, 5000);
});

window.addEventListener("load", function () {
  setTimeout(function () {
    var loadingDiv = document.getElementById("loading1");
    var content = document.getElementById("content");

    loadingDiv.style.display = "none";
    content.style.display = "block";
  }, 2000);
});
