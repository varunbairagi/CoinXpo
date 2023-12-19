import React from "react";
import "../components/Style/Filter.css";
const Filter = () => {
  return (
    <>
      <div className="flt p-4">
        <h2>Filters</h2>
        <div className="m-3 flex flex-wrap justify-start">
        <div className="mx-3 ">
        <span>Price</span>
        <select name="Price" id="Price">
        <option value="" >Select value</option>
          <option value="ten">{`< $10`}</option>
          <option value="th">{`$10-$1000`}</option>
          <option value="tth">{`$1000-$10000`}</option>
          <option value="lakh">{`$10000-$100000`}</option>
        </select>

        </div>
        <div className="mx-3">
        <span>Marketcap</span>
        <select name="Price" id="Price">
        <option value="" >Select value</option>
          <option value="ten">{`< $10`}</option>
          <option value="th">{`$10-$1000`}</option>
          <option value="tth">{`$1000-$10000`}</option>
          <option value="lakh">{`$10000-$100000`}</option>
        </select>
        </div>
        <div className="mx-3">
        <span>Price Change</span>
        <select name="Price" id="Price">
        <option value="" >Select value</option>
          <option value="ten">{`< $10`}</option>
          <option value="th">{`$10-$1000`}</option>
          <option value="tth">{`$1000-$10000`}</option>
          <option value="lakh">{`$10000-$100000`}</option>
        </select>
        </div>
        <div className="mx-3 flex align-baseline">
            <span>Sort by price</span>
            <div className="ic">

            <i className="fa-solid fa-sort-up text-black hover:text-blue-700  px-2"/>
            <i className="fa-solid fa-sort-down text-black hover:text-blue-700 pnl"/>
            </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default Filter;
