import { useState } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
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
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<string | null>(null);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Derive current page from pathname
  const getCurrentPage = () => {
    const path = location.pathname;
    if (path === '/' || path === '/overview') return 'overview';
    if (path === '/experience') return 'experience';
    if (path === '/initiatives') return 'initiatives';
    if (path === '/experiments') return 'experiments';
    if (path === '/skills') return 'skills';
    if (path === '/contact') return 'contact';
    if (path.startsWith('/case-study/')) return 'initiatives';
    return 'overview';
  };

  const currentPage = getCurrentPage();

  const handleNavigate = (page: string) => {
    navigate(page === 'overview' ? '/' : `/${page}`);
    setSelectedCaseStudy(null);
    setIsSidebarOpen(false);
  };

  const handleSelectCaseStudy = (caseStudyId: string) => {
    setSelectedCaseStudy(caseStudyId);
    navigate(`/case-study/${caseStudyId}`);
  };

  const handleBackFromCaseStudy = () => {
    setSelectedCaseStudy(null);
    navigate('/initiatives');
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar onContactClick={() => setIsContactOpen(true)} onMenuClick={() => setIsSidebarOpen(true)} />
        <main className="flex-1 overflow-y-auto">
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/overview" element={<Overview />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/initiatives" element={<Initiatives onSelectCase={handleSelectCaseStudy} />} />
            <Route path="/experiments" element={<Experiments />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact onOpenContactModal={() => setIsContactOpen(true)} />} />
            <Route
              path="/case-study/:id"
              element={
                selectedCaseStudy ? (
                  <CaseStudyDetail caseStudy={selectedCaseStudy} onBack={handleBackFromCaseStudy} />
                ) : (
                  <Initiatives onSelectCase={handleSelectCaseStudy} />
                )
              }
            />
          </Routes>
        </main>
      </div>
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </div>
  );
}