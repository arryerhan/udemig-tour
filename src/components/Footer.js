import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-[#708AE8] text-white py-6 mt-8">
            <div className="container mx-auto text-center flex justify-around ">
                <p className="text-sm">&copy; 2024 Udemig Tour, All rights reserved </p>

                <div className="flex justify-center items-center gap-x-3 text-sm">
                    Follow Us:
                    <div className='cursor-pointer hover:scale-[1.5]'>
                        <FaFacebook />
                    </div>
                    <div className='cursor-pointer hover:scale-[1.5]'>
                        <FaTwitter />
                    </div>
                    <div className='cursor-pointer hover:scale-[1.5]'>
                        <AiFillInstagram />
                    </div>
                    <div className='cursor-pointer hover:scale-[1.5]'>
                        <FaYoutube />
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;
