import React from "react";
import { Navigation, Footer } from "components";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <main className="w-full h-screen">
      <Navigation />
      <Outlet />
      <Footer />
    </main>
  );
};

export default AppLayout;
