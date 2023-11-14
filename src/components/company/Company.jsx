import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./company.css";
import Table from "../admin/products/Table";
import Collections from "../collections/Collections";
import Client from '../form/Client'
import RelatedProducts from "../relatedPrdocuts/RelatedProducts";
import ClientTable from "../table/ClientTable";
import Description from "../description/Description";

const Company = () => {
  let { id } = useParams(); 
  const baseURL = `http://localhost:5000/api/product/get-product/${id}`;
  const [data, setData] = useState([]);

  const fetchInfo = () => {
    return fetch(baseURL)
      .then((res) => res.json())
      .then((d) => setData(d));
  };

  useEffect(() => {
    fetchInfo();
  }, []);
  console.log(data);


  return (
    <div className="company-header-main">

      <Description description={data.description} companyname={data.companyname} employees={data.employees}/>
      
      <div>
      <div className="company-header-bottom">
          <div className="table">
          <ClientTable id={id} curcompanyname={data.companyname} />
          </div>
          <div className="client-form">
            <Client/>
          </div>
        </div>

        <div className="products">
          <div className="related-products">
          <RelatedProducts/>
          </div>
          <div>
            <Collections/>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Company;