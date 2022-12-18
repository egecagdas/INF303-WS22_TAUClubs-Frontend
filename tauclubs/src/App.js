import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./page/Home";
import Club from "./page/Club";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home></Home>} />
        <Route path="/Clubs/:id" element={<Club />} />
      </Routes>
    </BrowserRouter>
  );
}
//export default App;
