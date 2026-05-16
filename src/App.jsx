import { portfolioData } from './data/portfolioData';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
      <a className="pular-link" href="#conteudo">
        Pular para o conteúdo principal
      </a>
      <div className="estrutura-app">
        <Header name={portfolioData.identity.name} />
        <main id="conteudo">
          <HeroSection identity={portfolioData.identity} metrics={portfolioData.metrics} />
          <AboutSection about={portfolioData.about} />
          <SkillsSection skills={portfolioData.skills} />
          <ProjectsSection projects={portfolioData.projects} />
          <ContactSection contact={portfolioData.contact} />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
