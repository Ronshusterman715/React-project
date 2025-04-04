import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import Cards from "./components/Cards";
import { ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";
import { useJwtDecoder } from "./hooks/useJwtDecoder";

function App() {
  const [jwtToken, setJwtToken] = useState<string | null>(
    JSON.parse(localStorage.getItem("token") ?? "{}")
  );

  const { decodedToken, error } = useJwtDecoder(jwtToken);

  useEffect(() => {}, [jwtToken]);

  const loginEvent = () => {
    setJwtToken(JSON.parse(localStorage.getItem("token") ?? "{}"));
  };

  return (
    <div className="container">
      <ToastContainer />
      <Router>
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
        </Routes>
      </Router>
    </div>
  );
}

export default App;
