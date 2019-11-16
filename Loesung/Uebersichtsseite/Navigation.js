
function myFunction() {
  var x = document.getElementById("meineNavigation");
  if (x.className === "Navigation") {
    x.className += "Responsive";
  } else {
    x.className = "Navigation";
  }
}
