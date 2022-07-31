import React from "react";
// import footer
import Footer from "./components/Footer/Footer";
// import header
import Header from "./components/Header/Header";
// import Second Banner
import SecondBanner from "./components/Home/SecondBanner";
// import Top Banner
import TopBanner from "./components/Home/TopBanner";

//src/App.js import './App.css'; 
function App() {

  return (

    <div className="App">
      <Header />
      <TopBanner />
      <SecondBanner />
      <Footer />
    </div>
  );

}

export default App;