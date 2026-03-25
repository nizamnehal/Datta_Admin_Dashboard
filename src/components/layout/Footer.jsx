import React from "react";

function Footer() {
    return (
        <>
            <footer className="bg-[#f1f3f7] text-gray-600 text-sm px-8 py-4 flex justify-between items-center">

                {/* Left Text */}
                <p>
                    CodedThemes , Built with <span className="text-red-500">♥</span> for a smoother web presence.
                </p>

                {/* Right Text */}
                <p>
                    Distributed by <span className="font-medium">Themewagon</span>
                </p>

            </footer>
        </>
    );
}

export default Footer;