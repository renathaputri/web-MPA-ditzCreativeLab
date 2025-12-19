import React from 'react';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
    const baseStyles = "px-6 py-3 rounded-full font-semibold transition-all duration-300";
    const variants = {
        primary: "bg-[#438cfe] text-white hover:bg-blue-600 shadow-lg shadow-blue-500/30",
        secondary: "bg-white text-gray-800 hover:bg-gray-50 border border-gray-200",
        outline: "border-2 border-white text-white hover:bg-white/10"
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
