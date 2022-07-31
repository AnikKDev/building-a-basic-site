import React from "react";
// import footer
import Footer from "./components/Footer/Footer";
// import header
import Header from "./components/Header/Header";
// import Home
import Home from "./components/Home/Home";

//src/App.js import './App.css'; 
function App() {

  return (

    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );

}

export default App;