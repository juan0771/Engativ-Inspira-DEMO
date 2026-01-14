const productos = [
    { 
        id: 1, 
        nombre: "Samsung galaxy watch 4", 
        precio: "$ 130.000", 
        localidad: "Engativá", 
        img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500", 
        imagenes: ["https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500", "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500"],
        vendedor: "Carlos Ruiz", 
        v_img: "https://i.pravatar.cc/150?u=1", 
        dir: "Calle 80 #12-40",
        telefono: "573156165943",
        descripcion: "Reloj inteligente Samsung Galaxy Watch 4 en excelente estado. Monitorea tu actividad física, sueño y ritmo cardíaco. Compatible con Android. Incluye cargador original."
    },
    { 
        id: 2, 
        nombre: "DJI MINI 4K Dron", 
        precio: "$ 1.700.000", 
        localidad: "Suba", 
        img: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=500", 
        imagenes: ["https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=500", "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=500"],
        vendedor: "TechShop Suba", 
        v_img: "https://i.pravatar.cc/150?u=2", 
        dir: "Av. Suba #145",
        telefono: "573156165943",
        descripcion: "Dron DJI Mini 4K, ideal para principiantes y profesionales. Graba videos en 4K y toma fotos de alta calidad. Incluye control remoto, batería y estuche de viaje."
    },
    { 
        id: 3, 
        nombre: "Zapatillas Nike Air", 
        precio: "$ 215.000", 
        localidad: "Teusaquillo", 
        img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500", 
        imagenes: ["https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500", "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=500"],
        vendedor: "Juan Sneaker", 
        v_img: "https://i.pravatar.cc/150?u=3", 
        dir: "Carrera 24 #45-10",
        telefono: "573156165943",
        descripcion: "Zapatillas Nike Air Max en color rojo, talla 42. Poco uso, como nuevas. Perfectas para correr o para uso diario. Comodidad y estilo garantizados."
    },
    { 
        id: 1, 
        nombre: "Samsung galaxy watch 4", 
        precio: "$ 130.000", 
        localidad: "Suba", 
        img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500", 
        imagenes: ["https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500", "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500"],
        vendedor: "Asistec Soft", 
        v_img: "https://i.pravatar.cc/150?u=1", 
        dir: "Calle 80 #12-40",
        telefono: "573156165943",
        descripcion: "Reloj inteligente Samsung Galaxy Watch 4 en excelente estado. Monitorea tu actividad física, sueño y ritmo cardíaco. Compatible con Android. Incluye cargador original."
    },{ 
        id: 1, 
        nombre: "Samsung galaxy watch 4", 
        precio: "$ 130.000", 
        localidad: "Engativá", 
        img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500", 
        imagenes: ["https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500", "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500"],
        vendedor: "Carlos Ruiz", 
        v_img: "https://i.pravatar.cc/150?u=1", 
        dir: "Calle 80 #12-40",
        telefono: "573156165943",
        descripcion: "Reloj inteligente Samsung Galaxy Watch 4 en excelente estado. Monitorea tu actividad física, sueño y ritmo cardíaco. Compatible con Android. Incluye cargador original."
    },
    { 
        id: 2, 
        nombre: "DJI MINI 4K Dron", 
        precio: "$ 1.700.000", 
        localidad: "Suba", 
        img: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=500", 
        imagenes: ["https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=500", "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=500"],
        vendedor: "TechShop Suba", 
        v_img: "https://i.pravatar.cc/150?u=2", 
        dir: "Av. Suba #145",
        telefono: "573156165943",
        descripcion: "Dron DJI Mini 4K, ideal para principiantes y profesionales. Graba videos en 4K y toma fotos de alta calidad. Incluye control remoto, batería y estuche de viaje."
    },
    { 
        id: 3, 
        nombre: "Zapatillas Nike Air", 
        precio: "$ 215.000", 
        localidad: "Teusaquillo", 
        img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500", 
        imagenes: ["https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500", "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=500"],
        vendedor: "Juan Sneaker", 
        v_img: "https://i.pravatar.cc/150?u=3", 
        dir: "Carrera 24 #45-10",
        telefono: "573156165943",
        descripcion: "Zapatillas Nike Air Max en color rojo, talla 42. Poco uso, como nuevas. Perfectas para correr o para uso diario. Comodidad y estilo garantizados."
    },
    { 
        id: 1, 
        nombre: "Samsung galaxy watch 4", 
        precio: "$ 130.000", 
        localidad: "Engativá", 
        img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500", 
        imagenes: ["https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500", "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500"],
        vendedor: "Carlos Ruiz", 
        v_img: "https://i.pravatar.cc/150?u=1", 
        dir: "Calle 80 #12-40",
        telefono: "573156165943",
        descripcion: "Reloj inteligente Samsung Galaxy Watch 4 en excelente estado. Monitorea tu actividad física, sueño y ritmo cardíaco. Compatible con Android. Incluye cargador original."
    }
];

