import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import EmailForm from "./components/EmailForm";
import Content from "./components/Content";
import ItemsTable from "./components/ItemsTable/ItemsTable";



class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Hero />
        <Content />
        <ItemsTable />
        <EmailForm />
        <Footer />
      </div>
    );
  }
}

export default App;
