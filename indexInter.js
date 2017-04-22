var burger = document.getElementById("burger-container");
var meny = document.getElementById("nedfall");

var burger = document.getElementById("burger-container");
var meny = document.getElementById("nedfallBilder");
var banner = document.getElementById("banner");
var sjekker = false;
var tekstOver = document.getElementById("tekstOver");

burger.onclick = function(){
  if (sjekker == true) {
      burger.className = "";
      //meny.style.display = "none";
      meny.className = "";
      banner.className = "";
      sjekker = false;
      tilbakestiller();
  }
  else if (sjekker == false) {
    burger.className = "open";
    //meny.style.display = "block";
    meny.className = "open";
    banner.className = "av";
    sjekker = true;
  }
}
var sideholder = document.getElementById("intro-holder");
var hovedeSiden = document.getElementById("ramme");
function ut() {
   sideholder.style.display = "none";
 }
setTimeout(ut, 4750);
window.onclick = function() {
  sideholder.style.display = "none";
  hovedeSiden.style.opacity = "1";

}
// når du klikker på arbeid

var arbeid = document.getElementById("nedfalltekst");
var arbeidknapp = document.getElementById("deler");
var fyl = document.getElementById("fil");

arbeid.onmouseover = function(){
  fil.className = "over";
}
arbeid.onmouseout = function(){
  fil.className = "";
}

arbeid.onclick = function(){
  arbeid.style.display = "none";
  arbeidknapp.className = "open";
  tekstOver.style.display = "block";
  tekstOver.className = "klikk";
}

function tilbakestiller(){
  arbeid.style.display = "block";
  arbeidknapp.className = "";
  tekstOver.style.display = "none";
  tekstOver.className = "";
}


//
