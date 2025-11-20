import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";

export default function HomePage() {
  return (
    <div style={{ backgroundColor: "var(--bg-dark)", minHeight: "100vh" }}>
      <HeroSection />
      <AboutSection />
    </div>
  );
}

