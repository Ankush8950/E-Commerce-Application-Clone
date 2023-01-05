import React from "react";

const FilterBtn = ({ filterItems}) => {
  return (
    <>
      <div className="mt-5 pl-0 md:pl-20 mb-3 text-center">
        <button
          className="bg-[#1f242c] text-white text-sm p-2 m-1 sm:m-2 rounded-lg hover:bg-white hover:text-[#1f242c] border-2"
          onClick={() => filterItems("Clothes")}
        >
          Clothes
        </button>
        <button
          className="bg-[#1f242c] text-white text-sm p-2 m-2 rounded-lg hover:bg-white hover:text-[#1f242c] border-2"
          onClick={() => filterItems("Shoes")}
        >
          Shoes
        </button>
        <button
          className="bg-[#1f242c] text-white text-sm p-2 m-2 rounded-lg hover:bg-white hover:text-[#1f242c] border-2"
          onClick={() => filterItems("Change title")}
        >
          Furniture
        </button>
        <button
          className="bg-[#1f242c] text-white text-sm p-2 m-2 rounded-lg hover:bg-white hover:text-[#1f242c] border-2"
          onClick={() => filterItems("Electronics")}
        >
          Electronics
        </button>
        <button
          className="bg-[#1f242c] text-white text-sm p-2 m-2 rounded-lg hover:bg-white hover:text-[#1f242c] border-2"
          onClick={() => filterItems("Others")}
        >
          Others
        </button>

      </div>
    </>
  );
};

export default FilterBtn;
