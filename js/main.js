// meni
function menu() {
  let x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// accordion
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

// validacija
let ime = document.getElementById("fname");
let prezime = document.getElementById("lname");
let mejl = document.getElementById("email");
let mejlPotvrda = document.getElementById("emailPotvrda");
let sifra = document.getElementById("password");
let uslovi = document.getElementById("uslovi");
let dugme = document.getElementById("contact-submit");

function validation(ime, prezime, mejl, mejlPotvrda, sifra, uslovi) {
  let error = false;
  if (ime.value == "") {
    alert("Greska! Ime mora biti popunjeno");
    error = true;
  } else if (prezime.value == "") {
    alert("Greska! Prezime mora biti popunjeno");

    error = true;
  } else if (mejl.value == "") {
    alert("Greska! Email mora biti popunjen");

    error = true;
  } else if (mejl.value.search("@") == -1 || mejl.value.search(".com") == -1) {
    alert("Greska! Email mora biti u validnom formatu (ex. test@gmail.com)");
    error = true;
  } else if (mejlPotvrda.value == "") {
    alert("Greska! Email potvrde mora biti popunjen");

    error = true;
  } else if (mejlPotvrda.value != mejl.value) {
    alert("Greska! Email adrese moraju da budu iste");

    error = true;
  } else if (sifra.value == "") {
    alert("Greska! Lozinka mora biti popunjena");

    error = true;
  } else if (sifra.value.length < 8) {
    alert("Greska! Lozinka mora imati minimum 8 karaktera");
    error = true;
  } else if (uslovi.checked == false) {
    alert("Greska! Prihvatite uslove koriscenja");
    error = true;
  }

  if (error === false) {
    alert(` ${ime.value}\n ${prezime.value}\n ${mejl.value}\n ${sifra.value}`);
    reset();
  }
}
function reset() {
  ime.value = "";
  prezime.value = "";
  mejl.value = "";
  mejlPotvrda.value = "";
  sifra.value = "";
  uslovi.checked = false;
}
dugme.addEventListener("click", function (e) {
  e.preventDefault();
  validation(ime, prezime, mejl, mejlPotvrda, sifra, uslovi);
});
