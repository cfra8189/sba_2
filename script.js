function myFunction() {
  var x = document.getElementById("myNavlinks");
  if (x.className === "navlinks") {
    x.className += " responsive";
  } else {
    x.className = "navlinks";
  }
}