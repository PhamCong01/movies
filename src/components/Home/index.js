import React from "react";
import ComingSoon from "./ComingSoon";
import Contact from "./Contact";
import Footer from "./Footer";
import Header from "./Header";
import MoviesNew from "./MoviesNew";
import MoviesWeek from "./MoviesWeek";
import NavFixed from "./NavFixed";

function Home() {
  return (
    <div className="flex flex-col items-center">
      <NavFixed />
      <Header />
      <MoviesNew />
      <MoviesWeek />
      <ComingSoon />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
