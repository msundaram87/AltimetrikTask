export const Products = ({ products = [], filters }) => {
  // Function to filter products based on selected filters
  const filterProducts = () => {
    let filteredProducts = [...products];

    if (filters.location) {
      filteredProducts = filteredProducts.filter(
        (product) => product.location === filters.location
      );
    }

    if (filters.owners) {
      filteredProducts = filteredProducts.filter(
        (product) => product.owners === filters.owners
      );
    }

    if (filters.brands && filters.brands.length > 0) {
      filteredProducts = filteredProducts.filter((product) =>
        filters.brands.includes(product.brand)
      );
    }

    // Add more filters as needed

    return filteredProducts;
  };

  const filteredProducts = filterProducts();

  console.log(filteredProducts);

  return (
    <div className="products">
      {filteredProducts.length ? (
        filteredProducts.map((product) => (
          <p key={`${product.brand}${product.model}`}>
            <span>{product.location}</span>
            <span>{product.owner}</span>
            <span>{product.brand}</span>
            <span>{product.year}</span>
            <span>{product.transmission}</span>
          </p>
        ))
      ) : (
        <p>No products match the selected filters.</p>
      )}
    </div>
  );
};
