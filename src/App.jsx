import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import Home, { Footer } from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import ProjectDetails from "./pages/ProjectDetails";
import Navbar from "./components/Navbar";
import ScrollManager from "./components/ScrollManager";
import SmoothScroll from "./components/SmoothScroll";
import WhatsAppButton from "./components/WhatsAppButton";
import CallButton from "./components/CallButton";
import BackToTop from "./components/BackToTop";
import ScrollProgress from "./components/ScrollProgress";
import CustomCursor from "./components/CustomCursor";

export default function App() {
  const location = useLocation();

  return (
    <>
      <SmoothScroll />
      <ScrollManager />
      <ScrollProgress />
      <Navbar />

      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route
              path="/portfolio/:slug"
              element={<ProjectDetails />}
            />
          </Routes>
        </motion.main>
      </AnimatePresence>

      <Footer />
      <CallButton />
      <WhatsAppButton />
      <BackToTop />
      <CustomCursor />
    </>
  );
}