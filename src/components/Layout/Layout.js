import React from "react";
import Header from "./Header";
import { Toaster } from "react-hot-toast";
import Offers from "./Offers";

const Layout = ({ children, title, description, keywords, author }) => {
  return (
    <div>
      <Header />
      <main style={{ minHeight: "70vh" }}>
        {children}
      </main>
        <Toaster />
    </div>
  );
};

Layout.defaultProps = {
  title: "Ecommerce app - shop now",
  description: "mern stack project",
  keywords: "mern,react,node,mongodb",
  author: "Techinfoyt",
};

export default Layout;
