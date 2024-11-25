import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

/**
 * Komponen Input Field yang dapat dikustomisasi
 * @param {string} label - Label untuk input field
 * @param {string} type - Tipe input (text, password, dll)
 * @param {string} placeholder - Teks placeholder
 * @param {boolean} isPassword - Menandakan apakah input untuk password
 */
const InputField = ({ 
    label, 
    type = "text", 
    placeholder, 
    isPassword = false 
  }) => {
    // State untuk mengatur focus pada input
    const [isFocused, setIsFocused] = useState(false);
    // State untuk mengatur visibility password
    const [showPassword, setShowPassword] = useState(false);
  
    // Menentukan apakah label harus mengambang di atas input
    const isLabelFloating = isFocused || showPassword;
  
    return (
      // Kontainer input field
      <div className="relative mb-6">
        <div className="relative">
          {/* Input element */}
          <input
            type={isPassword ? (showPassword ? "text" : "password") : type}
            className="w-full px-3 py-2 text-sm border-4 rounded-lg h-12 text-slate-700
                     focus:border-customTeal focus:outline-none transition-colors duration-200"
            style={{ 
              borderColor: isFocused ? 'rgb(85, 179, 164)' : '#e5e7eb' 
            }}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
          
          {/* Tombol toggle password visibility */}
          {isPassword && (
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 text-gray-500 hover:text-gray-700"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          )}
        </div>
  
        {/* Label yang mengambang */}
        <label 
          className={`absolute left-3 bg-white px-1 transition-all duration-200 pointer-events-none
          ${isLabelFloating ? '-top-3 text-slate-700 text-sm' : 'top-2.5 text-slate-500'}`}
        >
          {label}
        </label>
      </div>
    );
  };

export default InputField;