import { Navbar } from '../components/layout/Navbar';
import { HeroSection } from '../components/home/HeroSection';
import { AboutSection } from '../components/home/AboutSection';
import { FeaturedProjects } from '../components/home/FeaturedProjects';
import { SkillsSection } from '../components/home/SkillsSection';
import { ExperienceSection } from '../components/home/ExperienceSection';
import { ContactSection } from '../components/home/ContactSection';
import { Footer } from '../components/layout/Footer';

export function HomePage() {
  return (
    <div className="portfolio-shell">
      <Navbar />
      <main id="main-content">
        <HeroSection />
        <AboutSection />
        <FeaturedProjects />
        <SkillsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;
