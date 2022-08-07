import LandingComponent from "./Pages/LandingComponent";
import Categories from "./Pages/Categories";
import Slider from "./Pages/Slider";
import ProductList from "./Pages/ProductList";
import Popular from "./Pages/Popular";
import Trusted from "./Pages/Trusted";
// import Bottam from "./Pages/Bottam";
import Singal from "./Pages/Singal";
import NoPage from "./Pages/NoPage";
import Navcomo from "./Pages/Navcomo";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./Styles/Slider.css";
function App() {
  return (
    <div className="mainapp">
      <Routes>
        <Route path="/" element={<Navcomo />}></Route>
        <Route path="/Categories" element={<Categories />} />

        <Route path="/Popular" element={<Popular />} />
        <Route path="/Singal" element={<Singal />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
      {/* <ProductList /> */}
      {/* <Trusted /> */}
      {/* <Bottam /> */}
    </div>
  );
}

export default App;
