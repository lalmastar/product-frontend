import React, { useEffect, useState } from "react";
import axios from "axios";
import './allclients.css';
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const baseURL = "http://localhost:5000/api/client/all-clients";

const AllClients = () => {
    const [client, setClient] = useState([]);

  useEffect(() => {
      axios.get(baseURL).then((response) => {
        setClient(response.data);
      });
    }, []);

    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 10;
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const records = client.slice(firstIndex, lastIndex);
    const npage = Math.ceil(client.length / recordsPerPage);
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
  
    // console.log(client);

    const removeBaseURL = `http://localhost:5000/api/client/delete-client`;
  const navigate = useNavigate();
  const { userInfo } = useSelector((state) => state.auth);

  const handleRemove = async(id) => {
    try{
      console.log(id);
      const res = await axios.delete(`${removeBaseURL}/${id}`);
      if(res){
          navigate("/add-product");
          console.log(res);
          // alert(`${res.data.fullname} is Deleted Successfully.`);
      }
    }catch(err){
        console.error(err);
    }
  }

  return (
<div className="container-sm text-center col-10 box">
      {/* <h1 className="text-success">Products</h1> */}
      <div className="table-container">
        <div className="table-responsive">
          <table className="table">
            <thead className="table-dark">
              <tr>
              <th>SL No.</th>
              <th>Full Name</th>
              <th>Product Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Counts</th>
              <th>Requirement</th>
              <th>Delete</th>
              </tr>
            </thead>

            <tbody>
              {records.map((item, index) => (
                  <tr key={index}>
                    <td>{index+1}</td>
                    <td>{item.fullname}</td>
                    <td>{item.productname}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td>{item.counts}</td>
                    <td>{item.requirement}</td>
                    <td><button onClick={()=>handleRemove(item._id)}><i class="fa fa-trash" aria-hidden="true"></i></button></td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    
  )
}

export default AllClients