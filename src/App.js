import React from "react";
import BlockElement from "./components/BlockElement";
import DropDown from "./components/DropDown";
import FormContainer from "./components/FormContainer";
import InputElement from "./components/InputElement";
import Navbar from "./components/Navbar";
import SideBar from "./containers/SideBar";

function App() {
  return (
    <div>
      <Navbar />
      <SideBar />
      <FormContainer />
    </div>
  );
}

export default App;
