document.getElementById('searchButton').addEventListener('click', function () {
    const query = document.getElementById('productSearch').value.toLowerCase();
    if (query) {
        searchProducts(query);
    } else {
        alert("Bitte einen Suchbegriff eingeben.");
    }
});

function searchProducts(query) {
    const apiUrl = `https://fakestoreapi.com/products`;

    fetch(apiUrl)
        .then(response => response.json()) // Die Antwort als JSON parsen
        .then(data => {
            const filteredProducts = data.filter(product =>
                product.title.toLowerCase().includes(query)
            );
            displayResults(filteredProducts); // Ergebnisse anzeigen
        })
        .catch(error => {
            console.error('Fehler beim Abrufen der Daten:', error);
            alert("Es gab ein Problem bei der Suche.");
        });
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
