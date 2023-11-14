import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./addproduct.css";

const AddProduct = () => {
  const [data, setData] = useState({
    category: "",
    productname: "",
    companyname: "",
    employees: "",
    industry: "",
    website: "",
    companyLinkedinUrl: "",
    description: "",
    companyAddress: "",
    city: "",
    state: "",
    country: "",
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
      const url = "http://localhost:5000/api/product/add-product";
      const { data: res } = await axios.post(url, data);
      if (res) {
        navigate("/all-products");
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
    <section className="h-100 section-main">
      <div className="row d-flex justify-content-center align-items-center g-0">
        <div className="col-xl-6">
          <div className="card-body p-md-5 text-black section">
            <h3 className="mb-5 text-uppercase text-header">Product Data </h3>
            <form action="">
              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="form3Example8">
                  Category
                </label>
                <input
                  type="text"
                  id="form3Example8"
                  className="form-control form-control-lg"
                  name="category"
                  onChange={handleChange}
                />
              </div>

              <div className="row">
                <div className="col-md-6 mb-4">
                  <div className="form-outline">
                    <label className="form-label" htmlFor="form3Example1m">
                    Product Name
                    </label>
                    <input
                      type="text"
                      id="form3Example1m"
                      className="form-control form-control-lg"
                      name="productname"
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="col-md-6 mb-4">
                  <div className="form-outline">
                    <label className="form-label" htmlFor="form3Example1n">
                    Company Name
                    </label>
                    <input
                      type="text"
                      id="form3Example1n"
                      className="form-control form-control-lg"
                      name="companyname"
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 mb-4">
                  <div className="form-outline">
                    <label className="form-label" htmlFor="form3Example1m1">
                    Employees
                    </label>
                    <input
                      type="text"
                      id="form3Example1m1"
                      className="form-control form-control-lg"
                      name="employees"
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="col-md-6 mb-4">
                  <div className="form-outline">
                    <label className="form-label" htmlFor="form3Example1n1">
                    Industry
                    </label>
                    <input
                      type="text"
                      id="form3Example1n1"
                      className="form-control form-control-lg"
                      name="industry"
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 mb-4">
                  <div className="form-outline">
                    <label className="form-label" htmlFor="form3Example1m1">
                    Website
                    </label>
                    <input
                      type="text"
                      id="form3Example1m1"
                      className="form-control form-control-lg"
                      name="website"
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="col-md-6 mb-4">
                  <div className="form-outline">
                    <label className="form-label" htmlFor="form3Example1n1">
                    Company Linkedin Url
                    </label>
                    <input
                      type="text"
                      id="form3Example1n1"
                      className="form-control form-control-lg"
                      name="companyLinkedinUrl"
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="form3Example8">
                Description
                </label>
                <input
                  type="text"
                  id="form3Example8"
                  className="form-control form-control-lg"
                  name="description"
                  onChange={handleChange}
                />
              </div>

              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="form3Example8">
                Company Address
                </label>
                <input
                  type="text"
                  id="form3Example8"
                  className="form-control form-control-lg"
                  name="companyAddress"
                  onChange={handleChange}
                />
              </div>

              <div className="row">
                <div className="col-md-4 mb-4">
                  <label className="form-label" htmlFor="form3Example8">
                    City
                  </label>
                  <input
                    type="text"
                    id="form3Example8"
                    className="form-control form-control-lg"
                    name="city"
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-4 mb-4">
                  <label className="form-label" htmlFor="form3Example8">
                    State
                  </label>
                  <input
                    type="text"
                    id="form3Example8"
                    className="form-control form-control-lg"
                    name="state"
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-4 mb-4">
                  <label className="form-label" htmlFor="form3Example8">
                    Country
                  </label>
                  <input
                    type="text"
                    id="form3Example8"
                    className="form-control form-control-lg"
                    name="country"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="d-flex justify-content-end pt-3">
                <button
                  type="submit"
                  className="btn custom-form-btn btn-primary btn-block mb-4"
                  onClick={handleSubmit}
                >
                  SUBMIT
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddProduct;
