import Footer from "app/components/Footer";
import Header from "app/components/Header";
import Docs from "app/views/Docs";
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
        <Route path="/docs" element={<Docs />} />
      </AppLinks>
      <Footer />
    </>
  );
};

export default Routes;
