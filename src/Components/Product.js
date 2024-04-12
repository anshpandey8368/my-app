import React, { useState } from 'react';

const Product = ({ post }) => {

    return (
        <div className="flex flex-col items-center justify-between 
        hover:scale-110 transition duration-300 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl outline">
            <div>
                <p className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">{post.title}</p>
            </div>
            <div className=" overflow-hidden">
            <p className="w-40 text-gray-400 font-normal text-[10px] text-left">{post.description.split(" ").slice(0,10).join(" ") + "..."}</p>
            </div>

            <div className=" my-[5px] h-[180px]">
                <img src={post.image} alt={post.title} className="h-full w-full" />
            </div>
            <div>
              <p className="text-green-600 font-semibold">${post.price}</p>
            </div>

            {
          <button
          className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
          text-[12px] p-1 px-3 uppercase 
          hover:bg-gray-700
          hover:text-white transition duration-300 ease-in">
           {
            false ? <p>Remove Item</p> : <p>Add to Cart</p>
           }
          </button>
            }
        
        </div>
    );
};

export default Product;
