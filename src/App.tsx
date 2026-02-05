import { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Navbar } from './components/Navbar';
import { Overview } from './components/pages/Overview';
import { Experience } from './components/pages/Experience';
import { Initiatives } from './components/pages/Initiatives';
import { Experiments } from './components/pages/Experiments';
import { Skills } from './components/pages/Skills';
import { Contact } from './components/pages/Contact';
import { CaseStudyDetail } from './components/pages/CaseStudyDetail';
import { ContactModal } from './components/ContactModal';

export default function App() {
  const [currentPage, setCurrentPage] = useState('overview');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<string | null>(null);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    setSelectedCaseStudy(null); // Clear selected case study when navigating to a different page
    setIsSidebarOpen(false); // Close sidebar on mobile after navigation
  };

  const renderPage = () => {
    if (selectedCaseStudy) {
      return <CaseStudyDetail caseStudy={selectedCaseStudy} onBack={() => setSelectedCaseStudy(null)} />;
    }

    switch (currentPage) {
      case 'overview':
        return <Overview />;
      case 'experience':
        return <Experience />;
      case 'initiatives':
        return <Initiatives onSelectCase={setSelectedCaseStudy} />;
      case 'experiments':
        return <Experiments />;
      case 'skills':
        return <Skills />;
      case 'contact':
        return <Contact />;
      default:
        return <Overview />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar currentPage={currentPage} onNavigate={handleNavigate} isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar onContactClick={() => setIsContactOpen(true)} onMenuClick={() => setIsSidebarOpen(true)} />
        <main className="flex-1 overflow-y-auto">
          {renderPage()}
        </main>
      </div>
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </div>
  );
}