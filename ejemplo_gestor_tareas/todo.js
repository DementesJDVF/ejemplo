const pantalla=document.getElementById('pantalla');
const button=document.getElementById('agregar');
const ul=document.getElementById('content-list');

button.onclick=()=>{
    let li = document.createElement('li');

    let texto = document.createElement('span');
    texto.textContent = pantalla.value;

    let boton_eliminar = document.createElement("button");
    boton_eliminar.textContent = "Eliminar";
    boton_eliminar.onclick = () => li.remove();

    let boton_actualizar = document.createElement("button");
    boton_actualizar.textContent = "Actualizar";
    boton_actualizar.onclick = () => {
        
        pantalla.value = texto.textContent;
        texto.textContent = "";
        button.onclick = () => {
            texto.textContent = pantalla.value;
            pantalla.value = "";
            button.onclick = agregar;
        };
    };

    li.appendChild(texto);
    li.appendChild(boton_eliminar);
    li.appendChild(boton_actualizar);

    ul.appendChild(li);
    pantalla.value = '';
};