import React from "react";

const FilterBtn = ({ filterItems }) => {
  return (
    <>
      <div className="mt-5 pl-20 mb-3">
        <button
          className="bg-[#1f242c] text-white p-2 m-2 rounded-lg hover:bg-white hover:text-[#1f242c] border-2"
          onClick={() => filterItems("new name")}
        >
          Clothes
        </button>
        <button
          className="bg-[#1f242c] text-white p-2 m-2 rounded-lg hover:bg-white hover:text-[#1f242c] border-2"
          onClick={() => filterItems("Shoes")}
        >
          Shoes
        </button>
        <button
          className="bg-[#1f242c] text-white p-2 m-2 rounded-lg hover:bg-white hover:text-[#1f242c] border-2"
          onClick={() => filterItems("Furniture")}
        >
          Furniture
        </button>
        <button
          className="bg-[#1f242c] text-white p-2 m-2 rounded-lg hover:bg-white hover:text-[#1f242c] border-2"
          onClick={() => filterItems("Nuevo xd")}
        >
          Electronics
        </button>
        <button
          className="bg-[#1f242c] text-white p-2 m-2 rounded-lg hover:bg-white hover:text-[#1f242c] border-2"
          onClick={() => filterItems("Others")}
        >
          Others
        </button>

        {/* <button
              className="bg-[#1f242c] text-white p-2 m-2 rounded-lg hover:bg-white hover:text-[#1f242c] border-2"
              onClick={() => setFilter(data)}
            >
              ALl
            </button> */}
      </div>
    </>
  );
};

export default FilterBtn;
