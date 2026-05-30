function cambiarSeccion(idABrir) {
  // 1. Seleccionamos todos los elementos que tengan la clase 'seccion'
  const todasLasSecciones = document.querySelectorAll('.seccion');

  // 2. Usamos un ciclo para ponerles a todos display: none
  todasLasSecciones.forEach(sec => {
    sec.style.display = 'none';
  });

  // 3. Buscamos el ID que queremos abrir y le ponemos display: block
  document.getElementById(idABrir).style.display = 'block';
}

