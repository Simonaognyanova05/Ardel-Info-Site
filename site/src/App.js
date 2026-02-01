import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";

import Login from "./components/Login";
import AllPages from "./components/AllPages";
import Messages from "./components/Messages/Messages";


function App() {
  return (
    <>
      <Header />


      <Routes>
        <Route path="/" element={<AllPages />} />
        <Route path="/login" element={<Login />} />
        <Route path="/messages" element={<Messages />} />

      </Routes>
    </>
  );
}

export default App;
