import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import Cards from "./components/Cards";

function App() {
  return (
    <div className="container">
      <Router>
        <Routes>
          <Route path="/" element={<Cards />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/login" element={<LoginForm />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
