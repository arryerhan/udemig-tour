import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { addItemToCart } from '../redux/cartSlice';
import { toast } from 'react-toastify';

const DetailsPage = () => {
    const { productId } = useParams(); // Get productId from the URL params

    console.log('Product ID from URL:', productId);  // Log productId

    const dispatch = useDispatch();
    const navigate = useNavigate();  // Use `useNavigate` to navigate

    // Get the product list from the Redux store
    const products = useSelector((state) => state.products.list);

    // Find the product by ID
    const product = products.find((product) => product.id.toString() === productId);

    // If the product is not found, display a message
    if (!product) {
        return <div>Product not found!</div>;
    }

    // Add the product to the cart and show a success message
    const addToCart = () => {
        dispatch(addItemToCart(product));
        toast.success(`${product.name} added to cart!`, { autoClose: 300 });
    };

    return (
        <div className="max-w-6xl mx-auto p-8">
            <div className="flex flex-col md:flex-row md:space-x-8">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full md:w-2/5 h-[350px] object-cover mb-4 md:mb-0 rounded-lg shadow-lg"
                />
                <div className="flex flex-col justify-between">
                    <h2 className="text-3xl font-bold">{product.name}</h2>
                    <p className="text-xl font-semibold text-gray-600">{product.state}</p>
                    <p className="mt-4 text-gray-800">{product.description}</p>
                    <p className="mt-4 text-2xl font-bold">Price <small>(for each person)</small>: ${product.price}</p>
                    <div className='flex gap-4'>
                        <button
                            onClick={addToCart}
                            className="mt-3 bg-[#708AE8] text-white text-md py-2 px-4 rounded-md hover:bg-blue-600"
                        >
                            Add to Cart
                        </button>

                        <button
                            onClick={() => navigate(-1)}  // Use `navigate(-1)` to go back
                            className="mt-3 bg-slate-500 text-white text-lg py-2 px-4 rounded-md hover:bg-slate-600"
                        >
                            Go Back
                        </button>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default DetailsPage;
