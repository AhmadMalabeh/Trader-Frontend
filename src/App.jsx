import PrimarySearchAppBar from "./components/PrimarySearchAppBar";
import AddNewCarAd from "./components/AddNewCarAd";
import AddNewAd from "./components/AddNewAd";
import { Toolbar } from "@mui/material";
function App() {
  return (
    <>
      <PrimarySearchAppBar />
      <Toolbar />
      <AddNewAd>
        <AddNewCarAd />
      </AddNewAd>
    </>
  );
}

export default App;
