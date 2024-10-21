import { Text, Center, Box, Container } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./components/Navbar.css";
import HomePage from "./appPages/HomePage";
import AboutPage from "./appPages/AboutPage";
import ServicesPage from "./appPages/ServicesPage";
import ContactPage from "./appPages/ContactPage";

function App() {
  return (
    <>
      <Box minH={"100vh"}>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/services' element={<ServicesPage />} />
          <Route path='/contact' element={<ContactPage />} />
        </Routes>
      </Box>
    </>
  );
}

export default App;
