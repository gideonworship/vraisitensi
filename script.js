var coll = document.getElementsByClassName("achordeon");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function list() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

var a = document.getElementsByClassName("convertir");
var b;
for (b = 0; b < a.length; b++) {
  a[b].addEventListener("click", function convert() {
    var n = prompt("nombre en decimal");
    var f = prompt("en quelle base voulez vous convertir ?");
    var b = "";
    var q;
    var e = 0;
    while (n != 0) {
      q = parseInt(n / f);
      b = (n % f) + b;
      n = q;
      e += 1;
    }
    var c = "le resultat est ";
    alert(c + b);
  });
}

var coll2 = document.getElementsByClassName("visited");
var v;

for (v = 0; v < coll2.length; v++) {
  coll2[v].addEventListener("click", function carte() {
    alert("ca marche");
    this.nextElementSibling.classList.toggle("show");
  });
}
