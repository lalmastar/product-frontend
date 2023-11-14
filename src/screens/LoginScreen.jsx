import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import FormContainer from "../components/FormContainer";
import { useDispatch, useSelector } from "react-redux";
import { useLoginMutation } from "../slices/usersApiSlice";
import { setCredentials } from "../slices/authSlice";
import { toast } from "react-toastify";
import Login from "../components/login/Login";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [login, { isLoading }] = useLoginMutation();

  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) {
      navigate("/all-products");
    }
  }, [navigate, userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await login({ email, password }).unwrap();
      dispatch(setCredentials({ ...res }));
      navigate("/all-products");
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  return (
    // <section className="category-sections login-form">
    //   <div className="container-fluid">
    //     <div className="row-custom-login">
    //       <div className="login-div">
    //         <div className="form-cust">
    //           <h2 className="login-title">Login </h2>
    //           <form onSubmit={submitHandler}>
    //             {/* Email input */}
    //             <div className="form-outline mb-4">
    //               <label className="form-label" htmlFor="form4Example2">
    //                 Email or Phone
    //               </label>
    //               <input
    //                 value={email}
    //                 onChange={(e) => setEmail(e.target.value)}
    //                 type="email"
    //                 id="form4Example2"
    //                 className="form-control"
    //               />
    //             </div>

    //             {/* Name input */}
    //             <div className="form-outline mb-4">
    //               <label className="form-label" htmlFor="form4Example1">
    //                 Password
    //               </label>
    //               <input
    //                 value={password}
    //                 onChange={(e) => setPassword(e.target.value)}
    //                 type="password"
    //                 id="form4Example1"
    //                 className="form-control"
    //               />
    //             </div>

    //             {/* Submit button */}
    //             <button
    //               disabled={isLoading}
    //               type="submit"
    //               variant="primary"
    //               className="btn custom-form-btn btn-primary btn-block mb-4"
    //             >
    //               LOGIN
    //             </button>
    //           </form>

    //           {isLoading && <Loader />}
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <div>
      <Login/>
    </div>
  );
};

export default LoginScreen;
