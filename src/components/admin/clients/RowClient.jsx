import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const baseURL = `https://getdoctors-backend.onrender.com/api/client/delete-client`;

const RowClient = ({i, fullname, email, description, id}) => {

  const navigate = useNavigate();
  const { userInfo } = useSelector((state) => state.auth);

  const handleRemove = async(id) => {
    try{
      console.log(id);
      const res = await axios.delete(`${baseURL}/${id}`);
      if(res){
          navigate("/all-products");
          alert(`${res.data.fullname} is Deleted Successfully.`);
      }
    }catch(err){
        console.error(err);
    }
  }

  // useEffect(() => {
  //   if (userInfo) {
  //     navigate("/admin-home");
  //   }
  // }, [navigate, userInfo]);

  return (
    <tr className="gradeX">
      <td>{i}</td>
      <td>{fullname}</td>
      <td>{email}</td>
      <td>{description}</td>
      <td><button onClick={()=>handleRemove(id)}><i class="fa fa-trash" aria-hidden="true"></i></button></td>
    </tr>
  );
};

export default RowClient