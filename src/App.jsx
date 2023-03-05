import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar";
import Saved from "./pages/Saved";
import Home from "./pages/Home";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Box flex={1}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/saved" element={<Saved />} />
        </Routes>
      </Box>
      <Footer />
      <ToastContainer
        position="top-center"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
