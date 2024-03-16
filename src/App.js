import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import Body from "./Component/Body";

const App = () => {
  return (
    <div className="bg-bgColor ">
      <Header/>
      <Body/>
      <Footer/>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
