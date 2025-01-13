import mockProducts from './mockData.js';

document.getElementById('searchButton').addEventListener('click', function () {
  const query = document.getElementById('productSearch').value.toLowerCase();
  if (query) {
    searchProducts(query);
  } else {
    alert("Bitte einen Suchbegriff eingeben.");
  }
});

function searchProducts(query) {
  const filteredProducts = mockProducts.filter(product =>
    product.title.toLowerCase().includes(query) ||
    product.category.toLowerCase().includes(query)
  );
  displayResults(filteredProducts);
}

function displayResults(products) {
  const resultContainer = document.getElementById('resultContainer');
  resultContainer.innerHTML = '';

  if (products.length > 0) {
    products.forEach(product => {
      const productDiv = document.createElement('div');
      productDiv.classList.add('col-md-4', 'mb-4');
      productDiv.innerHTML = `
        <div class="card h-100">
          <img src="${product.image}" class="card-img-top" alt="${product.title}" />
          <div class="card-body">
            <h5 class="card-title">${product.title}</h5>
            <p class="card-text">${product.description}</p>
            <p class="card-text fw-bold">Preis: €${product.price.toFixed(2)}</p>
            <a href="product.html?id=${product.id}" class="btn btn-primary">Mehr erfahren</a>
          </div>
        </div>
      `;
      resultContainer.appendChild(productDiv);
    });
  } else {
    resultContainer.innerHTML = '<p class="text-center">Keine Produkte gefunden.</p>';
  }
}

// Initial alle Produkte anzeigen
displayResults(mockProducts);
