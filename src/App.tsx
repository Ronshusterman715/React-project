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
import { ThemeProvider } from "./context/ThemeContext";
import Mycards from "./components/Mycards";
import Favoritecards from "./components/Favoritecards";

function App() {
  const [jwtToken, setJwtToken] = useState<string | null>(
    localStorage.getItem("token")
  );

  // const { decodedToken, error } = useJwtDecoder(jwtToken);

  useEffect(() => {}, [jwtToken]);

  const loginEvent = () => {
    setJwtToken(localStorage.getItem("token"));
  };

  const logoutEvent = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setJwtToken(null);
    window.location.href = "/login";
  };

  return (
    <>
      <ToastContainer />

      <Router>
        <ThemeProvider>
          <Navbar logoutEvent={logoutEvent} />
          <Routes>
            <Route path="/" element={<Cards />} />
            <Route path="/cards" element={<Cards />} />
            <Route
              path="/register"
              element={<RegisterForm isCreateMode={true} />}
            />
            <Route
              path="/users/:id/edit"
              element={<RegisterForm isCreateMode={false} />}
            />
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
            <Route path="/mycards" element={<Mycards />} />
            <Route path="/favcards" element={<Favoritecards />} />
          </Routes>
          <Footer />
        </ThemeProvider>
      </Router>
    </>
  );
}

export default App;
