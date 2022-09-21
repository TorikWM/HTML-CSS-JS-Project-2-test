let stars = document.getElementById("stars");
let moon = document.getElementById("moon");
let mountains3 = document.getElementById("mountains3");
let mountains4 = document.getElementById("mountains4");
let river = document.getElementById("river");
let boat6 = document.getElementById("boat6");
let nouvil = document.querySelector(".nouvil");
window.onscroll = function () {
  let value = scrollY;
  stars.style.left = value + "px";
  moon.style.top = value * 3 + "px";
  mountains3.style.top = value * 2 + "px";
  mountains4.style.top = value * 1.5 + "px";
  river.style.top = value + "px";
  boat6.style.top = value + "px";
  boat6.style.left = value * 4 + "px";
  boat6.style.fontSize = value + "px";
  if (scrollY >= 67) {
    scrollY.style.fontsize = 67 + "px";
    scrollY.style.position = "fixed";
    if (scrollY >= 478) {
      nouvil.style.display = "none";
    } else {
      nouvil.style.display = "block";
    }
    if (scrollY >= 127) {
      document.querySelector(".main").style.background =
        "linear-grandient(#37628 #10001f)";
    } else {
      document.querySelector(".main").style.background =
        "linear-grandient(#37628 #10001f)";
    }
  }
};
