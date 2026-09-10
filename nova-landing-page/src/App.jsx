import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Trusted from "./components/Trusted";
import Features from "./components/Features";
import About from "./components/About";
import HowItWorks from "./components/HowItWorks";
import Stats from "./components/Stats";
import Solutions from "./components/Solutions";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Trusted />
      <Features />
      <About />
      <HowItWorks />
      <Stats />
      <Solutions />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </>
  );
}

export default App;