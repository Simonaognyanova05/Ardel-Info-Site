import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";

import Login from "./components/Login";
import AllPages from "./components/AllPages";


function App() {
  return (
    <>
      <Header />


      <Routes>
        <Route path="/" element={<AllPages />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
