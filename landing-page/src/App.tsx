import { useState } from "react";

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import './index.css'
import Layout from "./components/layouts/layout";
import ContactUsPage from "./pages/ContactUs";
import SubscribePage from "./pages/Subscribe";
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
          <Route index  element={<Home />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="/subscribe" element={<SubscribePage />} />

          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
