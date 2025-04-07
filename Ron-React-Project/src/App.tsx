import "./App.css";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useNavigate,
} from "react-router-dom";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import Cards from "./components/Cards";
import { ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";
import { useJwtDecoder } from "./hooks/useJwtDecoder";
import Navbar from "./components/Navbar";
import Cardform from "./components/Cardform";
import Businessinfo from "./components/Businessinfo";
import Footer from "./components/Footer";

function App() {
  const [jwtToken, setJwtToken] = useState<string | null>(
    localStorage.getItem("token")
  );

  const { decodedToken, error } = useJwtDecoder(jwtToken);

  useEffect(() => {
    debugger;
  }, [jwtToken]);

  const loginEvent = () => {
    setJwtToken(localStorage.getItem("token"));
  };

  const logoutEvent = () => {
    localStorage.removeItem("token");
    setJwtToken(null);
    window.location.href = "/login";
  };

  return (
    <>
      <ToastContainer />

      <Router>
        <Navbar decodedToken={decodedToken} logoutEvent={logoutEvent} />
        <Routes>
          <Route path="/" element={<Cards decodedToken={decodedToken} />} />
          <Route
            path="/cards"
            element={<Cards decodedToken={decodedToken} />}
          />
          <Route path="/register" element={<RegisterForm />} />
          <Route
            path="/login"
            element={<LoginForm loginEvent={loginEvent} />}
          />
          <Route
            path="/cards/create"
            element={<Cardform isCreateMode={true} />}
          />
          <Route
            path="/cards/:id/edit"
            element={<Cardform isCreateMode={false} />}
          />
          <Route path="/businessinfo/:id/" element={<Businessinfo />} />
        </Routes>
        <Footer decodedToken={decodedToken} />
      </Router>
    </>
  );
}

export default App;
