import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Cart from "./components/ProductCard";

function App() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  console.log(data);

  // Api call 
  const url = "https://api.escuelajs.co/api/v1/products";
  const apidata = async () => {
    try {
      const res = await fetch(url);
      const json = await res.json();
      // console.log(json)
      setData(json);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    apidata();
  }, []);


  // category filter function
  const filterItems = (category) => {
    const filterdata = data.filter((currElm) => {
      return currElm.category.name === category;
    });
    setData(filterdata);
  };


  // search function
  const searchText = (e) => {
    const val = e.target.value;
    setSearch(val);

    if (val.length > 0) {
      const searchdata = data.filter((item) => {
        return item.name.includes(val);
      });
      setData(searchdata);
      console.log(searchdata);
    }
  };
  console.log(search);

  return (
    <>
      <div className="flex flex-col items-center justify-center">
      {/* navbar component */}
        <Navbar />

        {/* All category filter */}
        <div className="flex w-full items-center justify-between">
          <div className="mt-5 pl-20 mb-3">
            <button
              className="bg-[#1f242c] text-white p-2 m-2 rounded-lg hover:bg-white hover:text-[#1f242c] border-2"
              onClick={() => filterItems("Clothes")}
            >
              Clothes
            </button>
            <button
              className="bg-[#1f242c] text-white p-2 m-2 rounded-lg hover:bg-white hover:text-[#1f242c] border-2"
              onClick={() => filterItems("Furniture")}
            >
              Furniture
            </button>
            <button
              className="bg-[#1f242c] text-white p-2 m-2 rounded-lg hover:bg-white hover:text-[#1f242c] border-2"
              onClick={() => filterItems("Electronics")}
            >
              Electronics
            </button>
            <button
              className="bg-[#1f242c] text-white p-2 m-2 rounded-lg hover:bg-white hover:text-[#1f242c] border-2"
              onClick={() => filterItems("Shoes")}
            >
              Shoes
            </button>
            <button
              className="bg-[#1f242c] text-white p-2 m-2 rounded-lg hover:bg-white hover:text-[#1f242c] border-2"
              onClick={() => filterItems("Others")}
            >
              Others
            </button>
            {/* <button className="bg-[#1f242c] text-white p-2 m-2 rounded-lg hover:bg-white hover:text-[#1f242c] border-2" onClick={() => filterItems(data)}>All</button> */}
          </div>

          {/* search box */}
          <div className="pr-20">
            <input
              className="border-2 w-[300px] h-10 rounded p-3"
              type="search"
              placeholder="search your category"
              value={search}
              onChange={(e) => searchText(e)}
            />
          </div>
        </div>

        {/* All product mapping */}
        <div className="App pl-20 pr-20 pt-10 flex-wrap flex items-center justify-center border-y-2">
          {data.map((val, index) => {
            return  <Cart key ={val.id}  {...val}   />
          })}
        </div>
      </div>
    </>
  );
}

export default App;
