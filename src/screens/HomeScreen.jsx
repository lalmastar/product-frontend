import { useSelector } from 'react-redux';
import Hero from '../components/Hero';
import Home from '../components/main/Home.jsx';
import Test from '../components/Test';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const HomeScreen = () => {
  const navigate = useNavigate();
  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) {
      navigate("/admin-home");
    }
  }, [navigate, userInfo]);
  return(
    <Home/>
  )
};
export default HomeScreen;
