import AddNewAd from "./components/AddNewAd";
import HomePage from "./components/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="bg-gray-50  m-auto">
      <BrowserRouter>
        <div className="border-2 border-gray-200 rounded-lg shadow-lg max-w-7xl m-auto">
          <Navbar />

          <div className="mt-0">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/add-new-ad" element={<AddNewAd />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
