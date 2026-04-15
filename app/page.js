import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Teacher from "./components/Teacher";
import Stats from "./components/Stats";
import About from "./components/About";
import Features from "./components/Features";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Categories from "./components/Categories";
export default function Home() {
  return (
    <main>
      <Hero />
      <Categories />
      <Teacher />
      <Stats />
      <About />
      <Features />
      <CTA />
      <Footer />
    </main>
  );
}
