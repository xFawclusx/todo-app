// definir constantes
const ingresarTarea = document.getElementById ("ingresartarea");
const agregarTarea = document.getElementById ("agregarboton");
const listaDeTareas = document.getElementById ("list");

//agregar una funcion
agregarTarea.addEventListener("click", function(e){
    e.preventDefault();
    var textoTarea = ingresarTarea.value;
    var nuevoLi = document.createElement("li");
    nuevoLi.innerHTML = `
    <input type="checkbox">
    <p>${textoTarea}</p>
    <button class="delete" onclick="eliminar(this)">🗑️</button>
    `
    listaDeTareas.prepend(nuevoLi);

    if (items.length === 0){
        empty.styl.dysplay = "block"
    }

});
const eliminar = (botonEliminar) => {
    botonEliminar.parentElement.remove();
}
 