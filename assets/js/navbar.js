/* Foxed on Scroll */
document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    if (window.scrollY > 200) {
      document.getElementById("navbar_top").classList.add("fixed-top");
      // add padding top to show content behind navbar
      navbar_height = document.querySelector(".navbar").offsetHeight;
      document.body.style.paddingTop = navbar_height + "px";
    } else {
      document.getElementById("navbar_top").classList.remove("fixed-top");
      // remove padding top from body
      document.body.style.paddingTop = "0";
    }
  });
});

/* Web Site Policies */
window.addEventListener("load", function () {
  window.wpcc.init({
    colors: {
      popup: { background: "#1A1C1E", text: "#FFFFFF", border: "#1873D3" },
      button: { background: "#1873D3", text: "#FFFFFF" },
    },
    corners: "small",
    transparency: "100",
    content: { href: "hhtps://yoursite.com/legal/" },
    position: "bottom-right",
  });
});
