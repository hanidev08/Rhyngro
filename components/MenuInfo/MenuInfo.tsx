"use client";
import {
  useAnimate,
  useMotionValueEvent,
  useScroll,
  motion,
} from "framer-motion";
import React, { useEffect, useState } from "react";
import "./style.scss";
import Link from "next/link";

type Props = {
  data: {
    title: string;
    desc: string;
    location: string;
    year: string;
    area: string;
    team: string;
  };
};

export const MenuInfo = ({ data }: Props) => {
  const { scrollY } = useScroll();

  const [isActive, setIsActive] = useState(false);
  const [navScope, navAnimate] = useAnimate();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (previous !== undefined && latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  useEffect(() => {
    if (isActive) {
      navAnimate(
        navScope.current,
        {
          height: "80%",
        },
        {
          duration: 0.7,
          ease: "easeInOut",
        }
      );
    } else {
      navAnimate(navScope.current, {
        height: 0,
      });
    }
  }, [navAnimate, navScope, isActive]);

  useEffect(() => {
    if (isActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isActive]);
  return (
    <motion.section
      variants={{
        visible: { y: "100%" },
        hidden: { y: 0 },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className=" sticky bottom-0 z-50"
    >
      <div className="container flex justify-between bg-white">
        <div
          className=" uppercase cursor-pointer"
          onClick={() => {
            setIsActive(true);
          }}
        >
          Info
        </div>
        <div>
          <Link href="/projects" className=" cursor-pointer">All projects</Link>
        </div>
      </div>
      <div
        ref={navScope}
        className="fixed bottom-0 left-0 right-0 w-full h-0 bg-white z-10 overflow-hidden"
      >
        <div
          className="container mt-6 flex flex-col sm:flex-row-reverse
          sm:justify-between gap-6 sm:gap-0"
        >
          <div className="sm:w-1/3">
            <h2>Description</h2>
            <p className="desc text-gray-400 max-w-[400px] md:max-w-[500px]">
              {data.desc}
            </p>
          </div>
          <div className=" sm:w-2/3">
            <div className=" flex flex-row sm:flex-col justify-between w-2/3 gap-4">
              <div>
                <h2>Area</h2>
                <p className=" text-gray-400">{data.area}</p>
              </div>
              <div>
                <h2>Team</h2>
                <p className=" text-gray-400">{data.team}</p>
              </div>
            </div>
            <div className=" flex flex-col gap-4">
              <div>
                <h2>Year</h2>
                <p className=" text-gray-400">{data.year}</p>
              </div>
              <div>
                <h2>Location</h2>
                <p className=" text-gray-400">{data.location}</p>
              </div>
            </div>
          </div>
          <div
          className=" absolute bottom-0 uppercase cursor-pointer"
            onClick={() => {
              setIsActive(false);
            }}
          >
            Close
          </div>
        </div>
      </div>
    </motion.section>
  );
};
