function OnOffBulb() {
  var bulb = document.getElementById("bulbImage");
  if (bulb.src.match("onOff")) {
    bulb.src = "off.png";
  } else {
    bulb.src = "on.png";
  }
}
