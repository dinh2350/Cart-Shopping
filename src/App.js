import React from "react";
import Products from "./components/Products";
import Header from "./components/Header";
import Message from "./components/Message";
import Carts from "./components/Carts";
import Footer from "./components/Footer";
function App() {
  return (
    <div>
      <Header />
      <main id="mainContainer">
        <div className="container">
          <Products />
          <Message />
          <Carts />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
