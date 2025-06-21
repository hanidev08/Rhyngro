"use client";
import React, { useRef } from "react";
import {
  clamp,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
  useInView,
} from "framer-motion";
import { usePathname } from "next/navigation";
import "./style.scss";
import Link from "next/link";

const navItems = [
  { label: "projects", href: "/projects" },
  { label: "News", href: "/info" },
  { label: "Office", href: "/Office" },
  { label: "contacts", href: "/contacts" },
];

export const Header = () => {
  const pathname = usePathname();
  const headerRef = useRef(null);
  const isInView = useInView(headerRef, { amount: 0.1, margin: "0px" });

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

  // const descriptionOpacity = useTransform(
  //   scrollYBoundedProgress,
  //   [0, 0.3, 1, 1],
  //   [0, 1, 1, 0]
  // );

  return (
    <header ref={headerRef}>
      <div className="fixed top-0 left-0 container z-40">
        <div className="flex mt-3 justify-between items-start w-full">
          {pathname === "/" ? (
            <motion.a
              href="/"
              style={{ fontSize: dynamicFontSize }}
              transition={{
                duration: 10,
              }}
              className="heading leading-28 uppercase cursor-pointer"
            >
              Rhyngro
            </motion.a>
          ) : (
            <a
              href={"/"}
              className="headingMobile leading-28 text-sm uppercase cursor-pointer"
            >
              Rhyngro
            </a>
          )}

          {/* {pathname === "/" ? (
            <motion.div
              style={{ opacity: descriptionOpacity }}
              className="hidden md:flex relative text-sm max-w-[230px] text-gray-400 uppercase"
            >
              IS AN ARCHITECTURAL practice CREATING PLACES TO LIVE IN, TO GET
              TO, TO BE PART OF
            </motion.div>
          ) : (
            ""
          )} */}

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
          <div className="md:hidden text-sm uppercase">Menu</div>
        </div>
      </div>
    </header>
  );
};
