import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-pink-200 sticky top-0 z-50 shadow-md rounded-b-md w-full">
            <div className="w-full px-6 py-4 flex items-center justify-between">
                <div className="text-2xl md:text-3xl font-bold font-mono text-white">
                    cara's journal
                </div>

                {/* Desktop links */}
                <div className="hidden md:flex gap-10">
                    <Link to="/"><h2 className="font-bold text-2xl font-mono text-white">home</h2></Link>
                    <Link to="/journal"><h2 className="font-bold  font-mono text-2xl text-white">journal</h2></Link>
                </div>

                {/* Mobile hamburger */}
                <button className="md:hidden text-white text-3xl" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? "✕" : "☰"}
                </button>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden flex flex-col items-center gap-4 pb-4">
                    <Link to="/" onClick={() => setIsOpen(false)}><h2 className="font-bold text-2xl text-white">home</h2></Link>
                    <Link to="/journal" onClick={() => setIsOpen(false)}><h2 className="font-bold text-2xl text-white">journal</h2></Link>
                </div>
            )}
        </nav>
    );
}

export default Navbar;