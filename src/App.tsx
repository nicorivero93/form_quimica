import { Routes, Route } from 'react-router-dom';
import { AppNav } from './components/shared/AppNav';
import { Footer } from './components/shared/Footer';
import { WhatsAppFAB } from './components/WhatsAppFAB';
import { FeedbackWidget } from './components/FeedbackWidget';
import { HomePage } from './pages/HomePage';
import { LabPage } from './pages/LabPage';
import { AprenderPage } from './pages/AprenderPage';
import { AnioPage } from './pages/AnioPage';
import { TemaPage } from './pages/TemaPage';
import { BuscarTemasPage } from './pages/BuscarTemasPage';

export function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <AppNav />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/element/:symbol" element={<HomePage />} />
          <Route path="/element/:symbol/structure/:id" element={<HomePage />} />
          <Route path="/lab" element={<LabPage />} />
          <Route path="/aprender" element={<AprenderPage />} />
          <Route path="/aprender/buscar" element={<BuscarTemasPage />} />
          <Route path="/aprender/tema/:slug" element={<TemaPage />} />
          <Route path="/aprender/:anioId" element={<AnioPage />} />
        </Routes>
      </main>
      <Footer />
      <FeedbackWidget />
      <WhatsAppFAB />
    </div>
  );
}
