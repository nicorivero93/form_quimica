import { Routes, Route } from 'react-router-dom';
import { AppNav } from './components/shared/AppNav';
import { Footer } from './components/shared/Footer';
import { HomePage } from './pages/HomePage';
import { LabPage } from './pages/LabPage';

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
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
