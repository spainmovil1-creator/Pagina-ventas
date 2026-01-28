import HeroSection from "@/components/sections/HeroSection";
import PainPointsSection from "@/components/sections/PainPointsSection";
import SolutionSection from "@/components/sections/SolutionSection";
import ContentSection from "@/components/sections/ContentSection";
import ComparisonSection from "@/components/sections/ComparisonSection";
import ValueSection from "@/components/sections/ValueSection";
import PricingSection from "@/components/sections/PricingSection";
import StepsSection from "@/components/sections/StepsSection";
import FinalCTASection from "@/components/sections/FinalCTASection";

const Index = () => {
  return (
    <main className="overflow-hidden">
      <HeroSection />
      <PainPointsSection />
      <SolutionSection />
      <ContentSection />
      <ComparisonSection />
      <ValueSection />
      <PricingSection />
      <StepsSection />
      <FinalCTASection />
      
      {/* Footer simple */}
      <footer className="py-8 bg-primary text-primary-foreground text-center">
        <p className="font-body text-sm opacity-70">
          © {new Date().getFullYear()} Manual de Supervivencia Fiscal. Todos los derechos reservados.
        </p>
      </footer>
    </main>
  );
};

export default Index;
