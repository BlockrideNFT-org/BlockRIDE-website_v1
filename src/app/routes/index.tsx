import Footer from "app/components/Footer";
import Header from "app/components/Header";
import { Routes as AppLinks, Route } from "react-router-dom";

import Home from "../views/Home";

const Routes = () => {
  return (
    <>
      <Header />

      <AppLinks>
        <Route path="/" element={<Home />} />
      </AppLinks>
      <Footer />
    </>
  );
};

export default Routes;
