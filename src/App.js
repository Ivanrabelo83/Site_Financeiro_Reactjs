import React from "react";
import Analytcs from "./components/Analytcs";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";
import Cards from "./components/Cards";
import Footer from "./components/Footer";


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Analytcs />
      <Newsletter />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
