function openNav() {
  document.getElementById("mySidenav").style.width = "180px";
  document.getElementById("main").style.marginRight = "140px";
  document.getElementByClassName("paragraphone").style.minwidth = "50%";
}

 /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginRight = "0";
}
