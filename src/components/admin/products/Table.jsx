import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./table.css";

const Table = () => {
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


  const removeBaseURL = `http://localhost:5000/api/product/delete-product`;
  const navigate = useNavigate();
  const { userInfo } = useSelector((state) => state.auth);

  const handleRemove = async(id) => {
    try{
      console.log(id);
      const res = await axios.delete(`${removeBaseURL}/${id}`);
      if(res){
          navigate("/add-product");
          console.log(res);
          alert(`${res.data.productname} is Deleted Successfully.`);
      }
    }catch(err){
        console.error(err);
    }
  }
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
                <th>Employees</th>
                <th>Industry</th>
                <th>Website</th>
                <th>Company Linkedin Url</th>
                <th>Description</th>
                <th>Company Address</th>
                <th>City</th>
                <th>State</th>
                <th>Country</th>
                <th>Delete</th>
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
                    <td>{item.employees}</td>
                    <td>{item.industry}</td>
                    <td>{item.website}</td>
                    <td>{item.companyLinkedinUrl}</td>
                    <td>{item.description}</td>
                    <td>{item.companyAddress}</td>
                    <td>{item.city}</td>
                    <td>{item.state}</td>
                    <td>{item.country}</td>
                    <td><button onClick={()=>handleRemove(item._id)}><i class="fa fa-trash" aria-hidden="true"></i></button></td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;
