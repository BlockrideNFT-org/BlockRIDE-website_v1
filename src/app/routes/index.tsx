import Footer from "app/components/Footer";
import Header from "app/components/Header";
import Blog from "app/views/Blog";
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
        <Route path="/blog" element={<Blog />} />
        <Route path="/nft" element={<Nft />} />
        <Route path="/join-waitlist" element={<Docs />} />
      </AppLinks>
      <Footer />
    </>
  );
};

export default Routes;
