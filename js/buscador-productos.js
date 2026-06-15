const d = document;
export default function buscarProducto(inputSelector, contenedorId) {
    const $input = d.querySelector(inputSelector);
    const $contenedor = d.getElementById(contenedorId);
    if (!$input || !$contenedor) {
        console.error("No se encontró el input o el contenedor");
        return;
    }
    $input.addEventListener("input", (e) => {
        const busqueda = e.target.value.trim().toLowerCase();
        const cards = $contenedor.querySelectorAll(".producto-card");
        let hayResultados = false;
        cards.forEach(card => {
            const nombre = card.querySelector("h3")?.textContent.toLowerCase() || "";
            const coincide = nombre.includes(busqueda);
            card.style.display = coincide ? "" : "none";
            if (coincide) hayResultados = true;
        });
        // Mensaje si no hay resultados
        let msgVacio = $contenedor.querySelector(".sin-resultados");
        if (!hayResultados) {
            if (!msgVacio) {
                msgVacio = d.createElement("p");
                msgVacio.className = "sin-resultados";
                msgVacio.textContent = `No se encontró "${e.target.value}"`;
                $contenedor.appendChild(msgVacio);
            }
        } else {
            msgVacio?.remove();
        }
    });
}
