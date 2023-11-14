import React, { useState } from 'react';
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Form = () => {

  const [data, setData] = useState({
    fullname: "",
    email: "",
    description: ""
  })

  const [error, setError] = useState("");
	const navigate = useNavigate();

  const handleChange = (e) => {
    const {name, value} = e.target;
    setData((prev) => {
      return {...prev, [name]: value}
    })
  }

  const handleSubmit = async (e) => {
		e.preventDefault();
		try {
      const url = "https://getdoctors-backend.onrender.com/api/client/form";
			const { data: res } = await axios.post(url, data);
      if(res){
        navigate("/");
      }
			console.log(data);
			console.log(res.msg);
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
    <div className="catageory-div-3">
          <div className="form-cust">
            <form>
              {/* Name input */}
              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="form4Example1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="form4Example1"
                  className="form-control"
                  name="fullname"
                  onChange={handleChange}
                />
              </div>
              {/* Email input */}
              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="form4Example2">
                  Email address
                </label>
                <input
                  type="email"
                  id="form4Example2"
                  className="form-control"
                  name="email"
                  onChange={handleChange}
                />
              </div>
              {/* Description input */}
              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="form4Example3">
                  Description
                </label>
                <textarea
                  className="form-control"
                  id="form4Example3"
                  name="description"
                  onChange={handleChange}
                  rows={4}
                  defaultValue={""}
                />
              </div>
              {/* Submit button */}
              <button
                type="submit"
                className="btn custom-form-btn btn-primary btn-block mb-4"
                onClick={handleSubmit}
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>
  )
}

export default Form