import Hero from "@/components/Hero";
import LocalSeo from "@/components/LocalSeo";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-crema selection:bg-vino-deep selection:text-crema font-sans overflow-x-clip">
      <Hero />
      <LocalSeo />
      <CtaBanner />
      <Footer />
    </main>
  );
}
