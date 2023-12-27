import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Contacts from "./Components/Contacts";
import { Routes, Route } from "react-router-dom";
import PageNotFound from "./Components/PageNotFound";
import AllRoutes from "./Components/Routes/AllRoutes";

function App() {
  return (
    <>
      <Navbar />
      <AllRoutes />
    </>
  );
}

export default App;
