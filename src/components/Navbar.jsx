import { useState } from "react";
import Button from "./Button";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-pink-200 sticky top-0 z-50 shadow-md-pink-400 rounded-b-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            
            {/* Left: Title */}
            <div className="text-3xl font-bold font-mono text-white font-outline-4">
            Cara's Journal
            </div>

            {/* Right: Buttons */}
            <div className="flex gap-4">
            <Button>Home</Button>
            <Button>Journal</Button>
            </div>

        </div>
        </nav>
    );
}

export default Navbar;