const mainGrid = document.getElementById('main-grid');
const skeleton = document.getElementById('skeleton-container');
const errorMsg = document.getElementById('not-found');
const buscador = document.getElementById('buscador');

// --- SIMULACIÓN DE CARGA (SKELETON) ---
document.addEventListener('DOMContentLoaded', () => {
    if (skeleton && mainGrid) {
        setTimeout(() => {
            skeleton.style.display = 'none';
            mainGrid.style.display = 'grid';
            renderCards(productos);
        }, 1500);
    }
});

// --- RENDERIZAR TARJETAS ---
function renderCards(lista) {
    if (!mainGrid) return;
    mainGrid.innerHTML = "";
    if (lista.length === 0) {
        errorMsg.style.display = 'block';
    } else {
        errorMsg.style.display = 'none';
        lista.forEach(prod => {
            const card = document.createElement('div');
            card.className = 'product-card';
            card.innerHTML = `
                <img src="${prod.img}" class="card-img" alt="${prod.nombre}">
                <div class="card-info">
                    <span class="price">${prod.precio}</span>
                    <p>${prod.nombre}</p>
                    <small>${prod.localidad}</small>
                    <small style="display: block; color: #b0b3b8; margin-top: 5px;">${prod.vendedor}</small>
                </div>
            `;
            card.onclick = () => abrirModal(prod);
            mainGrid.appendChild(card);
        });
    }
}

// --- BUSCADOR EN TIEMPO REAL ---
if (buscador) {
    buscador.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        const filtrados = productos.filter(p => p.nombre.toLowerCase().includes(term));
        renderCards(filtrados);
    });
}

// --- FILTRAR POR LOCALIDAD ---
function filtrarLocalidad(loc, el) {
    document.querySelectorAll('.menu-item').forEach(m => m.classList.remove('active'));
    el.classList.add('active');
    
    const filtrados = loc === 'todas' ? productos : productos.filter(p => p.localidad === loc);
    renderCards(filtrados);
    document.getElementById('section-title').innerText = loc === 'todas' ? "Sugerencias de hoy" : "Productos en " + loc;
}

// --- TOGGLE SUBMENU ---
function toggleSubmenu(id) {
    const submenu = document.getElementById(id);
    submenu.style.display = (submenu.style.display === 'block') ? 'none' : 'block';
}

// --- TOGGLE SECTOR (ACORDEÓN) ---
function toggleSector(id) {
    const content = document.getElementById(id);
    content.style.display = (content.style.display === 'block') ? 'none' : 'block';
}

// --- MODAL Y FUNCIONES ---
const modal = document.getElementById('modal-producto');
let currentImgIndex = 0;
let currentProduct = null;

function abrirModal(prod) {
    currentProduct = prod;
    currentImgIndex = 0;
    injectModalStyles();

    modal.innerHTML = `
        <div class="modal-content-custom">
            <span class="close-modal-custom">&times;</span>
            <div class="modal-body-flex">
                <div class="modal-gallery">
                    <button class="nav-btn prev" onclick="cambiarImagen(-1)">&#10094;</button>
                    <img src="${prod.imagenes ? prod.imagenes[0] : prod.img}" id="modal-main-img" class="modal-img-main">
                    <button class="nav-btn next" onclick="cambiarImagen(1)">&#10095;</button>
                </div>
                <div class="modal-info">
                    <h2>${prod.nombre}</h2>
                    <p class="modal-price-tag">${prod.precio}</p>
                    
                    <div class="modal-description">
                        <h4>Descripción</h4>
                        <p>${prod.descripcion || 'El vendedor no ha añadido una descripción.'}</p>
                    </div>

                    <div class="seller-info-box" onclick="irAlPerfil()">
                        <img src="${prod.v_img}" class="seller-avatar-small">
                        <div>
                            <strong>${prod.vendedor}</strong>
                            <p>${prod.dir}</p>
                        </div>
                    </div>

                    <div class="modal-actions">
                        <button onclick="irAlPerfil()" class="btn-seller-details">Detalles del vendedor</button>
                        <button onclick="contactarWhatsapp()" class="btn-whatsapp">CONTACTAR <i class="fab fa-whatsapp"></i></button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    modal.style.display = 'flex';
    modal.querySelector('.close-modal-custom').onclick = () => modal.style.display = 'none';
}

function cambiarImagen(direction) {
    if (!currentProduct || !currentProduct.imagenes) return;
    currentImgIndex += direction;
    if (currentImgIndex < 0) currentImgIndex = currentProduct.imagenes.length - 1;
    if (currentImgIndex >= currentProduct.imagenes.length) currentImgIndex = 0;
    document.getElementById('modal-main-img').src = currentProduct.imagenes[currentImgIndex];
}

function contactarWhatsapp() {
    const msg = `Hola, estoy interesado en ${currentProduct.nombre} que vi en la plataforma.`;
    const url = `https://wa.me/${currentProduct.telefono || '573000000000'}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
}

