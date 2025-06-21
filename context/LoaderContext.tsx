"use client";
import { createContext, useContext, useState, useEffect } from "react";

type LoaderContextType = {
  loaderFinished: boolean;
  setLoaderFinished: (val: boolean) => void;
};

const LoaderContext = createContext<LoaderContextType | undefined>(undefined);

export function LoaderProvider({ children }: { children: React.ReactNode }) {
  const [loaderFinished, setLoaderFinishedState] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const navEntries = performance.getEntriesByType(
      "navigation"
    ) as PerformanceNavigationTiming[];

    const isRefresh = navEntries.length > 0 && navEntries[0].type === "reload";

    if (isRefresh) {
      sessionStorage.removeItem("loaderFinished"); // 🧼 إزالة القيمة السابقة عند كل refresh
    }

    const wasShown = sessionStorage.getItem("loaderFinished");
    if (wasShown === "true") {
      setLoaderFinishedState(true);
    }

    setIsReady(true);
  }, []);

  const setLoaderFinished = (val: boolean) => {
    sessionStorage.setItem("loaderFinished", String(val));
    setLoaderFinishedState(val);
  };

  if (!isReady) return null;

  return (
    <LoaderContext.Provider value={{ loaderFinished, setLoaderFinished }}>
      {children}
    </LoaderContext.Provider>
  );
}

export function useLoader() {
  const context = useContext(LoaderContext);
  if (!context) {
    throw new Error("useLoader must be used within a LoaderProvider");
  }
  return context;
}
