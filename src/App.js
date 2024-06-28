import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Flex } from "@chakra-ui/react";
import Signup from "./screens/SignUp";
import Verification from "./screens/Verification";
import Login from "./screens/Login";
import Categories from "./screens/Categories";

function App() {
  return (
    <BrowserRouter className="App">
      <Header />
      <Flex pt="73px" alignItems="center" justifyContent="center">
        <Routes>
          <Route exact path="/" element={<Signup />} />
          <Route exact path="/verification" element={<Verification />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/categories" element={<Categories />} />
        </Routes>
      </Flex>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
