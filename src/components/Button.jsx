export default function Button({
    children,
    onClick,
    className = "",
    type = "button",
    }) {
    const baseStyles =
        "text-lg bg-pink-400 text-white border-2 border-pink-500 rounded-2xl px-14 py-3 ";

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
