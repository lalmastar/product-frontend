import React, { useEffect, useState } from "react";
import "./hometable.css";

const ClientTable = ({curcompanyname, id}) => {

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
  const recordsPerPage = 6;
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
    <div className="container background text-center col-12">
      <h1 className="companies-header-name">Companies Currently Using {curcompanyname}</h1>
      <div className="table-container">
        <div className="table-responsive">
          <table className="table">
            <thead className="table-dark">
              <tr>
                <th>Comapny Name</th>
                <th>Linkedin</th>
                <th>Industry</th>
                <th>Country</th>
                <th>Business Size</th>
              </tr>
            </thead>
            <tbody>
              {records.map((item, index) => (
                  <tr key={index}>
                    <td><a href={item.website}>{item.companyname}</a></td>
                    <td className="linkedin"><a href={item.companyLinkedinUrl}><svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 128 128" id="linkedin"><rect width="128" height="128" fill="#0177b5" rx="24" ry="24"></rect><path fill="#fff" d="M92 32H36a4 4 0 0 0-4 4v56a4 4 0 0 0 4 4h56a4 4 0 0 0 4-4V36a4 4 0 0 0-4-4ZM52 86H42V56h10Zm-5-34a6 6 0 1 1 6-6 6 6 0 0 1-6 6Zm39 34H76V66c0-1.66-2.24-3-5-3-4 0-5 5.34-5 7v16H56V56h10v7c0-5 4.48-7 10-7a10 10 0 0 1 10 10Z"></path></svg></a></td>
                    <td>{item.industry}</td>
                    <td>{item.country}</td>
                    <td>{item.employees}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ClientTable;
