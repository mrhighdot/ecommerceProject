import React from "react";
import { Navigation, Footer } from "components";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <main className="w-full h-screen  ">
      <section className="px-12">
        <Navigation />
        <Outlet />
      </section>
      <Footer />
    </main>
  );
};

export default AppLayout;
