import PrimarySearchAppBar from "./components/PrimarySearchAppBar";
//import AddNewCarAd from "./components/AddNewCarAd";
//import AddNewAd from "./components/AddNewAd";
import HomePage from "./components/HomePage";
import { Toolbar } from "@mui/material";
function App() {
  return (
    <>
      <PrimarySearchAppBar />
      <Toolbar />
      <HomePage />
      {/* <AddNewAd>
        <AddNewCarAd />
      </AddNewAd> */}
    </>
  );
}

export default App;
