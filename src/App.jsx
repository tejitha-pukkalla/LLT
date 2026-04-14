import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// ── Layout components ────────────────────────────────────────────────────────
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import FloatingSocial from './components/common/FloatingSocial';
import EnquiryPopup from './components/common/EnquiryPopup';

// ── Lazy-loaded pages ────────────────────────────────────────────────────────
const Home          = lazy(() => import('./pages/Home'));
const About         = lazy(() => import('./pages/About'));
const Services      = lazy(() => import('./pages/Services'));
const ServiceDetail = lazy(() => import('./pages/ServiceDetail'));
const Technologies  = lazy(() => import('./pages/Technologies'));
const Portfolio     = lazy(() => import('./pages/Portfolio'));
const Careers       = lazy(() => import('./pages/Careers'));
const Contact       = lazy(() => import('./pages/Contact'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const Terms         = lazy(() => import('./pages/Terms'));
const NotFound      = lazy(() => import('./pages/NotFound'));

// ── Scroll to top on route change ────────────────────────────────────────────
function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

// ── Page loader spinner ───────────────────────────────────────────────────────
function PageLoader() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{
        width: 40, height: 40,
        border: '3px solid #3BB3B3',
        borderTop: '3px solid transparent',
        borderRadius: '50%',
        animation: 'spin 0.8s linear infinite',
      }} />
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}

// ── Inner app ─────────────────────────────────────────────────────────────────
function AppInner() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <FloatingSocial />
      <EnquiryPopup />

      <Suspense fallback={<PageLoader />}>
        <Routes>
          {/* createPageUrl('Home') }
          <Route path="/"                element={<Home />} />
          <Route path="/Home"            element={<Home />} />

          <Route path="/About"           element={<About />} />
          <Route path="/about"           element={<About />} />

          <Route path="/Services"        element={<Services />} />
          <Route path="/services"        element={<Services />} />

          {/* ServiceDetail?slug=web-development గా వస్తుంది */}
          <Route path="/ServiceDetail"   element={<ServiceDetail />} />
          <Route path="/service-detail"  element={<ServiceDetail />} />

          <Route path="/Technologies"    element={<Technologies />} />
          <Route path="/technologies"    element={<Technologies />} />

          <Route path="/Portfolio"       element={<Portfolio />} />
          <Route path="/portfolio"       element={<Portfolio />} />

          <Route path="/Careers"         element={<Careers />} />
          <Route path="/careers"         element={<Careers />} />

          <Route path="/Contact"         element={<Contact />} />
          <Route path="/contact"         element={<Contact />} />

          <Route path="/PrivacyPolicy"   element={<PrivacyPolicy />} />
          <Route path="/privacy-policy"  element={<PrivacyPolicy />} />

          <Route path="/Terms"           element={<Terms />} />
          <Route path="/terms"           element={<Terms />} />

          <Route path="*"                element={<NotFound />} />
        </Routes>
      </Suspense>

      <Footer />
    </>
  );
}

// ── Root App ──────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <AppInner />
      </Router>
    </HelmetProvider>
  );
}