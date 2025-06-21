// // components/LayoutWrapper.tsx
// "use client"; // ✅ هذا يحل المشكلة

// import { useLoader } from "@/context/LoaderContext";
// import { Header } from "@/sections/Header";
// import { Footer } from "@/sections/Footer";

// export function LayoutWrapper({ children }: { children: React.ReactNode }) {
//   const { loaderFinished } = useLoader();

//   return (
//     <>
//       {loaderFinished && <Header />}
//       {children}
//       {loaderFinished && <Footer />}
//     </>
//   );
// }
