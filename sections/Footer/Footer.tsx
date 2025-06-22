import React from "react";

export const Footer = () => {
  return (
    <footer>
      <div className="container text-[12px] pb-2 leading-3.5 uppercase">
        <div className=" flex flex-col md:flex-row md:justify-between md:items-end">
          <div className=" flex md:flex-col max-md:justify-between max-md:items-center">
            <div>RHIZOME. (C) 2022</div>
            <div className=" md:hidden">TOP↑</div>
            <div
              className=" max-md:hidden"
            >
              Made by vosk
            </div>
          </div>
          <div className="hidden md:block">TOP↑</div>
          <div className=" mt-6 flex flex-col">
            <span>Contact us:</span>
            <span>info@rhizomegroup.eu</span>
          </div>
          <div className=" mt-6 flex flex-col">
            <span>Follow us on social:</span>
            <span>Instagram Facebook Linkedin Twitter</span>
          </div>
          <div className=" md:hidden mt-6">Made by vosk</div>
        </div>
      </div>
    </footer>
  );
};
