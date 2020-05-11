//console.log(window.matchMedia("(prefers-color-scheme: dark)"));
/*Con matchmedia podemos detectar un media query*/
/*Vemos la propiedad matches en true que quiere decir que está en modo obscuro*/

const checkbox = document.querySelector("#checkbox");

if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  console.log("true" + true);
  checkbox.setAttribute("checked", true);
}

// document.body.style.setProperty("--grayCard", "blue");
checkbox.addEventListener("change", function (event) {
  console.log(this.checked);
  //document.body.classList.toggle("is_dark_mode");

  /*Vamos a cambiar variables dentro de css*/
  // --grayCard: #252b43;
  //   --gray: #8088ad;
  //   --baseBackground: #1d2029;
  //   --grayLetter: white;
  //   --cardTitle: #8088ad;
  //   --baseColor: white;
  //   --switchSpinner: #282943;
  //   /*Propiedad para poner gradiente al switch de modo dark*/
  //   --switch: linear-gradient(to right, #4796d2 0%, #37ce8f 100%);
  if (this.checked) {
    document.body.classList.remove("is-light-mode");
    document.body.classList.add("is-dark-mode");
  } else {
    document.body.classList.remove("is-dark-mode");
    document.body.classList.add("is-light-mode");
  }
});
