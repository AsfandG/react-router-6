import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Get the current location

  useEffect(() => {
    // Check if the current route is '/'
    if (location.pathname === "/") {
      // Redirect to '/app'
      navigate("/user");
    }
  }, [navigate, location]);
  return <div>Home</div>;
};

export default Home;
