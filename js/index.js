import btnAmburger from "./boton-amburgesa.js";
import buscarProducto from "./buscador-productos.js";
import cards from "./card.js";
import cardsProductos from "./cards-productos.js";
const d = document;
d.addEventListener("DOMContentLoaded", (e) => {
    // Asegúrate que la función btnAmburger existe
    if (typeof btnAmburger === 'function') {
        btnAmburger("#btnMenu", "#navMenu");
    }
    // Llama a cards con el selector correcto
    cards("categorias-container");
    cardsProductos("productos");
    buscarProducto('input[type="search"]', "productos");
});