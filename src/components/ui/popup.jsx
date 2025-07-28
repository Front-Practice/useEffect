import React, { useState } from 'react';

const ProductPopup = ({ product, onClose }) => {
  const [activeImage, setActiveImage] = useState(product.thumbnail);

  const handleContentClick = (e) => {
    e.stopPropagation();
  };

  const galleryImages = [product.thumbnail, ...(product.images || [])];

  return (
    <div
      className="fixed inset-0 bg-gray-200/40 z-50 flex justify-center items-center p-4 transition-opacity duration-300"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-gray-800 rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={handleContentClick}
      >
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 dark:hover:text-white transition-colors z-10"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-4 md:p-6">
              <div className="w-full h-64 md:h-80 flex items-center justify-center bg-gray-100 dark:bg-gray-700 rounded-lg mb-4">
                <img
                  src={activeImage}
                  alt={product.title}
                  className="max-w-full max-h-full object-contain rounded-lg"
                />
              </div>

              <div className="flex overflow-x-auto gap-2 pb-2">
                {galleryImages.map((image, index) => (
                  <div
                    key={index}
                    className={`w-16 h-16 flex-shrink-0 flex items-center justify-center bg-gray-100 dark:bg-gray-600 rounded-md cursor-pointer border-2 transition-all ${
                      activeImage === image
                        ? 'border-blue-500'
                        : 'border-transparent hover:border-gray-400'
                    }`}
                    onClick={() => setActiveImage(image)}
                  >
                    <img
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      className="max-w-full max-h-full object-contain rounded"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white">
                {product.title}
              </h2>
              <p className="text-md text-gray-500 dark:text-gray-400 mt-1">{product.brand}</p>
              <p className="mt-4 text-gray-700 dark:text-gray-300">{product.description}</p>

              <div className="mt-6">
                <span className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                  ${product.price}
                </span>
                <span className="text-sm text-red-500 ml-2">
                  ({product.discountPercentage}% off)
                </span>
              </div>

              <div className="mt-4 flex items-center">
                <span className="text-yellow-400 text-lg">
                  {'★'.repeat(Math.round(product.rating))}
                  {'☆'.repeat(5 - Math.round(product.rating))}
                </span>
                <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                  ({product.rating} stars)
                </span>
              </div>

              <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                In Stock:{' '}
                <span className="font-semibold text-green-600">{product.stock} units</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPopup;
