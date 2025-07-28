import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Skeleton from '../ui/skeleton';
import ProductPopup from '../ui/popup';


const Products = () => { 
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedProduct, setSelectedProduct] = useState(null);

    useEffect(() => {
        axios.get("https://dummyjson.com/products")
            .then(res => {
                setProducts(res.data.products);
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        if (selectedProduct) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [selectedProduct]);


    if (loading) {
        return <Skeleton count={8} />;
    }

    return (
        <div id="products-section" className='container mx-auto p-4 sm:p-6 pt-16 sm:pt-24'>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden transform hover:-translate-y-1"
                        onClick={() => setSelectedProduct(product)}
                    >
                        <img
                            src={product.thumbnail}
                            alt={product.title}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h2 className="text-lg font-bold text-gray-800 truncate">{product.title}</h2>
                            <p className="text-sm text-gray-600 mt-1">{product.brand}</p>
                            <p className="text-xl font-semibold text-gray-900 mt-2">${product.price}</p>
                        </div>
                    </div>
                ))}
            </div>

            {selectedProduct && (
                <ProductPopup
                    product={selectedProduct}
                    onClose={() => setSelectedProduct(null)}
                />
            )}
        </div>
    );
};

export default Products;