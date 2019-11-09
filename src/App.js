import React from "react";
import Products from "./components/Products";
import Header from "./components/Header";
import Message from "./components/Message";
import Carts from "./components/Carts";
import Footer from "./components/Footer";
import ProductsContainer from "./containers/ProductsContainer";
function App() {
  return (
    <div>
      <Header />
      <main id="mainContainer">
        <div className="container">
          <ProductsContainer />
          <Message />
          <Carts />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