// Cerrar modal al hacer clic fuera del contenido
window.onclick = (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};

function irAlPerfil() {
    window.location.href = "perfil.html";
}

function injectModalStyles() {
    if (document.getElementById('modal-styles')) return;
    const style = document.createElement('style');
    style.id = 'modal-styles';
    style.innerHTML = `
        #modal-producto { display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.8); z-index: 1000; justify-content: center; align-items: center; }
        .modal-content-custom { background: rgba(36, 37, 38, 0.95); width: 90%; max-width: 800px; border-radius: 12px; padding: 5px 10px 10px 10px; position: relative; max-height: 90vh; overflow-y: auto; box-shadow: 0 5px 15px rgba(0,0,0,0.3); color: #e4e6eb; }
        .close-modal-custom { position: absolute; top: 15px; right: 20px; font-size: 28px; cursor: pointer; color: #000000; z-index: 10; }
        .modal-body-flex { display: flex; gap: 30px; flex-wrap: nowrap; margin-top: 20px; }
        .modal-gallery { flex: 0 0 350px; width: 350px; position: relative; display: flex; align-items: center; justify-content: center; background: #f9f9f9; border-radius: 8px; height: 350px; }
        .modal-img-main { max-width: 100%; max-height: 100%; object-fit: contain; }
        .nav-btn { background: rgba(0,0,0,0.6); color: white; border: none; padding: 12px 15px; cursor: pointer; position: absolute; top: 50%; transform: translateY(-50%); border-radius: 50%; font-size: 18px; transition: 0.3s; }
        .nav-btn:hover { background: rgba(0,0,0,0.8); }
        .prev { left: 10px; } .next { right: 10px; }
        .modal-info { flex: 1; min-width: 300px; display: flex; flex-direction: column; justify-content: center; }
        .modal-info h2 { margin: 0 0 10px 0; font-size: 24px; color: #e4e6eb; }
        .modal-price-tag { font-size: 22px; font-weight: bold; color: #2d88ff; margin-bottom: 20px; }
        .modal-description { margin-bottom: 20px; border-top: 1px solid #3e4042; padding-top: 15px; }
        .modal-description h4 { margin: 0 0 10px 0; font-size: 16px; color: #e4e6eb; }
        .modal-description p { font-size: 14px; color: #b0b3b8; line-height: 1.5; margin: 0; }
        .seller-info-box { display: flex; align-items: center; gap: 15px; padding: 15px; border: 1px solid #3e4042; border-radius: 8px; cursor: pointer; transition: 0.2s; margin-bottom: 20px; }
        .seller-info-box:hover { background: #3a3b3c; border-color: #555; }
        .seller-avatar-small { width: 50px; height: 50px; border-radius: 50%; object-fit: cover; }
        .modal-actions { display: flex; flex-direction: column; gap: 10px; }
        .btn-seller-details { padding: 12px; background: #3a3b3c; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: 600; }
        .btn-whatsapp { padding: 12px; background: #25D366; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: 600; display: flex; align-items: center; justify-content: center; gap: 8px; }
        @media(max-width: 700px) { .modal-body-flex { flex-direction: column; } .modal-gallery { width: 100%; height: 250px; flex: auto; } }
    `;
    document.head.appendChild(style);
}
