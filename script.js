document.getElementById('searchButton').addEventListener('click', function() {
    const query = document.getElementById('productSearch').value;
    if (query) {
        // API-Aufruf simulieren
        searchProducts(query);
    } else {
        alert("Bitte einen Suchbegriff eingeben.");
    }
});

function searchProducts(query) {
    // Simulierter API-Aufruf mit mock-Daten
    const mockData = [
        { name: "Refurbished Laptop A", price: 299.99, seller: "TechStore" },
        { name: "Refurbished Smartphone B", price: 149.99, seller: "GadgetShop" },
        { name: "Refurbished Tablet C", price: 199.99, seller: "TechWarehouse" },
        { name: "Refurbished Laptop D", price: 399.99, seller: "RefurbTech" }
    ];

    // Filtere die mock-Daten nach dem Suchbegriff
    const filteredResults = mockData.filter(product =>
        product.name.toLowerCase().includes(query.toLowerCase())
    );

    // Zeige die Ergebnisse an
    displayResults(filteredResults);
}

function displayResults(products) {
    const resultContainer = document.getElementById('resultContainer');
    resultContainer.innerHTML = ''; // Ergebnisse löschen

    if (products.length > 0) {
        products.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('product');
            productDiv.innerHTML = `
                <h3>${product.name}</h3>
                <p>Preis: €${product.price.toFixed(2)}</p>
                <p>Verkäufer: ${product.seller}</p>
            `;
            resultContainer.appendChild(productDiv);
        });
    } else {
        resultContainer.innerHTML = '<p>Keine Produkte gefunden.</p>';
    }
}