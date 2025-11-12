const pantalla = document.getElementById('pantalla');
// --- Agregar caracteres ---
function agregar(valor) {
    if (pantalla.value === 'Error') {
        pantalla.value = '';
    }
    pantalla.value += valor;
}
// --- Limpiar toda la pantalla ---
function limpiar_pantalla() {
    pantalla.value = '';
}
// --- Borrar último carácter ---
function borrar_ultimo() {
    pantalla.value = pantalla.value.slice(0, -1);
}
// --- Calcular expresiones normales ---
function calcular() {
    const expresion = pantalla.value;
    if (expresion.trim() === '') return; // evitar error si está vacía
    // Si incluye un porcentaje, procesarlo primero
    if (expresion.includes('%')) {
        pantalla.value = calcularPorcentaje(expresion);
        return;
    }
    try {
        pantalla.value = eval(expresion);
    } catch {
        pantalla.value = 'Error';
    }
}
// --- Función para calcular porcentajes ---
function calcularPorcentaje(expresion) {
    expresion = expresion.replace(/\s+/g, "");
    //número * número%
    if (/^\d+(\.\d+)?\*\d+(\.\d+)?%$/.test(expresion)) {
        const [num, porc] = expresion.split("*");
        return parseFloat(num) * (parseFloat(porc) / 100);
    }
    //número + número%
    if (/^\d+(\.\d+)?\+\d+(\.\d+)?%$/.test(expresion)) {
        const [num, porc] = expresion.split("+");
        return parseFloat(num) + (parseFloat(num) * parseFloat(porc) / 100);
    }
    //número - número%
    if (/^\d+(\.\d+)?-\d+(\.\d+)?%$/.test(expresion)) {
        const [num, porc] = expresion.split("-");
        return parseFloat(num) - (parseFloat(num) * parseFloat(porc) / 100);
    }
    //solo número%
    if (/^\d+(\.\d+)?%$/.test(expresion)) {
        return parseFloat(expresion) / 100;
    }
    return "Error";
}
// --- Botón % ---
function porcentaje() {
    const expresion = pantalla.value;
    if (expresion === '') return;
    pantalla.value = calcularPorcentaje(expresion);
}
// --- Soporte de teclado ---
document.addEventListener('keydown', function (event) {
    const tecla = event.key;

    // Si hay un error y se presiona una tecla válida, limpiar
    if (pantalla.value === 'Error' && tecla.length === 1) {
        pantalla.value = '';
    }

    // Agregar números y operadores válidos
    if (!isNaN(tecla) || ['+', '-', '*', '/', '.'].includes(tecla)) {
        pantalla.value += tecla;
    } 
    // Tecla Enter = calcular
    else if (tecla === 'Enter') {
        event.preventDefault();
        calcular();
    } 
    // Tecla Backspace = borrar último
    else if (tecla === 'Backspace') {
        borrar_ultimo();
    } 
    // Tecla Escape = limpiar pantalla
    else if (tecla === 'Escape') {
        limpiar_pantalla();
    } 
    // Tecla % = porcentaje
    else if (tecla === '%') {
        porcentaje();
    }
});

