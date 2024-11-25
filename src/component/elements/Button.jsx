const Button = ({ children, variant = "primary", onClick }) => {
  // Gaya dasar tombol
  const baseStyle = "w-full py-3 rounded-lg font-medium transition-colors duration-200";
  // Variasi gaya tombol
  const variants = {
    primary: "bg-customTeal text-white", // Gaya untuk tombol utama
    secondary: "border-2 border-black text-black hover:bg-gray-50" // Gaya untuk tombol sekunder
  };

  return (
    <button 
      className={`${baseStyle} ${variants[variant]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;