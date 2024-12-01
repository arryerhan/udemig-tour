import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Logo from '../assets/images/logo.png';
import { TiShoppingCart } from "react-icons/ti";

const Navbar = () => {
    const cart = useSelector(state => state.cart.items);
    const getCartItemCount = () => {
        return cart.reduce((total, item) => total + item.quantity, 0);
    };

    return (
        <nav className="bg-[#708AE8] text-white h-[80px] px-5 flex justify-between items-center">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-xl font-bold flex justify-between items-center cursor-pointer">< img src={Logo} className='w-[30px] h-[30px] rounded-full me-2' />
                    Udemig Tour</Link>
                <div className="relative flex justify-center items-center">
                    <Link to="/cart" className=" flex text-lg"><small>My Cart</small>
                        <TiShoppingCart className='text-2xl' />
                        {getCartItemCount() > 0 && (
                            <span className="absolute bottom-5 left-[65px] bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                {getCartItemCount()}
                            </span>
                        )}
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
