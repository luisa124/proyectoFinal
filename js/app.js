var estudiantes = [];
function obtenerListaEstudiantes(estudiantes) { 
  // TO DO: Retornar la lista de estudiantes  
   return estudiante ;
}
function agregarEstudiante(nombre, puntoTecnico, puntoHSE){
   // TO DO: Preguntar al usuario por el nombre, puntos técnicos y puntos de HSE de un estudiante
  // Hint: El estudiante debe ser agregado a la lista de estudiantes
  // TO DO: Retornar el estudiante recientemente creado
      
  var estudiantes ="";    
  this.nombre=prompt("ingresa el nombre del estudiante");
  this.puntoTecnico=prompt("ingresa los puntos tecnicos");
  this.puntoHSE=prompt("ingresa los puntos HSE");
  
  return estudiantes.push;
      
}

function mostrar(estudiante) {
  // TO DO: Completar el template para que muestre las propiedades correctas del estudiante 
  var resultado = "";
  resultado += "<div class='row'>";
  resultado += "<div class='col m12'>";
  resultado += "<div class='card blue-grey darken-1'>";
  resultado += "<div class='card-content white-text'>";
  resultado += "<p><strong>Nombre:</strong> " + estudiante.nombre + "</p>";
  resultado += "<p><strong>Puntos Técnicos:</strong> " + estudiante.puntoTecnico + "</p>";
  resultado += "<p><strong>Puntos HSE:</strong> " + estudiante.puntoHSE + "</p>";
  resultado += "</div>";
  resultado += "</div>";
  resultado += "</div>";
  resultado += "</div>";
  return resultado;
}

function mostrarLista(estudiantes) {
  // TO DO: Iterar la lista del estudiantes para devolverlos en el formato que usa la función mostrar(estudiante)
  // Retornar el template de todos los estudiantes
 return estudiantes.push;
  
}

function buscar(nombre, estudiantes) {
  // TO DO: Buscar el nombre en la lista de estudiantes que se recibe por parámetros
  // Retornar el objeto del estudiante buscado
  // Nota: NO IMPORTA SI EL USUARIO ESCRIBE EL NOMBRE EN MAYÚSCULAS O MINÚSCULAS
  
}

function topTecnico(estudiantes) {
  // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje técnico de mayor a menor
  
}

function topHSE(estudiantes) {
  // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje de HSE de mayor a menor
  
}