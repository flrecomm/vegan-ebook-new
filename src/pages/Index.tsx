import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import RecipePreview from "@/components/RecipePreview";
import SocialProof from "@/components/SocialProof";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Benefits />
      <RecipePreview />
      <SocialProof />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
