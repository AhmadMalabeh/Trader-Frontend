import PrimarySearchAppBar from "./components/PrimarySearchAppBar";
import AddNewAd from "./components/AddNewAd";
import HomePage from "./components/HomePage";
import { Toolbar } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <PrimarySearchAppBar />
        <Toolbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add-new-ad" element={<AddNewAd />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
