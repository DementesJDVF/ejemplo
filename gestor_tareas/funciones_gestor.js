// === Referencias a los elementos del DOM ===
const agregar = document.getElementById("agregar_tarea");
const lista_tareas = document.getElementById("lista_tareas");
const boton_agregar = document.getElementById("agregar_boton");

// === Agregar tarea ===
boton_agregar.addEventListener("click", () => {
    const texto = agregar.value.trim();

    const lista = document.createElement("li");

    const linea = document.createElement("sanp");
    linea.textContent = texto;

    const boton_eliminar = document.createElement("button");
    boton_eliminar.textContent = "Eliminar";
    boton_eliminar.className = "eliminar";
    boton_eliminar.onclick = () => lista.remove();

    const boton_actualizar = document.createElement("button");
    boton_actualizar.textContent = "Actualizar";
    boton_actualizar.className = "actualizar";
    boton_actualizar.onclick = function () {
        document.getElementById("agregar_tarea").value = linea.textContent;
        lista.remove();
    };

    lista.appendChild(linea);
    lista.appendChild(boton_eliminar);
    lista.appendChild(boton_actualizar);

    lista_tareas.appendChild(lista);

    agregar.value = "";
});