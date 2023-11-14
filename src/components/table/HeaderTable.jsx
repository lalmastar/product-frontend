import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./table.css";

const HeaderTable = () => {
  const [search, setSearch] = useState("");

  const baseURL = "http://localhost:5000/api/product/get-products";
  const [data, setData] = useState([]);

  const fetchInfo = () => {
    return fetch(baseURL)
      .then((res) => res.json())
      .then((d) => setData(d));
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  // console.log(data);
  
  return (
    <div className="container-sm text-center col-10">
      {/* <h1 className="text-success">Products</h1> */}
      <div className="table-container">
        <div className="search-input">
          <input
            type="text"
            placeholder="Search..."
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="table-responsive">
          <table className="table">
            <thead className="table-dark">
              <tr>
                <th>SL No.</th>
                <th>Category Name</th>
                <th>Product Name</th>
                <th>Comapny Name</th>
              </tr>
            </thead>
            <tbody>
              {data
                .filter((item) => {
                  return search.toLowerCase() === ""
                    ? item
                    : item.productname.toLowerCase().includes(search);
                })
                .map((item, index) => (
                  <tr key={index}>
                    <th>{index+1}</th>
                    <td>{item.category}</td>
                    <td>{item.productname}</td>
                    <td>{item.companyname}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default HeaderTable;
