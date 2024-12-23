import React from 'react';
import ProductCard from './ProductCard';

const Products = ({ filteredProducts }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
}

export default Products;
