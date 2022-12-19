import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./page/Home";
import Club from "./page/Club";
import Clubs from "./page/Clubs";
import Login from "./page/Login";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home></Home>} />
        <Route path="/Clubs" element={<Clubs />} />
        <Route path="/Clubs/:id" element={<Club />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
//export default App;
