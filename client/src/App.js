import React from "react";
import { Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import Fotter from "./components/Fotter";

function App() {
  return (
    <>
    <Header/>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Fotter/>
    </>
  );
}

export default App;
