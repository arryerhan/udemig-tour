import React from 'react';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../redux/cartSlice';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    const dispatch = useDispatch();

    const addToCart = () => {
        dispatch(addItemToCart(product));
        toast.success(`${product.name} added to cart!`, { autoClose: 300 });
    };

    return (
        <div className="border rounded-lg p-4 shadow-md hover:bg-slate-200 my-2">
            <img src={product.image} alt={product.name} className="w-full h-[160px] object-cover mb-4 rounded-md" />
            <h3 className="font-semibold text-lg">{product.name}</h3>
            <p className="font-semibold text-sm mb-1">{product.state}</p>
            <p className="text-gray-600 mb-2 text-sm text-justify">{product.description}</p>
            <p className="font-bold text-sm mb-1">Price <small>(for each person)</small>: ${product.price}</p>
            <div className="flex justify-between items-center">

                <div className="flex justify-center space-x-3 mt-2">
                    <button
                        onClick={addToCart}
                        className="bg-[#708AE8] text-white text-[14px] py-[2px] px-5 rounded-md hover:bg-blue-600"
                    >
                        Add to Cart
                    </button>
                    <Link to={`/product/${product.id}`}>
                        <button className="bg-slate-500 text-white text-[14px] py-[2px] px-5 rounded-md hover:bg-slate-600">
                            More Details
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
