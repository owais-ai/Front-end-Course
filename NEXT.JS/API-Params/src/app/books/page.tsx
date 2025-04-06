import Link from "next/link";
import React from "react";

const page = async () => {
  const request = await fetch("https://simple-books-api.glitch.me/books");
  const data = await request.json();
  //   console.log("data is", data);

  return (
    <div>
      <h1 className="text-4xl font-bold text-center py-20">This is our Book Page</h1>
      <div className="grid grid-cols-3 items-center gap-6">
        {data.map((book: any) => {
          return (
           <Link href={`/books/${book.id}`}>
             <div key={book.id} className="flex flex-col gap-2 border-2">
              <p className="text-lg text-red-500">Book number: {book.id}</p>
              <h3 className="text-2xl text-green-600">
                Book Title: {book.name}
              </h3>
              <h3 className="text-xl text-purple-600">
                Type of book: {book.type}
              </h3>
              <p className="text-lg text-blue-700">
                Book Availble:
                {book.available ? (
                  <span className="text-green-600">Available</span>
                ) : (
                  <span className="text-red-600">Not Available</span>
                )}
              </p>
            </div></Link>
          );
        })}
      </div>
    </div>
  );
};

export default page;
