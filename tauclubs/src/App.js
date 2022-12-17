
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./page/Home";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home></Home>} />
      </Routes>
    </BrowserRouter>
  );
}
//export default App;
