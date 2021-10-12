// definir constantes
const ingresarTarea = document.getElementById ("ingresartarea");
const agregarTarea = document.getElementById ("agregarboton");
const listaDeTareas = document.getElementById ("list");
let tareas = [];



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

    lta = {
        texto: ingresarTarea.value,
    }
    
    
    tareas.push(lta);

    tareastxt = JSON.stringify(tareas);

    window.localStorage.setItem ("tareas", tareastxt) 
    
    

});

const eliminar = (botonEliminar) => {
    botonEliminar.parentElement.remove();
}
 
