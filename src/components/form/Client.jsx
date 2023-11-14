import React, { useState } from "react";
import axios from "axios";
import "./clientform.css";
import { useNavigate } from "react-router-dom";



const Client = () => {
 

  const [data, setData] = useState({
    fullname: "",
    productname: "",
    email: "",
    phone: "",
    counts: "",
    requirement: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data);
    try {
      // const url = "https://getdoctors-backend.onrender.com/api/doctor/add-doctor";
      const url = "http://localhost:5000/api/client/form";
      const { data: res } = await axios.post(url, data);
      if (res) {
        navigate("/");
      }
      console.log(data);
      // console.log(res.msg);
      alert(res.message);
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <div className="form-container">
      <div className="form-header-flex">
      <div className="form-header">
        <h1>Fil and Get Your DATA</h1>
      </div>
      <div className="bar"></div>
      </div>
      <form action="">
        <div>
          <input
            type="text"
            placeholder="Enter Full Name"
            name="fullname"
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter Product Name"
            name="productname"
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter Email Address"
            name="email"
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter Phone Number"
            name="phone"
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter Confirm Counts"
            name="counts"
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter Requirement"
            name="requirement"
            onChange={handleChange}
          />
        </div>
        {/* <div>
          <textarea
            name="requirement"
            id=""
            placeholder="Enter Requirement"
            onChange={handleChange}
            style={{
              width: "450px",
              paddingRight: "20px",
              paddingLeft: "20px",
              paddingTop: "10px",
            }}
            cols="30"
            rows="6"
          ></textarea>
        </div> */}
        <div>
          <button onClick={handleSubmit} class="button-31" role="button">
            Submit
          </button>
        </div>
      </form>
    </div>
    
  );
};

export default Client;
