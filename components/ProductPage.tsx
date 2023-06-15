import React from 'react';

interface ProductPageProps {
  product: {
    title: string;
    price: number;
    image: string;
  };
}

const ProductPage: React.FC<ProductPageProps> = ({ product }) => {
  return (
    <div className="flex flex-col items-center mt-8">
      <h2 className="text-3xl font-semibold">{product.title}</h2>
      <div className="mt-4">
      </div>
      <p className="text-2xl font-bold mt-4">${product.price.toFixed(2)}</p>
    </div>
  );
};

export default ProductPage;
