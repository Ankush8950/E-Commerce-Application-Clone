import React, { useEffect, useState } from "react";
import FilterBtn from "./FilterBtn";
import Navbar from "./Navbar";
import Cart from "./ProductCard";
import ProductNotFound from "./ProductNotFound";

function Home() {
  const [data, setData] = useState([]);
  const [filterdata, setFilterData] = useState(data);
  const [addproduct, setAddProduct] = useState([]);
  // console.log(data)

  // Api call
  // https://api.escuelajs.co/api/v1/products
  const url = "https://api.escuelajs.co/api/v1/products";
  const apidata = async () => {
    try {
      const res = await fetch(url);
      const json = await res.json();
      // console.log(json)
      setData(json);
      setFilterData(json);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    apidata();
  }, []);

  // category filter function
  const filterItems = (category) => {
    const filterval = filterdata.filter((currElm) => {
      return currElm.category.name === category;
    });
    setData(filterval);
  };

  // search function
  const searchItme = (e) => {
    const val = e.target.value;
    const alldata = filterdata.filter((item) =>
      item.title.toLowerCase().includes(val.toLowerCase())
    );
    setData(alldata);
  };

  //  add product in a cart
  const addedProduct = (data) => {
    setAddProduct([...addproduct, data]);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        {/* navbar component */}
        <Navbar product={addproduct} />

        {/* All category filter */}
        <div className="flex w-full items-center justify-between mt-20">
          <FilterBtn filterItems={filterItems} />

          {/* search box */}
          <div className="pr-20">
            <input
              className="border-2 w-[300px] h-10 rounded p-3"
              type="search"
              placeholder="search by product name"
              onChange={searchItme}
            />
          </div>
        </div>

        {/* All product mapping */}
        <div className="App pl-20 pr-20 pt-10 flex-wrap flex items-center justify-center border-y-2">
          {data.length > 0 ? (
            data.map((val) => {
              return (
                <Cart key={val.id} item={val} handleProduct={addedProduct} />
              );
            })
          ) : (
            <ProductNotFound />
          )}
        </div>
      </div>
    </>
  );
}

export default Home;
