import React from "react";

const page = async ({ params }: any) => {
  const url = await fetch(
    `https://simple-books-api.glitch.me/books/${params.book}`
  );
  const data = await url.json();
  console.log("data is", data);

  return (
    <div className="max-w-sm rounded-lg border shadow-lg bg-white p-6 mx-auto my-20">
      <h2 className="text-xl font-semibold text-gray-800">{data.name}</h2>
      <p className="text-sm text-gray-500">by {data.author}</p>

      <div className="mt-4">
        <p className="text-lg font-medium text-gray-900">
          Price: ${data.price}
        </p>
        <p className="text-sm text-gray-600">Type: {data.type}</p>
        <p className="text-sm text-gray-600">Stock: {data["current-stock"]}</p>
      </div>

      <div className="mt-4">
        <p
          className={`text-sm font-bold ${
            data.available ? "text-green-600" : "text-red-600"
          }`}
        >
          {data.available ? "Available" : "Out of Stock"}
        </p>
      </div>
    </div>
  );
};

export default page;
