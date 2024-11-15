import React from 'react';
import { CLOSE_ICON } from '../images/index';

const Sidebar = ({ isSidebarOpen, closeSidebar }) => {
    return (
        <div
            className={`fixed top-0 right-0 h-full md:w-96 w-80 bg-[#3C3C43] text-white z-50 transition-transform duration-300 container-fluid py-4 md:py-6
                ${
                    isSidebarOpen ? 
                        'translate-x-0' : 
                        'translate-x-full'
                }
            `}
        >
            <div className="flex justify-end mb-16 mt-4">
                <button onClick={closeSidebar}>
                    <img src={CLOSE_ICON} className="w-5 h-5" />
                </button>
            </div>
            <ul className="flex flex-col space-y-8 p-6 h-screen font-geist">
                <li className="nav-link"><a href="#">Home</a></li>
                <li className="nav-link"><a href="#">About</a></li>
                <li className="nav-link"><a href="#">Blog</a></li>
                <li className="nav-link"><a href="#">Contact</a></li>
            </ul>
        </div>
    );
};

export default Sidebar;
