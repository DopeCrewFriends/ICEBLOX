(function () {
  "use strict";

  // Subtle glitch on hero title hover
  var glitch = document.querySelector(".hero-title .glitch");
  if (glitch) {
    glitch.addEventListener("mouseenter", function () {
      this.style.animation = "none";
      this.offsetHeight; // reflow
      this.style.animation = "glitch 0.4s ease";
    });
  }
})();
