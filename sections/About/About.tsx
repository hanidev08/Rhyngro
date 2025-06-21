import React from "react";
import "./style.scss";

export const About = () => {
  return (
    <section>
      <div className="container mt-5">
        <div className=" hidden md:flex justify-between items-start">
          <h1 className="parghrap w-1/3 ">Company</h1>
          <div className="w-2/3">
            <div className=" flex justify-between w-full">
              <p className="parghrap max-w-[360px]">
                Founded in 1982 by Principals Anthony Ingrao and Randy Kemper,
                our NYC-based studio specializes in bespoke, collaborative
                design that transforms the ordinary into the extraordinary.
              </p>

              <p className="parghrap max-w-[360px]">
                St. Tropez, Moscow, Saudi Arabia, Paris, and Hong Kong. Our
                clients include some of the world’s most influential financial
                power brokers and moguls, for whom we craft bespoke homes that
                are as unique as they are luxurious.
              </p>
            </div>
            <div className=" mt-6 flex justify-between w-full">
              <div className=" flex flex-col">
                <p className="parghrap max-w-[360px]">
                  Our practice is defined by the expert selection of materials
                  and the thoughtful relationships between elements of light,
                  texture, and scale. We believe in creating interiors that
                  connect seamlessly with their surroundings, resulting in
                  spaces that reflect both individual style and the cultural
                  context in which they exist.
                </p>
                <p className=" mt-6 parghrap max-w-[360px]">
                  Ingrao Design is renowned for its private residential projects
                  in prestigious locations including New York, Los Angeles,
                  Santa Barbara, Miami, Palm Beach, and Colorado, with a growing
                  portfolio that extends to international hotspots such as Tel
                  Aviv, Monaco,
                </p>
              </div>
              <p className="parghrap max-w-[360px]">
                With a dedicated team of 50 architects and designers, we have
                completed over 200 projects, consistently recognized in
                Architectural Digest’s AD100 and featured in prestigious
                publications such as Elle Décor, Vogue, and The New York Times.
                Ingrao Design continues to set the standard for luxury living,
                offering clients unparalleled access to original, masterful
                pieces through our formidable network of collectors and
                gallerists. Discover how our legacy of award-winning imagination
                and unmatched savoir-faire can bring your vision to life.
              </p>
            </div>
          </div>
        </div>
        <div className=" md:hidden flex flex-col">
          <h1 className="parghrap mt-24">Company</h1>
          <div className=" flex flex-col max-w-[800px]">
            <p className="parghrap mt-12 ">
              Founded in 1982 by Principals Anthony Ingrao and Randy Kemper, our
              NYC-based studio specializes in bespoke, collaborative design that
              transforms the ordinary into the extraordinary.
            </p>
            <p className="parghrap mt-12 ">
              Our practice is defined by the expert selection of materials and
              the thoughtful relationships between elements of light, texture,
              and scale. We believe in creating interiors that connect
              seamlessly with their surroundings, resulting in spaces that
              reflect both individual style and the cultural context in which
              they exist.
            </p>
            <p className="parghrap mt-12 ">
              Ingrao Design is renowned for its private residential projects in
              prestigious locations including New York, Los Angeles, Santa
              Barbara, Miami, Palm Beach, and Colorado, with a growing portfolio
              that extends to international hotspots such as Tel Aviv,
              Monaco,St. Tropez, Moscow, Saudi Arabia, Paris, and Hong Kong. Our
              clients include some of the world’s most influential financial
              power brokers and moguls, for whom we craft bespoke homes that are
              as unique as they are luxurious.
            </p>
            <p className="parghrap mt-12 ">
              With a dedicated team of 50 architects and designers, we have
              completed over 200 projects, consistently recognized in
              Architectural Digest’s AD100 and featured in prestigious
              publications such as Elle Décor, Vogue, and The New York Times.
              Ingrao Design continues to set the standard for luxury living,
              offering clients unparalleled access to original, masterful pieces
              through our formidable network of collectors and gallerists.
              Discover how our legacy of award-winning imagination and unmatched
              savoir-faire can bring your vision to life.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
