import React from "react";


const Navbar = () => {
    return (
        <div className="flex justify-between items-center h-24 max-w-[1240px] p-4 bg-gray-800 text-white">
            <h1 className="text-lg font-bold">.rubi</h1>
            <ul className="w-full text-3xl flex justify-center">
                <li className="p-4 hover:underline"><a href="#">Home</a></li>
                <li className="p-4 hover:underline"><a href="#">About</a></li>
                <li className="p-4 hover:underline"><a href="#">Contact</a></li>
            </ul>
        </div>
    );
};

export default Navbar;