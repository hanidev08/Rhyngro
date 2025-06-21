"use client";
import { About } from "@/sections/About/About";
import { Hero } from "@/sections/Hero";
import { useLayoutEffect, useState } from "react";
import { gsap } from "gsap";
import { Loader } from "@/sections/Loader";
import { useLoader } from "@/context/LoaderContext";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";

export default function Home() {
  const { loaderFinished, setLoaderFinished } = useLoader();
  const [timeline, setTimeline] = useState<gsap.core.Timeline | null>(null);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          setLoaderFinished(true);
        },
      });
      setTimeline(tl);
    });

    return () => context.revert();
  }, [setLoaderFinished]);

  return (
    <div>
      {loaderFinished ? (
        <>
          <Header />
          <Hero />
          <About />
          <Footer />
        </>
      ) : (
        <Loader timeline={timeline} />
      )}
    </div>
  );
}
