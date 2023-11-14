// import { Navbar, Nav, Container, NavDropdown, Badge } from 'react-bootstrap';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';
import { LinkContainer } from 'react-router-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { useLogoutMutation } from '../slices/usersApiSlice';
import { logout } from '../slices/authSlice';
import logo from "../assets/logo.png";

const Header = () => {
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

  return (

<header className="header-section">
<div className="container">
  <nav className="navbar navbar-expand-lg">
    <a className="navbar-brand" href="#">
      <img src={logo} alt="logo"/>
    </a>
    
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>

    <div
      className="collapse navbar-collapse"
      id="navbarSupportedContent"
    >
      <ul className="navbar-nav mr-auto">
        
        <li className="nav-item active">
          <a className="nav-link" href="#">Home</a>
        </li>
        
        <li className="nav-item">
          <a className="nav-link" href="#">
            About
          </a>
        </li>
      </ul>
      {userInfo ? (
                <>
                    <ul className="navbar-nav mr-auto">
                      <li className="nav-item">
                        <Link className="nav-link" to="/all-clients">All Clients</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/all-doctors">All Doctors</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/add-doctor">Add Dcotor</Link>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/profile">
                        {userInfo.name}
                        </a>
                      </li>
                    </ul>
                    <button
                      className="btn btn-outline-success my-2 my-sm-0"
                      type="submit"
                      onClick={logoutHandler}
                    >
                      Logout
                    </button>
                </>
              ) : (
                <>
                <form className="form-inline my-2 my-lg-0">
                    <input
                      className="form-control mr-sm-2"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                    <button
                      className="btn btn-outline-success my-2 my-sm-0"
                      type="submit"
                    >
                      Search
                    </button>
                  </form>
                </>
              )}
      
      
    </div>
  </nav>
</div>
</header>
  );
};

export default Header;


