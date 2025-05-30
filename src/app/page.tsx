import HeroSection from './../components/Sections/HeroSection';
import ProjectsSection from './../components/Sections/ProjectsSection';
import ContactSection from './../components/Sections/ContactSection';
import AboutSection from './../components/Sections/AboutSection';

export default function Home() {
  return (
    <div className="font-plex">
      <main>
        <HeroSection/>
        <ProjectsSection/>
        <AboutSection/>
        <ContactSection/>
      </main>
    </div>
  );
}
