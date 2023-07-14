window.addEventListener("load", function() {
    var footer = document.getElementById("footer");
    var bodyHeight = document.body.offsetHeight;
    var windowHeight = window.innerHeight;
  
    if (bodyHeight < windowHeight) {
      footer.style.position = "fixed";
      footer.style.bottom = "0";
      footer.style.width = "100%";
    }
  });
  