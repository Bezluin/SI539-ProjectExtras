var i = 0;
var txt = 'Artes, Scientia, Veritas';
var speed = 70;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("motto").innerHTML += txt.charAt(i).fontcolor("#ffcb05");
    i++;
    setTimeout(typeWriter, speed);
  }
}
