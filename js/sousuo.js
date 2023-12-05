var menu = document.getElementById("menu");
var span = menu.querySelector("weizhi");
var option = menu.querySelector("div");
var key = 1;
menu.onclick = function () {
  if (key == 1) {
    span.classList.add("cur");
    option.style.display = "block";
    key = 0;
  } else {
    span.classList.remove("cur");
    option.style.display = "none";
    key = 1;
  }
};