import React from "react";
import { Routes, Route } from "react-router-dom";
import { About } from "../../pages/About";
import { Contact } from "../../pages/Contact";

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Intro } from "../../components/Intro";
import { Reviews } from "../../components/Reviews";
import Tour from "../../components/Tour";

export const MyRoutes = () => {
  return (
    <div>
      <Header />
      <Intro />

      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Tour />
              <Reviews />
            </div>
          }
        />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
};
