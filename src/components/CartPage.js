import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItemFromCart, increaseQuantity, decreaseQuantity, clearCart } from '../redux/cartSlice';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
    const cart = useSelector(state => state.cart.items);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const removeItem = (id) => {
        dispatch(removeItemFromCart(id));
        toast.error(`Item removed from cart`, { autoClose: 300 });
    };

    const increase = (id) => {
        dispatch(increaseQuantity(id));
    };

    const decrease = (id) => {
        dispatch(decreaseQuantity(id));
    };

    const getTotalPrice = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    };

    const handleClose = () => {
        navigate('/');
    };

    const handleCheckout = () => {
        toast.success('Proceeding to checkout!', { autoClose: 2000 });

        dispatch(clearCart());



    };

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <div>
                    {cart.map(item => (
                        <div key={item.id} className="flex justify-between items-center mb-4 border p-4">
                            <div className="flex items-center">
                                <img src={item.image} alt={item.name} className="w-20 h-20 object-cover mr-4" />
                                <div>
                                    <h3 className="text-lg font-semibold">{item.name}</h3>
                                    <p className="text-gray-600">${item.price}</p>
                                </div>
                            </div>
                            <div className='w-2/6'>
                                <p className="text-gray-600 ">{item.description}</p>
                            </div>
                            <div className="flex items-center">
                                <button
                                    onClick={() => decrease(item.id)}
                                    className="bg-gray-300 text-black px-2 py-1 rounded-full mr-2"
                                >
                                    -
                                </button>
                                <span className="text-lg font-semibold">{item.quantity}</span>
                                <button
                                    onClick={() => increase(item.id)}
                                    className="bg-gray-300 text-black px-2 py-1 rounded-full ml-2"
                                >
                                    +
                                </button>
                            </div>
                            <div className="flex items-center">
                                <p className="font-semibold text-xl">${(item.price * item.quantity).toFixed(2)}</p>
                                <button
                                    onClick={() => removeItem(item.id)}
                                    className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 ml-4"
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))}
                    <div className="flex justify-between items-center mt-4">
                        <h3 className="text-xl font-bold">Total:</h3>
                        <p className="text-xl">${getTotalPrice()}</p>
                    </div>
                </div>
            )}
            <div className="flex justify-between mt-8">
                <button
                    onClick={handleClose}
                    className="bg-[#708AE8] text-white py-2 px-4 rounded-md hover:bg-gray-600"
                >
                    Go Back
                </button>
                <button
                    onClick={handleCheckout}
                    className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                >
                    Checkout
                </button>
            </div>
        </div>
    );
};

export default CartPage;
