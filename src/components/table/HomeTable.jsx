import React, { useEffect, useState } from "react";
import "./hometable.css";
import HomeRowTable from "./HomeRowTable";

const HomeTable = () => {
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

  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 3;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = data.slice(firstIndex, lastIndex);
  const npage = Math.ceil(data.length / recordsPerPage);
  const numbers = [...Array(npage+1).keys()].slice(1);

  const prevPage = () => {
    if(currentPage !== 1){
      setCurrentPage(currentPage-1);
    }
  }
  const changeCPage = (id) => {
    setCurrentPage(id);
  }
  const nextPage = () => {
    if(currentPage !== npage){
      setCurrentPage(currentPage+1);
    }
  }

  return (
    <div className="hometable-container">
      <div className="hometable-container-top">
        <h1>Trending Technologies</h1>
      </div>
      <div className="hometable-container-bottom">
        <div className="hometable-container-bottom-header">
          <p>Product Name</p>
          <p>Total Companies Using</p>
        </div>
        <div className="bottom-bar"></div>
      </div>

      {records.map((item, index) => (
        <HomeRowTable
          id={item._id}
          category={item.category}
          companyAddress={item.companyAddress}
          companyLinkedinUrl={item.companyLinkedinUrl}
          companyname={item.companyname}
          productname={item.productname}
          employees={item.employees}
          description={item.description}
          industry={item.industry}
          website={item.website}
          state={item.state}
          city={item.city}
          country={item.country}
        />
      ))}
    </div>
  );
};

export default HomeTable;
