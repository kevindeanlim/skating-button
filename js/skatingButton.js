colorsArr = ["#f4dc90", "#62aa78", "#d5525e", "#ab66db", "#5a64e7"]

function bgColorChange() {
  document.body.style.backgroundColor = colorsArr[Math.floor(Math.random()*5)];
  var x = document.getElementById("btnId");
  x.style.backgroundColor = x.style.borderColor = colorsArr[Math.floor(Math.random()*5)];
}
