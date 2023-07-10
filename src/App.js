import React, { Fragment } from "react";
import Aside from "./Components/Aside/Aside";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Main from "./Components/Main/Main";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <Fragment>
      <Header />
      <Navbar />
      <Aside />
      <Main />
      <Footer />
    </Fragment>
  );
}

export default App;
