import Footer from "app/components/Footer";
import Header from "app/components/Header";
import Nft from "app/views/Nft";
import { Routes as AppLinks, Route } from "react-router-dom";

import Home from "../views/Home";

const Routes = () => {
  return (
    <>
      <Header />

      <AppLinks>
        <Route path="/" element={<Home />} />
        <Route path="/nft" element={<Nft />} />
      </AppLinks>
      <Footer />
    </>
  );
};

export default Routes;
