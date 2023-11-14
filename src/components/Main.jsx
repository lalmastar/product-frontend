import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Doctor from "./Doctor";
import Form from "./Form";
import Home from "../components/main/Home";

const baseURL = "https://getdoctors-backend.onrender.com/api/doctor/get-doctors";



const Main = () => {

//   const [doctor, setDoctor] = useState("Hello");
  const [doctor, setDoctor] = useState([]);

  const [department, setDepartment] = useState('')
  const [gender, setGender] = useState("");
  const [language, setLanguage] = useState("");
  const [consultation, setConsultation] = useState("");

    const handleSelect1 = (e) => {
      setDepartment(e.target.value)
    }

    const handleSubmit1 = (e) => {
      e.preventDefault();
      console.log(department.toLowerCase());
    };

    const handleSelect2 = (e) => {
      setGender(e.target.value);
    };

    const handleSubmit2 = (e) => {
      e.preventDefault();
      console.log(gender);
    };
  
    const handleSelect3 = (e) => {
      setLanguage(e.target.value);
    };
  
    const handleSubmit3 = (e) => {
      e.preventDefault();
      console.log(language);
    };

    const handleSelect4 = (e) => {
      setConsultation(e.target.value);
    };

    const handleSubmit4 = (e) => {
      e.preventDefault();
      console.log(consultation);
    };
  

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setDoctor(response.data);
    });
  }, []);


  const lenght = Object.keys(doctor).length;

  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 3;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = doctor.slice(firstIndex, lastIndex);
  const npage = Math.ceil(doctor.length / recordsPerPage);
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
    <div>
      <Home/>
    </div>
  );
};

export default Main;
