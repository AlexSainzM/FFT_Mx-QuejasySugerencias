let prueba = document.getElementById("primerinput");

function ocultar() {
    prueba.style.display = "none";
    prueba.value = "hola@prueba.com"
    setTimeout(() => {
        console.log("Delayed for 1 second.");
        console.log(document.getElementById("primerinput").value);
        prueba.style.display = "block"
      }, 2000);
}


  