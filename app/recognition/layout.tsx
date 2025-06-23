import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import React from "react";

const LayoutProject = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default LayoutProject;
