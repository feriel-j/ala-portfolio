import "./_dist/app.css";
import MainLayout from "./domains/alaFP/layouts/MainLayout";
import { Route, Routes } from "react-router-dom";
import BaseComponent from "./domains/alaFP/pages/BaseComponent";
import UiComponent from "./domains/alaFP/pages/UiComponent";
import UxComponent from "./domains/alaFP/pages/UxComponent";
import ContactFeature from "./domains/alaFP/pages/ContactFeature";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainLayout/>}>
        <Route index element={<BaseComponent/>}/>
        <Route path="/ui" element={<UiComponent/>}/>
        <Route path="/ux" element={<UxComponent/>}/>
        <Route path="/contact" element={<ContactFeature/>}/>

        </Route>
        {/* <Route path="/contact" element={<ContactUs/>}/> */}
      </Routes>
      
    </div>
  );
}

export default App;
