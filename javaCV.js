function mostrarObjetivo() {
   
  document.querySelector("#objetivo").style.display = '';
  document.querySelector("#academico").style.display = 'none';
  document.querySelector("#experiencia").style.display = 'none';
  document.querySelector("#referencia").style.display = 'none';
 
  
      
}

function mostrarExperiencia() {

  document.querySelector("#objetivo").style.display = 'none';
  document.querySelector("#academico").style.display = '';
  document.querySelector("#experiencia").style.display = 'none';
  document.querySelector("#referencia").style.display = 'none';

      
}
function mostrarFormacion() {

  document.querySelector("#objetivo").style.display = 'none';
  document.querySelector("#academico").style.display = 'none';
  document.querySelector("#experiencia").style.display = '';
  document.querySelector("#referencia").style.display = 'none';
      
}

function mostrarReferencia() {

  document.querySelector("#objetivo").style.display = 'none';
  document.querySelector("#academico").style.display = 'none';
  document.querySelector("#experiencia").style.display = 'none';
  document.querySelector("#referencia").style.display = '';
      
}

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// utilizado para manejar el menu en pantallas moviles
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}




