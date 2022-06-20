import React from "react";
import BlockElement from "./components/BlockElement";
import DropDown from "./components/DropDown";
import FormContainer from "./components/FormContainer";
import FormContainer2 from "./components/FormContainer2";
import FormContainer3 from "./components/FormContainer3";
import InputElement from "./components/InputElement";
import Navbar from "./components/Navbar";
import SideBar from "./containers/SideBar";

function App() {
  return (
    <div>
      <Navbar />
      <SideBar />
      <FormContainer />
      <FormContainer2 />
      <FormContainer3 />
    </div>
  );
}

export default App;
