export default function Button({
    children,
    onClick,
    className = "",
    type = "button",
    }) {
    const baseStyles =
        "text-lg bg-pink-500 text-white border-2 border-pink-500 rounded-2xl px-14 py-3 " +
        "shadow-[-5px_5px_0px_#F7C4C4] " +
        "hover:bg-white hover:text-pink-500 hover:border-white " +
        "active:bg-[#F7C4C4] active:text-white " +
        "select-none transition-colors duration-150";

    return (
        <button
        type={type}
        onClick={onClick}
        className={`${baseStyles} ${className}`}
        >
        {children}
        </button>
    );
}
