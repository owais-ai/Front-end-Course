import React from 'react'

const page = async ({params}:any) => {
  console.log("params is:", params)
  const req = await fetch(`https://fakestoreapi.com/products/${params.id}`);
  const product = await req.json(); 
  
  // console.log(product)
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Product Image */}
        <div className="flex justify-center items-center">
          <img
            src={product.image}
            alt={product.title}
            className="object-contain h-96 rounded-lg shadow-md"
          />
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <p className="text-xl text-green-600 font-semibold mb-2">${product.price}</p>
          <p className="text-gray-600 mb-4 capitalize">Category: {product.category}</p>
          <p className="text-gray-700 leading-relaxed">{product.description}</p>

          {/* Add to Cart Button or Action */}
          <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default page