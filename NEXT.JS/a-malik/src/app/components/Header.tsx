import Image from "next/image";
import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <div>
      <main className="bg-blue-900 h-40">
        <div className="first-div flex  mx-24 py-4 justify-between items-center">
          <div className="flex items-center">
            <Image
              src={"/phone.webp"}
              alt="phone-icon"
              width={20}
              height={20}
              className="h-8 w-7"
            />
            <p className="text-white">Download App via SMS</p>
          </div>
          <div>
            <p className="text-white">Sign In | Sign Up</p>
          </div>
        </div>
        <hr className="mx-24" />

        <div className="second-div flex items-center justify-between mx-24">
          <div className="py-4">
            <Link href={"/"}>
              <Image
                src={"/logo.webp"}
                alt="logo"
                height={100}
                width={100}
                className="w-40"
              />
            </Link>
          </div>
          <div className="nav">
            <ul className="flex text-white gap-5">
              <li>New Cars</li>
              <li>Used Cars</li>
              <li>Bikes</li>
              <li>Auto stores</li>
              <li>Videos</li>
              <li>Forum</li>
            </ul>
          </div>
          <div className="button">
            <button className="bg-red-700 py-2 px-5 rounded-md text-white">
              Post an Ad
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Header;
