const d = document;
export default function cardsProductos(id) {
    const $contenedor = d.getElementById(id);
    if (!$contenedor) {
        console.error(`No se encontró el elemento con id "${id}"`);
        return;
    }
    // Base de datos de productos
    const productos = [
        {
            id: 1,
            nombre: "Depilador paquete de 3pz.",
            descripcion: "Depilador paquete de 3pz.",
            precio: "$15 MXN",
            imagen: "./assets/23097.png",
            marca: "Eyebrow Razor"
        },
        {
            id: 2,
            nombre: "Gorro para rayos suelta.",
            descripcion: "Gorro para rayos suelta.",
            precio: "$20 MXN",
            imagen: "./assets/50052.png",
            marca: "JAMI"
        },
        {
            id: 3,
            nombre: "Lija pie enterno.",
            descripcion: "Lija pie enterno.",
            precio: "$38 MXN",
            imagen: "./assets/56019.png",
            marca: "FRANZ"
        },
        {
            id: 4,
            nombre: "Lija de madera para pie.",
            descripcion: "Lija de madera para pie.",
            precio: "$30 MXN",
            imagen: "./assets/50050.png",
            marca: "Jami"
        },
        {
            id: 5,
            nombre: "Galleta de avena y granola 90g.",
            descripcion: "Galleta de avena y granola 90g.",
            precio: "$22 MXN",
            imagen: "./assets/050315.png",
            marca: "granvita"
        },
        {
            id: 6,
            nombre: "Galleta de miel y nuez 90g.",
            descripcion: "Galleta de miel y nuez 90g.",
            precio: "$22 MXN",
            imagen: "./assets/50414.png",
            marca: "granvita"
        },
        {
            id: 7,
            nombre: "Galleta de avena, arandano yogurt 90g.",
            descripcion: "Galleta de avena , arandano yogurt 90g.",
            precio: "$22 MXN",
            imagen: "./assets/95117.png",
            marca: "granvita"
        },
        {
            id: 8,
            nombre: "Loción facial humectante con antioxidantes 88ml, Normal a seca.",
            descripcion: "Loción facial humectante con antioxidantes 88ml, Normal a seca.",
            precio: "$385 MXN",
            imagen: "./assets/50001.png",
            marca: "Mary Kay"
        },
        {
            id: 9,
            nombre: "Shampoo chile y ajo 550ml, cuarzo.",
            descripcion: "Shampoo chile y ajo 550ml cuarzo.",
            precio: "$100 MXN",
            imagen: "./assets/20635.png",
            marca: "Super Naturista"
        },
        {
            id: 10,
            nombre: "Miel de abeja 745g.",
            descripcion: "Miel de abeja 745g.",
            precio: "$170 MXN",
            imagen: "./assets/900247.png",
            marca: "Super Naturista"
        },
        {
            id: 11,
            nombre: "Tinte 02 csataño oscuro 150ml, NATURAL COLOUR.",
            descripcion: "Tinte 02 csataño oscuro 150ml, NATURAL COLOUR.",
            precio: "$107 MXN",
            imagen: "./assets/69027.png",
            marca: "Super Naturista"
        },
        {
            id: 12,
            nombre: "Gel de toronja 500g.",
            descripcion: "Gel de toronja 500g.",
            precio: "$73 MXN",
            imagen: "./assets/610034.png",
            marca: "Super Naturista"
        }
    ];
    // Limpiar el contenedor por si tiene contenido previo
    $contenedor.innerHTML = '';
    // Recorrer el arreglo de productos y crear cada card
    productos.forEach(producto => {
        // Crear el contenedor de la card
        const card = d.createElement('div');
        card.className = 'producto-card';
        card.setAttribute('data-id', producto.id);
        card.setAttribute('data-nombre', producto.nombre);
        card.setAttribute('data-precio', producto.precio);
        // Crear estructura interna de la card
        // Imagen
        const img = d.createElement('img');
        img.src = producto.imagen;
        img.alt = producto.nombre;
        img.loading = 'lazy'; // Carga perezosa para mejorar rendimiento
        img.onerror = function() {
            // Si la imagen no existe, usar una imagen por defecto
            this.src = 'https://placehold.co/200x150/f1f5f9/64748b?text=Sin+Imagen';
        };
        // Nombre del producto
        const titulo = d.createElement('h3');
        titulo.textContent = producto.nombre;
        // Marca
        const marca = d.createElement('p');
        marca.className = 'marca';
        marca.textContent = `Marca: ${producto.marca}`;
        // Descripción
        const descripcion = d.createElement('p');
        descripcion.className = 'descripcion';
        descripcion.textContent = producto.descripcion;
        // Precio
        const precio = d.createElement('p');
        precio.className = 'precio';
        precio.textContent = producto.precio;
        // Botón para agregar al pedido (opcional)
        const btnPedido = d.createElement('button');
        btnPedido.textContent = 'Solicitar producto';
        btnPedido.className = 'btn-solicitar';
        btnPedido.setAttribute('data-id', producto.id);
        btnPedido.setAttribute('data-nombre', producto.nombre);
        btnPedido.setAttribute('data-precio', producto.precio);
        // Evento para el botón (puedes personalizarlo)
        btnPedido.addEventListener('click', (e) => {
            e.preventDefault();
            const productoInfo = `${producto.nombre} - ${producto.precio}`;
            alert(`Producto seleccionado: ${productoInfo}\n\nPor favor, completa el formulario de pedido con los detalles.`);
            
            // Opcional: llenar automáticamente el textarea del formulario
            const textareaProducto = d.querySelector('textarea[name="producto"]');
            if (textareaProducto) {
                const textoActual = textareaProducto.value;
                const nuevoTexto = textoActual ? `${textoActual}\n${producto.nombre}` : producto.nombre;
                textareaProducto.value = nuevoTexto;
                textareaProducto.focus();
            }
        });
        // Ensamblar la card
        card.appendChild(img);
        card.appendChild(titulo);
        card.appendChild(marca);
        card.appendChild(descripcion);
        card.appendChild(precio);
        card.appendChild(btnPedido);
        
        // Agregar la card al contenedor
        $contenedor.appendChild(card);
    });
}