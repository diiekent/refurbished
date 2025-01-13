import mockProducts from './mockData.js';

// Hole die Produkt-ID aus der URL
const urlParams = new URLSearchParams(window.location.search);
const productId = parseInt(urlParams.get('id'));

// Finde das Produkt basierend auf der ID
const product = mockProducts.find(p => p.id === productId);

const productDetailContainer = document.getElementById('productDetail');

if (product) {
    productDetailContainer.innerHTML = `
        <div class="col-md-6">
            <img src="${product.image}" class="img-fluid rounded" alt="${product.title}" />
        </div>
        <div class="col-md-6">
            <h1>${product.title}</h1>
            <p>${product.description}</p>
            <p><strong>Kategorie:</strong> ${product.category}</p>
            <p class="fw-bold">Preis: €${product.price.toFixed(2)}</p>
            <a href="index.html" class="btn btn-secondary">Zurück zur Übersicht</a>
        </div>
    `;
} else {
    productDetailContainer.innerHTML = '<p class="text-center">Produkt nicht gefunden.</p>';
}
