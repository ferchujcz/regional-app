import Hero from "@/components/Hero";
import About from "@/components/About";
import Storytelling from "@/components/Storytelling";
import Products from "@/components/Products";
import Ingredients from "@/components/Ingredients";
import WhyUs from "@/components/WhyUs";
import Gallery from "@/components/Gallery";
import ReelsCarousel from "@/components/ReelsCarousel";
import Testimonials from "@/components/Testimonials";
import LocalSeo from "@/components/LocalSeo";
import Faq from "@/components/Faq";
import CtaBanner from "@/components/CtaBanner";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-crema selection:bg-vino-deep selection:text-crema font-sans overflow-x-clip">
      <Hero />
      <About />
      <Storytelling />
      <Ingredients />
      <Products />
      <WhyUs />
      <Gallery />
      <ReelsCarousel />
      <Testimonials />
      <LocalSeo />
      <Faq />
      <CtaBanner />
      <Contact />
      <Footer />
    </main>
  );
}
