import React from 'react';
import { Outlet, Link } from "react-router-dom";
import './hometable.css';
import DummyLogo from '../../assets/dummy-logo.png';
import Company from '../company/Company';
const HomeRowTable = ({id, productname, employees,description}) => {
  return (
    <div>
      <div className='hometable-container-bottom-product'>
        <div className="product">
          <div className='logo'><img src={DummyLogo} alt="" /></div>
          <div className='product-name'><a href={`/product/${id}`}>{productname}</a></div>
          {/* <div className='product-name'><a href={`/product/${id}`}>{productname}<Company description={description}/></a></div> */}
        </div>
        <div className="total-companies">{employees}</div>
      </div>
      <div className='product-bar'></div>
      </div>
  )
}

export default HomeRowTable