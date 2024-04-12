import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className='w-full h-full flex justify-center bg-slate-900'>
            <div className='w-[70%] h-[10%] flex justify-between p-3'>
                <div>
                    <img src='./logo.png' alt='logo' width={150} height={100} />
                </div>
                <nav>
                    <ul className='flex items-center font-medium text-slate-100 mr-5 space-x-6'>
                        <li><NavLink to="/" className="transition-all duration-300 hover:text-blue-500">Home</NavLink></li>
                        <li><NavLink to="/cart" className="transition-all duration-300 hover:text-blue-500"><img src='./apple-touch-icon.png' alt='cart' width={35} height={35} /></NavLink></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default NavBar;