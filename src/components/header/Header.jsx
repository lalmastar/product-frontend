import React, { useEffect, useState } from "react";
import Logo from "../../assets/logo.png";
import "./header.css";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { useLogoutMutation } from '../../slices/usersApiSlice';
import { logout } from '../../slices/authSlice';
import { Table } from "react-bootstrap";

const Header = () => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  }

  const { userInfo } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate('/login');
    } catch (err) {
      console.error(err);
    }
  };

  const [search, setSearch] = useState("");
  const [flag, setFlag] = useState(false)

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

  // console.log(data);
  // console.log(search);

  if(search.length > 0){
    setFlag(true);
  }

  return (
    <nav>
      <a href="">
        <svg
          id="logo-85"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            class="ccustom"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10 0C15.5228 0 20 4.47715 20 10V0H30C35.5228 0 40 4.47715 40 10C40 15.5228 35.5228 20 30 20C35.5228 20 40 24.4772 40 30C40 32.7423 38.8961 35.2268 37.1085 37.0334L37.0711 37.0711L37.0379 37.1041C35.2309 38.8943 32.7446 40 30 40C27.2741 40 24.8029 38.9093 22.999 37.1405C22.9756 37.1175 22.9522 37.0943 22.9289 37.0711C22.907 37.0492 22.8852 37.0272 22.8635 37.0051C21.0924 35.2009 20 32.728 20 30C20 35.5228 15.5228 40 10 40C4.47715 40 0 35.5228 0 30V20H10C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0ZM18 10C18 14.4183 14.4183 18 10 18V2C14.4183 2 18 5.58172 18 10ZM38 30C38 25.5817 34.4183 22 30 22C25.5817 22 22 25.5817 22 30H38ZM2 22V30C2 34.4183 5.58172 38 10 38C14.4183 38 18 34.4183 18 30V22H2ZM22 18V2L30 2C34.4183 2 38 5.58172 38 10C38 14.4183 34.4183 18 30 18H22Z"
            fill="#5417D7"
          ></path>
        </svg>
      </a>

      <div>
        <ul className={`navbar ${clicked ? '.navbar active' : '.navbar'}`}>
          

          {userInfo ? (
            <>
              <li><a href="/all-clients">Clients</a></li>
              <li><a href="/all-products">Products</a></li> 
              <li><a href="/add-product">Add Product</a></li>
              <li><a href="/profile">Profile</a></li>
              <li><button
                      className="btn btn-outline-success my-2 my-sm-0"
                      type="submit"
                      onClick={logoutHandler}
                    >
                      Logout
                    </button></li>
            </>
          ) : (
            <>
            <div className="header-right-search">
          <li>
            {/* <div className="search-container">
              <input type="text" placeholder="Search..." onChange={(e) => setSearch(e.target.value)}/>
            </div> */}
          </li>
          </div>
          <div className="header-right-list">
          <li><a className="active" href="/">Home</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Contact Us</a></li>
          </div>
            </>
          )

          }
        </ul>
      </div>

      <div className="mobile" onClick={handleClick}>
        <i className={`bar ${clicked ? 'fas fa-times' : 'fas fa-bars'}`}></i>
        {/* <i className="fas fa-bars"></i>
        <i className="fas fa-times"></i> */}
      </div>
    </nav>
  );
};

export default Header;
