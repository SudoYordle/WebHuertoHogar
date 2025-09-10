

// Cantidad que desea comprar
// Se seleccionan todos los botones "Agregar al carrito"
const botonesAgregar = document.querySelectorAll(".agregar-carrito");
// Se selecciona el elemento donde se muestra el contador del carrito
const carritoContador = document.getElementById("carritoContador");

let totalProductos = 0; // contador general del carrito

// Se agrega un evento a cada botón para sumar productos al carrito
botonesAgregar.forEach(boton => {
    boton.addEventListener("click", () => {
    // buscar el input de cantidad que está al lado del botón
    const cantidadInput = boton.parentElement.querySelector(".cantidad");
    let cantidad = parseInt(cantidadInput.value);

    // Si la cantidad es válida y mayor que 0, se suma al total
    if (!isNaN(cantidad) && cantidad > 0) {
        totalProductos += cantidad;
        carritoContador.textContent = totalProductos;
    } else {
        alert("Por favor ingresa una cantidad válida.");
    }
    });
});


//Filtro
// Seleccionamos el input de búsqueda por su ID "filtroFrutas"
const inputFiltro = document.getElementById("filtroFrutas");

// Escuchamos cuando el usuario escribe en el input (evento 'keyup')
inputFiltro.addEventListener("keyup", () => {
  
  // Tomamos el valor que el usuario escribió y lo convertimos a minúsculas
  let valor = inputFiltro.value.toLowerCase();
  
  // Seleccionamos todas las tarjetas de frutas dentro del catálogo
  let articulos = document.querySelectorAll("section.row article");

  // Recorremos cada tarjeta de fruta
  articulos.forEach(articulo => {
    
    // Tomamos el nombre de la fruta
    let nombreFruta = articulo.querySelector(".card-title").innerText.toLowerCase();

    // Tomamos el código de la fruta
    let codigoFruta = articulo.querySelector(".card-cod").innerText.toLowerCase();

    // Comparamos si el valor coincide con el nombre o con el código
    if (nombreFruta.includes(valor) || codigoFruta.includes(valor)) {
      articulo.style.display = "";
    } else {
      articulo.style.display = "none";
    }
  });
});

