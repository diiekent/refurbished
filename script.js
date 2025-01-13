document.getElementById('searchButton').addEventListener('click', function () {
    const query = document.getElementById('productSearch').value.toLowerCase();
    if (query) {
        searchProducts(query);
    } else {
        alert("Bitte einen Suchbegriff eingeben.");
    }
});

// Die Mock-Daten, die wir vorher definiert haben
const mockData = [
  {
    "id": 1,
    "title": "Refurbished Laptop 15.6 Zoll",
    "price": 799.99,
    "category": "Elektronik",
    "image": "https://fakestoreapi.com/img/laptop.jpg"
  },
  {
    "id": 2,
    "title": "Refurbished iPhone 12",
    "price": 899.99,
    "category": "Handys",
    "image": "https://fakestoreapi.com/img/iphone.jpg"
  },
  {
    "id": 3,
    "title": "Refurbished Tablet 10 Zoll",
    "price": 499.99,
    "category": "Elektronik",
    "image": "https://fakestoreapi.com/img/tablet.jpg"
  },
  {
    "id": 4,
    "title": "Refurbished Smartwatch",
    "price": 199.99,
    "category": "Zubehör",
    "image": "https://fakestoreapi.com/img/smartwatch.jpg"
  },
  {
    "id": 5,
    "title": "Refurbished Kamera 24 MP",
    "price": 499.00,
    "category": "Elektronik",
    "image": "https://fakestoreapi.com/img/camera.jpg"
  },
  {
    "id": 6,
    "title": "Refurbished Gaming-PC",
    "price": 1299.99,
    "category": "Computing",
    "image": "https://fakestoreapi.com/img/gaming-pc.jpg"
  },
  {
    "id": 7,
    "title": "Refurbished Bluetooth Lautsprecher",
    "price": 89.99,
    "category": "Zubehör",
    "image": "https://fakestoreapi.com/img/speaker.jpg"
  }
];

function searchProducts(query) {
    // Filtern der Produkte anhand des Suchbegriffs
    const filteredProducts = mockData.filter(product =>
        product.title.toLowerCase().includes(query)
    );
    displayResults(filteredProducts); // Ergebnisse anzeigen
}

function displayResults(products) {
    const resultContainer = document.getElementById('resultContainer');
    resultContainer.innerHTML = ''; // Ergebnisse löschen

    if (products.length > 0) {
        products.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('col-md-3', 'mb-4'); // Bootstrap Grid-Klassen
            productDiv.innerHTML = `
                <div class="card">
                    <img src="${product.image}" class="card-img-top" alt="${product.title}" />
                    <div class="card-body">
                        <h5 class="card-title">${product.title}</h5>
                        <p class="card-text">Preis: €${product.price.toFixed(2)}</p>
                        <p class="card-text">${product.category}</p>
                        <a href="#" class="btn btn-primary">Mehr erfahren</a>
                    </div>
                </div>
            `;
            resultContainer.appendChild(productDiv);
        });
    } else {
        resultContainer.innerHTML = '<p>Keine Produkte gefunden.</p>';
    }
}
