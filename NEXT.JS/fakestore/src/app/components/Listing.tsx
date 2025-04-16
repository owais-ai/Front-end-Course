import Link from 'next/link';
import React from 'react'

const Listing = async () => {
  const req = await fetch("https://fakestoreapi.com/products/");
  const data = await req.json();
  
//   console.log("Data is:", data)

    return (
        <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Product List</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {data.map((product:any) => (
            <div
              key={product.id}
              className="border rounded-lg p-4 shadow hover:shadow-lg transition duration-300 text-center hover:scale-105"
            >
             <Link  href={`/products/${product.id}`}><img
                src={product.image}
                alt={product.title}
                className="h-48 w-full object-contain mb-4"
              /></Link>
              <h2 className="text-lg font-semibold">{product.title}</h2>
              <p className="text-gray-600 text-sm mb-2">{product.category}</p>
              <p className="text-gray-800 font-bold">${product.price}</p>
              {/* <p className="text-gray-500 text-sm mt-2">{product.description.slice(0, 80)}...</p> */}
            </div>
          ))}
        </div>
      </div>
    );
  }
export default Listing