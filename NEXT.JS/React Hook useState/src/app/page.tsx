"use client";
import React, { useState } from "react";

const page = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div className="bg-slate-500 h-80 flex flex-col items-center gap-4">
        <p className="text-2xl text-center pt-20">Our count value is {count}</p>
        <button
          className="bg-white py-2 px-4 rounded-md"
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Increase Count
        </button>
        <button
          className="bg-white py-2 px-4 rounded-md"
          onClick={() => {
            setCount(count - 1);
          }}
        >
          Decrease Count
        </button>
        <button
          className="bg-white py-2 px-4 rounded-md"
          onClick={() => {
            setCount(0);
          }}
        >
          Reset Count
        </button>
      </div>
    </div>
  );
};

export default page;
