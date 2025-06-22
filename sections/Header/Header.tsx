"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  clamp,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
  useInView,
  useAnimate,
} from "framer-motion";
import { usePathname } from "next/navigation";
import "./style.scss";
import Link from "next/link";

const navItems = [
  { label: "Projects", href: "/projects" },
  { label: "News", href: "/info" },
  { label: "Office", href: "/Office" },
  { label: "Contacts", href: "/contacts" },
];

const slideUp = {
  initial: {
    y: "100%",
  },
  open: {
    y: "0%",
    transition: { duration: 0.5, delay: 0.7 },
  },
  closed: {
    y: "100%",
    transition: { duration: 0.5 },
  },
};

export const Header = () => {
  const pathname = usePathname();
  const headerRef = useRef(null);
  const isInView = useInView(headerRef, { amount: 0.1, margin: "0px" });
  const [isActive, setIsActive] = useState(false);
  const [navScope, navAnimate] = useAnimate();

  useEffect(() => {
    if (isActive) {
      navAnimate(
        navScope.current,
        {
          height: "100%",
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

  const description = useRef(null);
  const isInViewAnimate = useInView(description, { once: false });
  const shouldAnimate = isActive && isInViewAnimate;

  const { scrollY } = useScroll();
  const scrollYBounded = useMotionValue(0);
  const scrollYBoundedProgress = useTransform(scrollYBounded, [0, 100], [0, 1]);

  useMotionValueEvent(scrollY, "change", (current) => {
    if (!isInView) return;
    const previous = scrollY.getPrevious();
    if (previous === undefined) return;
    const diff = current - previous;
    const newValue = scrollYBounded.get() + diff;
    scrollYBounded.set(clamp(0, 100, newValue));
  });

  const dynamicFontSize = useTransform(
    scrollYBoundedProgress,
    [0, 1],
    ["clamp(3rem, 10vw, 10rem)", "clamp(1rem, 3vw, 1.5rem)"]
  );

  useEffect(() => {
    if (isActive) {
      document.body.style.overflow = "hidden"; // يمنع التمرير
    } else {
      document.body.style.overflow = ""; // يعيد الوضع الطبيعي
    }

    // تأكد من تنظيف التأثير إذا خرجت من المكون
    return () => {
      document.body.style.overflow = "";
    };
  }, [isActive]);

  return (
    <header ref={headerRef}>
      <div
        ref={navScope}
        className=" fixed top-0 left-0 right-0 w-full h-0 bg-black z-10 overflow-hidden"
      >
        <div className="container relative h-full py-2 flex flex-col justify-between items-start">
          <div></div>
          <nav
            ref={description}
            className=" flex flex-col justify-center gap-2"
          >
            {navItems.map(({ label, href }) => (
              <Link
                href={href}
                key={label}
                className="menu text-white relative flex flex-col overflow-hidden"
              >
                <motion.span
                  variants={slideUp}
                  initial="initial"
                  animate={shouldAnimate ? "open" : "closed"}
                >
                  {label}
                </motion.span>
              </Link>
            ))}
          </nav>
          <div className=" uppercase text-sm text-white flex flex-col gap-8">
            <div className=" uppercase text-sm text-white flex relative overflow-hidden">
              <motion.span
                variants={slideUp}
                initial="initial"
                animate={shouldAnimate ? "open" : "closed"}
              >
                Instgram
              </motion.span>
            </div>
          </div>
        </div>
      </div>
      <div className="container fixed top-0 left-0 z-10">
        <div className="flex mt-3 justify-between items-center md:items-start w-full">
          {pathname === "/" ? (
            <motion.a
              href="/"
              style={{ fontSize: dynamicFontSize }}
              transition={{
                duration: 10,
              }}
              className="heading leading-28 text-white uppercase cursor-pointer"
            >
              {isActive ? (
                <div className=" text-white">Rhyngro</div>
              ) : (
                <div className=" text-black">Rhyngro</div>
              )}
            </motion.a>
          ) : (
            <a
              href={"/"}
              className="headingMobile leading-28 text-sm uppercase cursor-pointer"
            >
              {isActive ? (
                <div className=" text-white">Rhyngro</div>
              ) : (
                <div className=" text-black">Rhyngro</div>
              )}
            </a>
          )}

          <div className="hidden md:flex items-center justify-center gap-8 mt-2">
            {navItems.map(({ label, href }) => (
              <Link
                href={href}
                key={label}
                className="text-gray-500 uppercase text-sm"
              >
                {label}
              </Link>
            ))}
          </div>
          <div
            className="md:hidden text-sm uppercase cursor-pointer"
            onClick={() => {
              setIsActive(!isActive);
            }}
          >
            {isActive ? (
              <div className=" text-white">CLOSE</div>
            ) : (
              <div>MENU</div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
