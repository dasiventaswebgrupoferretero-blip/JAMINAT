const d = document;
export default function cards(id) {
    console.log("Ejecutando cards con id:", id);
    const categoria = [
        {
            titulo: "VidaNat",
            descripcion: "•Encuentra todos nuestros productos de la marca VidaNat.",
            img: "./assets/vidaNatLogo.png",
        },
        {
            titulo: "Mary Kay",
            descripcion: "Encuentra todos nuestros productos de la marca Mary Kay.",
            img: "./assets/maryKayLogo.png"
        },
        {
            titulo: "Ismerely",
            descripcion: "Encuentra todos nuestros productos de la marca Ismerely.",
            img: "./assets/ismerelyLogo.png"
        }
    ];
    const container = d.getElementById(id);
    console.log("Contenedor encontrado:", container);
    if (!container) {
        console.log("IDs disponibles en el DOM:", Array.from(d.querySelectorAll('[id]')).map(el => el.id));
        return;
    }
    container.innerHTML = categoria.map(categorias => `
        <div class="card-content">
            <img src="${categorias.img}"alt="${categorias.titulo}" class="card-img">
            <h3 class="card-title">${categorias.titulo}</h3>
            <p class="card-text">${categorias.descripcion}</p>
            <button class="card-button" data-marca="${categorias.titulo}">Ver más</button>
        </div>
    `).join('');
    console.log("Cards insertadas, total:", categoria.length);
    container.addEventListener('click', (e) => {
        if (e.target.classList.contains('card-button')) {
            const marca = e.target.dataset.marca;
            console.log(`Redirigiendo a productos de: ${marca}`);
            window.location.href = 'productos.html';
        }
    });
}