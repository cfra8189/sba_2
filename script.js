function myFunction() {
  var x = document.getElementById("myNavlinks");
  if (x.className === "nav") {
    x.className += " responsive";
  } else {
    x.className = "nav";
  }
}