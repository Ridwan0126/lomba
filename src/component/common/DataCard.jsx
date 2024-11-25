import React from 'react';
import { Edit2, Trash2, Upload } from 'lucide-react'; // Hapus import Eye

const DataCard = ({ 
  data, 
  sections, 
  handleEdit, 
  handleDelete, 
  contentType = 'default', 
  onImageClick,
  imageUrlMap,
  handleUploadReceipt 
}) => {
  const getStatusBadgeClass = (status) => {
    if (contentType === 'users') {
      switch (status?.toLowerCase()) {
        case 'aktif':
          return 'bg-green-100 text-green-800';
        case 'nonaktif':
          return 'bg-red-100 text-red-800';
        default:
          return 'bg-gray-100 text-gray-800';
      }
    }
    switch (status) {
      case 'Berhasil':
        return 'bg-green-100 text-green-800';
      case 'Gagal':
        return 'bg-red-100 text-red-800';
      case 'Proses':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getRoleBadgeClass = (role) => {
    let baseClasses = 'rounded-full text-xs';
    if (role?.toLowerCase() === 'admin') {
      baseClasses += ' bg-customTeal text-white sm:px-2 sm:py-1 px-2 py-1 w-max';
    }
    return baseClasses;
  };

  const renderFieldValue = (field, value) => {
    switch (field.key) {
      case 'photo':
        return (
          <div className="flex items-center space-x-2">
            <img 
              src={imageUrlMap?.[value] || value}
              alt="Thumbnail" 
              className="w-10 h-10 object-cover rounded cursor-pointer"
              onClick={() => onImageClick?.(value)}
            />
            <button
              onClick={() => onImageClick?.(value)}
              className="text-blue-600 hover:text-blue-800 underline"
            >
              Lihat Foto
            </button>
          </div>
        );
      case 'receipt':
        if (value) {
          return (
            <div className="flex items-center space-x-2">
              <img 
                src={value}
                alt="Receipt" 
                className="w-10 h-10 object-cover rounded cursor-pointer"
                onClick={() => onImageClick?.(value)}
              />
              <button
                onClick={() => onImageClick?.(value)}
                className="text-blue-600 hover:text-blue-800 underline text-sm"
              >
                Lihat Receipt
              </button>
            </div>
          );
        }
        return <span className="text-gray-400 text-sm">No receipt</span>;
      case 'role':
        return <span className={getRoleBadgeClass(value)}>{value}</span>;
      default:
        return value;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4 hover:shadow-lg transition-shadow duration-200">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2">
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500">ID:</span>
          <span className="font-semibold">{data.id}</span>
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusBadgeClass(data.status)}`}>
          {data.status}
        </span>
      </div>

      <div className="space-y-4">
        {sections.map((section) => (
          <div key={section.title} className="border-b pb-3">
            <h3 className="text-sm font-medium text-gray-500 mb-2">{section.title}</h3>
            <div className="space-y-2">
              {section.fields.map(field => (
                <div key={field.key} className="flex flex-col sm:flex-row sm:items-center">
                  <span className="text-gray-600 font-medium w-full sm:w-1/3">
                    {field.label}
                  </span>
                  {field.key === 'receipt' && data[field.key] ? (
                    <img 
                      src={data[field.key]}
                      alt="Receipt" 
                      className="w-10 h-10 object-cover rounded cursor-pointer"
                      onClick={() => onImageClick?.(data[field.key])}
                    />
                  ) : renderFieldValue(field, data[field.key])}
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="flex justify-end gap-2 pt-2">
          <button 
            className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-blue-600 rounded-md hover:bg-blue-50 transition-colors duration-200"
            onClick={() => handleEdit(data)}
          >
            <Edit2 className="w-4 h-4" />
            <span className="hidden sm:inline">Edit</span>
          </button>
          {handleUploadReceipt && (
            <button 
              className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-green-600 rounded-md hover:bg-green-50 transition-colors duration-200"
              onClick={() => handleUploadReceipt(data.id)}
            >
              <Upload className="w-4 h-4" />
              <span className="hidden sm:inline">Upload</span>
            </button>
          )}
          <button 
            className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-red-600 rounded-md hover:bg-red-50 transition-colors duration-200"
            onClick={() => handleDelete(data.id)}
          >
            <Trash2 className="w-4 h-4" />
            <span className="hidden sm:inline">Delete</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DataCard;