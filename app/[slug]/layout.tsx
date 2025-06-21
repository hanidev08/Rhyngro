import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import React from "react";

const LayoutProject = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default LayoutProject;
