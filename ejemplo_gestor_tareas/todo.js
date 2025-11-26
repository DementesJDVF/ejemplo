    const pantalla = document.getElementById('pantalla');
    const button = document.getElementById('agregar');
    const ul = document.getElementById('lista_tareas');
    const contador = document.getElementById('contador');
    const mensajeVacio = document.getElementById('mensaje-vacio');

    // ======================
    // FUNCIONES PRINCIPALES
    // ======================

    function agregarTarea(texto) {
        const li = document.createElement('li');
        li.className = 'tarea';

        const span = document.createElement('span');
        span.className = 'texto-tarea';
        span.textContent = texto;
        span.onclick = () => {
            span.classList.toggle('tachar');
            guardarYActualizar();
        };
        span.addEventListener('dblclick', () => editarTarea(span, li));

        const btnEditar = document.createElement('button');
        btnEditar.className = 'actualizar';
        btnEditar.title = 'Editar tarea';
        btnEditar.textContent = 'E';
        btnEditar.onclick = () => editarTarea(span, li);

        const btnEliminar = document.createElement('button');
        btnEliminar.className = 'eliminar';
        btnEliminar.title = 'Eliminar tarea';
        btnEliminar.textContent = 'X';
        btnEliminar.onclick = () => {
            li.classList.add('removiendo');
            setTimeout(() => {
                li.remove();
                guardarYActualizar();
            }, 400);
        };

        li.appendChild(span);
        li.appendChild(btnEditar);
        li.appendChild(btnEliminar);
        ul.appendChild(li);
        guardarYActualizar();
    }

    function editarTarea(span, li) {
        const valorActual = span.textContent;
        const input = document.createElement('input');
        input.type = 'text';
        input.className = 'input-edicion';
        input.value = valorActual;
        li.classList.add('editando');
        li.replaceChild(input, span);
        input.focus();

        const finalizar = () => {
            const nuevo = input.value.trim();
            if (nuevo) {
            span.textContent = nuevo;
            } else {
            span.textContent = valorActual;
            }
            li.replaceChild(span, input);
            li.classList.remove('editando');
            guardarYActualizar();
        };

        input.addEventListener('blur', finalizar);
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') finalizar();
        });
    }

    function actualizarContador() {
        const total = ul.children.length;
        const completadas = ul.querySelectorAll('.tachar').length;
        const pendientes = total - completadas;
        contador.textContent = `(${pendientes} pendiente${pendientes !== 1 ? 's' : ''})`;
        mensajeVacio.style.display = total === 0 ? 'block' : 'none';
    }

    function guardarTareas() {
        const tareas = [];
        document.querySelectorAll('.tarea').forEach(li => {
            const span = li.querySelector('.texto-tarea');
            tareas.push({
            texto: span.textContent,
            completada: span.classList.contains('tachar')
            });
        });
        localStorage.setItem('tareas_neon', JSON.stringify(tareas));
    }

    function cargarTareas() {
        const datos = JSON.parse(localStorage.getItem('tareas_neon')) || [];
        datos.forEach(t => agregarTarea(t.texto));
        // Aplicar estado "completada"
        const spans = ul.querySelectorAll('.texto-tarea');
        datos.forEach((t, i) => {
            if (t.completada && spans[i]) spans[i].classList.add('tachar');
        });
    }

    function guardarYActualizar() {
        guardarTareas();
        actualizarContador();
    }

    // ======================
    // EVENTOS
    // ======================

    button.addEventListener('click', () => {
        const valor = pantalla.value.trim();
        if (valor) {
            agregarTarea(valor);
            pantalla.value = '';
            pantalla.focus();
        }
    });

    pantalla.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const valor = pantalla.value.trim();
            if (valor) {
            agregarTarea(valor);
            pantalla.value = '';
            }
        }
    });

    // Cargar al iniciar
    cargarTareas();
    actualizarContador();