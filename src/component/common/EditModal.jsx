import React, { useState } from 'react';
import { X } from 'lucide-react';

/**
 * Komponen Modal untuk mengedit data
 * @param {boolean} isOpen - Status apakah modal terbuka atau tidak
 * @param {Function} onClose - Fungsi untuk menutup modal
 * @param {Object} data - Data yang akan diedit
 * @param {Array} fields - Field-field yang dapat diedit
 * @param {Function} onUpdate - Fungsi untuk mengupdate data
 * @param {string} contentType - Tipe konten untuk menentukan opsi status
 */
const EditModal = ({ isOpen, onClose, data, fields, onUpdate, contentType = 'default' }) => {
  // State untuk menyimpan data formulir
  const [formData, setFormData] = useState(data);

  // Fungsi untuk mendapatkan opsi status berdasarkan tipe konten
  const getStatusOptions = () => {
    if (contentType === 'users') {
      return (
        <>
          <option value="Aktif">Aktif</option>
          <option value="Nonaktif">Nonaktif</option>
        </>
      );
    }
    return (
      <>
        <option value="Berhasil">Berhasil</option>
        <option value="Gagal">Gagal</option>
        <option value="Proses">Proses</option>
      </>
    );
  };

  // Tidak menampilkan modal jika isOpen false
  if (!isOpen) return null;

  return (
    // Overlay modal
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      {/* Konten modal */}
      <div className="bg-white rounded-lg w-full max-w-md">
        {/* Header modal */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold">Edit Data</h2>
          <button 
            onClick={onClose} 
            className="p-1 hover:bg-gray-100 rounded transition-colors duration-200"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        {/* Formulir edit */}
        <form onSubmit={(e) => {
          e.preventDefault();
          onUpdate(formData);
          onClose();
        }} className="p-4 space-y-4">
          {fields.map(field => (
            <div key={field.key} className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                {field.label}
              </label>
              {field.key === 'status' ? (
                <select
                  name={field.key}
                  value={formData[field.key]}
                  onChange={(e) => {
                    setFormData(prev => ({
                      ...prev,
                      [e.target.name]: e.target.value
                    }));
                  }}
                  className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  {getStatusOptions()}
                </select>
              ) : (
                <input
                  type="text"
                  name={field.key}
                  value={formData[field.key]}
                  onChange={(e) => {
                    setFormData(prev => ({
                      ...prev,
                      [e.target.name]: e.target.value
                    }));
                  }}
                  className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              )}
            </div>
          ))}

          {/* Tombol aksi */}
          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded hover:bg-gray-200 transition-colors duration-200"
            >
              Batal
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-sm font-medium text-white bg-customTeal rounded hover:bg-emerald-500 transition-colors duration-200"
            >
              Simpan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditModal;