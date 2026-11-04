import { Routes, Route } from "react-router-dom";
import Home, { Footer } from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import ProjectDetails from "./pages/ProjectDetails";
import Navbar from "./components/Navbar";
import ScrollManager from "./components/ScrollManager";
import SmoothScroll from "./components/SmoothScroll";
import WhatsAppButton from "./components/WhatsAppButton";
import CallButton from "./components/CallButton";
import BackToTop from "./components/BackToTop";

export default function App() {
  return (
    <>
      <SmoothScroll />
      <ScrollManager />
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route
            path="/portfolio/:slug"
            element={<ProjectDetails />}
          />
        </Routes>
      </main>

      <Footer />
      <CallButton />
      <WhatsAppButton />
      <BackToTop />
    </>
  );
}