document.addEventListener("DOMContentLoaded", function () {
    const itbutton = document.getElementById("itbutton");
    const managementbutton = document.getElementById("managementbutton");
    const aboutusbutton = document.getElementById("aboutusbutton");
  
    itbutton.addEventListener("click", function () {
      // Open IT.html in a new window or tab
      window.open("/it", "_blank");
    });
  
    managementbutton.addEventListener("click", function () {
      // Open Management.html in a new window or tab
      window.open("/management", "_blank");
    });

    aboutusbutton.addEventListener("click", function () {
      // Open Management.html in a new window or tab
      window.open("/aboutus", "_blank");
    });
  });

