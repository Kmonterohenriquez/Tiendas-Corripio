import "./App.sass";
import routes from "./routes";
import React from "react"

// Components
import Upperline from "./components/Upperline";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Upperline />
      <Header />
      <Nav />
      {routes}
      <Footer />
    </div>
  );
}

export default App;
