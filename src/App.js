import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import CreatorSignUp from "./pages/CreatorSignUp";

function App() {
  return (
    <div className="App max-w-7xl mx-auto">
      <Navbar />
      <Routes>
        <Route path={`/`} element={<Home />} />
        <Route path={`/sign-in`} element={<SignIn />} />
        <Route path={`/sign-up`} element={<SignUp />} />
        <Route path={`/creator-sign-up`} element={<CreatorSignUp />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
