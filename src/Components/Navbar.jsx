import { useEffect } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen]);

    return (
        <nav className="fixed top-0 w-full z-40 bg-gray-900 backdrop-blur-lg border-b border-white/10 shadow-lg">
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex justify-between items-center h-16">
                    {/* Logo on the left */}
                    <a href="#home" className="font-mono text-xl font-bold text-white">
                        asutosh<span className="text-blue-500">.dev</span>
                    </a>

                    {/* Navigation Links (Right Side, Centered) */}
                    <div className="hidden md:flex items-center space-x-8 ml-auto">
                        <a href="#home" className="text-gray-300 hover:text-white transition-colors">HOME</a>
                        <a href="#about" className="text-gray-300 hover:text-white transition-colors">ABOUT</a>
                        <a href="#projects" className="text-gray-300 hover:text-white transition-colors">PROJECTS</a>
                        <a href="#contact" className="text-gray-300 hover:text-white transition-colors">CONTACT</a>
                    </div>

                    {/* Mobile Menu Button on the Right */}
                    <div
                        className="w-7 h-5 relative cursor-pointer z-40 md:hidden ml-auto"
                        onClick={() => setMenuOpen((prev) => !prev)}
                    >
                        &#9776;
                    </div>
                </div>
            </div>
        </nav>
    );
};
