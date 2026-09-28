
import Home from "./pages/home";
import Register from "./pages/register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from "./components/layout";


function Routers() {
  return (
    <BrowserRouter>
      <Routes>
       {/* <Route path="" element={<Layout/>}> */}
        <Route path="/" element={<Home/>} />
        <Route path="/register" element={<Register/>}/>
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default Routers;
