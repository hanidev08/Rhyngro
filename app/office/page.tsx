import Image from "next/image";
import React from "react";
import Pepole from "@/public/assets/images/Pepole.jpeg";
import Women from "@/public/assets/images/Women1.jpeg";
import Women2 from "@/public/assets/images/Women2.jpeg";
import Women3 from "@/public/assets/images/Women3.jpeg";
import Men from "@/public/assets/images/Men1.jpeg";
import "./style.scss";

const page = () => {
  return (
    <section>
      <div className="container mt-72 md:mt-16">
        <div className=" flex justify-center">
          <div className=" relative w-[100vw] max-w-[700px] aspect-[7/5]">
            <Image src={Pepole} alt="Pepole" fill />
          </div>
        </div>
        <div className="mt-24 md:mt-5">
          <div className=" hidden md:flex justify-between items-start">
            <h1 className="parghrapOffice w-1/2 ">Approach</h1>
            <div className="w-1/2 flex flex-col gap-4">
              <p className="parghrapOffice">
                Brad Swartz Architects is a design practice focused on the inner
                city. We believe the best creativity comes out of constraints.
                By embracing the limitations of existing buildings and complex
                sites we generate clever and original architectural outcomes.
                And we’ve proved it with a string of award-winning projects that
                reinvent city living. Our practice and work has been published
                locally and internationally, with more than fifty print and
                video features since we were established in 2015.
              </p>
              <p className="parghrapOffice">
                Brad Swartz Architects believes in doing more with less. By
                renovating existing dwellings and living in a smaller footprint
                we can foster a more sustainable way for our cities to develop.
                After all, improving existing buildings is one of the most
                sustainable things we can do.
              </p>
              <p className="parghrapOffice">
                We map our client’s needs and aspirations against the
                characteristics of a site and unlock its hidden potential
                through thoughtful space planning, connections to nature and
                harnessing light.
              </p>
              <p className="parghrapOffice">
                By emphasising quality over quantity, our projects demonstrate
                that housing of all sizes can be desirable, not a compromise.
                Our designs are enriched with long-lasting natural materials and
                tactile surfaces. A pared-back palette and precision
                craftsmanship creates a sense of order and calm. Luxurious
                details and custom elements are crafted specifically for our
                clients’ lifestyles. We collaborate with specialist fabricators
                and cabinetmakers to deliver seamlessness between the
                architecture, custom joinery and bespoke furniture elements.
              </p>
              <p>
                While we mostly focus on improving urban housing, our practice
                has experience across a diverse range of projects, including
                beach houses, farm houses and short-term accommodation. Our
                rigorous approach to design transcends scale and location, and
                we seek partnerships with clients who share our values and
                design sensibility.
              </p>
            </div>
          </div>
          <div className=" md:hidden flex flex-col">
            <h1 className="parghrapOffice">Approach</h1>
            <div className=" flex flex-col max-w-[800px]">
              <p className="parghrapOffice mt-12 ">
                Brad Swartz Architects is a design practice focused on the inner
                city. We believe the best creativity comes out of constraints.
                By embracing the limitations of existing buildings and complex
                sites we generate clever and original architectural outcomes.
                And we’ve proved it with a string of award-winning projects that
                reinvent city living. Our practice and work has been published
                locally and internationally, with more than fifty print and
                video features since we were established in 2015.
              </p>
              <p className="parghrapOffice mt-12 ">
                Brad Swartz Architects believes in doing more with less. By
                renovating existing dwellings and living in a smaller footprint
                we can foster a more sustainable way for our cities to develop.
                After all, improving existing buildings is one of the most
                sustainable things we can do.
              </p>
              <p className="parghrapOffice mt-12 ">
                We map our client’s needs and aspirations against the
                characteristics of a site and unlock its hidden potential
                through thoughtful space planning, connections to nature and
                harnessing light.
              </p>
              <p className="parghrapOffice mt-12 ">
                By emphasising quality over quantity, our projects demonstrate
                that housing of all sizes can be desirable, not a compromise.
                Our designs are enriched with long-lasting natural materials and
                tactile surfaces. A pared-back palette and precision
                craftsmanship creates a sense of order and calm. Luxurious
                details and custom elements are crafted specifically for our
                clients’ lifestyles. We collaborate with specialist fabricators
                and cabinetmakers to deliver seamlessness between the
                architecture, custom joinery and bespoke furniture elements.
              </p>
              <p className="parghrapOffice mt-12 ">
                While we mostly focus on improving urban housing, our practice
                has experience across a diverse range of projects, including
                beach houses, farm houses and short-term accommodation. Our
                rigorous approach to design transcends scale and location, and
                we seek partnerships with clients who share our values and
                design sensibility.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-24 md:hidden md:mt-5">
          <div className=" flex flex-col">
            <h1 className="parghrapOffice">People</h1>
            <div className=" mt-12 grid grid-cols-2 gap-x-2 gap-y-8">
              <div className=" col-span-1">
                <div className=" text-xs max-w-[200px]">
                  <span>Brad Swartz, Director</span>
                  <p>M.Arch UNSW</p>
                </div>
                <div className=" mt-4 relative w-[40vw] max-w-[300px] aspect-[5/5]">
                  <Image
                    src={Women}
                    alt="Women"
                    fill
                    className=" object-cover object-top"
                  />
                </div>
              </div>
              <div className=" col-span-1">
                <div className=" text-xs max-w-[200px]">
                  <span>Brad Swartz, Director</span>
                  <p>M.Arch UNSW</p>
                </div>
                <div className=" mt-4 relative w-[40vw] max-w-[300px] aspect-[5/5]">
                  <Image
                    src={Women2}
                    alt="Women"
                    fill
                    className=" object-cover object-top"
                  />
                </div>
              </div>
              <div className=" col-span-1">
                <div className=" text-xs max-w-[200px]">
                  <span>Brad Swartz, Director</span>
                  <p>M.Arch UNSW</p>
                </div>
                <div className=" mt-4 relative w-[40vw] max-w-[300px] aspect-[5/5]">
                  <Image
                    src={Women3}
                    alt="Women"
                    fill
                    className=" object-cover"
                  />
                </div>
              </div>
              <div className=" col-span-1">
                <div className=" text-xs max-w-[200px]">
                  <span>Brad Swartz, Director</span>
                  <p>M.Arch UoN</p>
                </div>
                <div className=" mt-4 relative w-[40vw] max-w-[300px] aspect-[5/5]">
                  <Image
                    src={Men}
                    alt="Women"
                    fill
                    className=" object-cover grayscale object-top"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" hidden md:flex mt-24">
          <div className=" flex w-full justify-between items-start">
            <h1 className="parghrapOffice w-1/2">People</h1>
            <div className="grid grid-cols-2 gap-x-2 gap-y-8 w-1/2">
              <div className=" col-span-1">
                <div className=" text-xs max-w-[200px]">
                  <span>Adele Isaac, Associate</span>
                  <p>M.Arch USyd</p>
                </div>
                <div className=" mt-4 relative w-[20vw] max-w-[300px] aspect-[5/5]">
                  <Image
                    src={Women}
                    alt="Women"
                    fill
                    className=" object-cover object-top"
                  />
                </div>
              </div>
              <div className=" col-span-1">
                <div className=" text-xs max-w-[200px]">
                  <span>Emily Elliott, Associate</span>
                  <p>M.Arch UNSW, NSW ARB 9312</p>
                </div>
                <div className=" mt-4 relative w-[20vw] max-w-[300px] aspect-[5/5]">
                  <Image
                    src={Women2}
                    alt="Women"
                    fill
                    className=" object-cover object-top"
                  />
                </div>
              </div>
              <div className=" col-span-1">
                <div className=" text-xs max-w-[200px]">
                  <span>Mara Liebhard, Associate</span>
                  <p>M.Arch HTWG Konstanz</p>
                </div>
                <div className=" mt-4 relative w-[20vw] max-w-[300px] aspect-[5/5]">
                  <Image
                    src={Women3}
                    alt="Women"
                    fill
                    className=" object-cover"
                  />
                </div>
              </div>
              <div className=" col-span-1">
                <div className=" text-xs max-w-[200px]">
                  <span>Liam Smith, Associate</span>
                  <p>M.Arch UoN</p>
                </div>
                <div className=" mt-4 relative w-[20vw] max-w-[300px] aspect-[5/5]">
                  <Image
                    src={Men}
                    alt="Women"
                    fill
                    className=" object-cover grayscale object-top"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" mt-24 flex flex-col md:flex-row md:justify-between md:items-start">
          <h1 className="parghrapOffice md:w-1/2">Careers</h1>
          <p className="parghrapOffice mt-12 md:mt-0 md:w-1/2">
            While we don’t have any positions available at the moment, we always
            love to hear from talented architects and designers. Please send
            through your portfolio (no more than 10mb) and CV to
            work@bradswartz.com.au and we will get back to you if a suitable
            role comes up.
          </p>
        </div>
      </div>
    </section>
  );
};

export default page;
