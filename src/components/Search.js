import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ProductCard from './ProductCard';

const Search = () => {
    const products = useSelector(state => state.products.list);
    const [search, setSearch] = useState('');

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(search.toLowerCase())
    );
    return (
        <div className="container mx-auto w-lg">
            <div className='absolute top-7 mx-[40%]'>
                <input
                    type="text"
                    placeholder="Search for destinations..."
                    value={search}
                    className="rounded px-5 py-1 text-sm"
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>
            <div className="max-w-[1200px] mx-auto ">
                <h2 className="text-slate-600 text-3xl font-bold text-center mt-8 mb-4">
                    Book Your Trip Now Make Your Dream Come True
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {filteredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>

        </div>
    )
}

export default Search