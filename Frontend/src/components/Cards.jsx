import React from "react";

function Cards({ item }) {
  return (
    <>
      <div className="mt-4 px-3 my-3">
        <div className=" dark:bg-slate-900  dark:text-white dark:border card w-92 p-3 bg-base-100 hover:scale-105 duration-300 shadow-xl">
          <figure>
            <img src={item.image} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">${item.price}</div>
              <div className=" hover:bg-pink-500 hover:text-white rounded-full border -{2px} duration-200 px-2 py-2 cursor-pointer">
                Buy Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
