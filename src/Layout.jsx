import React from 'react';
import { ThemeProvider } from './components/theme/ThemeContext';
import TopBar from './components/common/TopBar';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import FloatingSocial from './components/common/FloatingSocial';
import EnquiryPopup from './components/common/EnquiryPopup';

export default function Layout({ children, currentPageName }) {
  const isSpecialPage = ['NotFound', '404'].includes(currentPageName);

  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col">
        <style>{`
          :root {
            --color-primary: #1B365D;
            --color-secondary: #2E8B8B;
            --color-accent: #3BB3B3;
            --color-highlight: #00D4AA;
          }
          
          .dark {
            --color-bg: #0A0F1C;
            --color-card: #111827;
            --color-text: #F8FAFC;
            --color-muted: #94A3B8;
          }
          
          .light {
            --color-bg: #FAFBFC;
            --color-card: #FFFFFF;
            --color-text: #1E293B;
            --color-muted: #64748B;
          }

          html {
            scroll-behavior: smooth;
          }

          body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          }

          /* Custom Scrollbar */
          ::-webkit-scrollbar {
            width: 10px;
          }
          
          ::-webkit-scrollbar-track {
            background: transparent;
          }
          
          ::-webkit-scrollbar-thumb {
            background: linear-gradient(180deg, #2E8B8B, #3BB3B3);
            border-radius: 5px;
          }
          
          ::-webkit-scrollbar-thumb:hover {
            background: linear-gradient(180deg, #3BB3B3, #00D4AA);
          }

          /* Smooth Animations */
          * {
            transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          }

          /* Selection */
          ::selection {
            background: #2E8B8B40;
            color: inherit;
          }
        `}</style>

        {/* Enquiry Popup */}
        <EnquiryPopup />

        {/* Top Bar - Hide on special pages */}
        {!isSpecialPage && <TopBar />}

        {/* Header */}
        <Header />

        {/* Main Content */}
        <main className="flex-1">
          {children}
        </main>

        {/* Footer - Hide on special pages */}
        {!isSpecialPage && <Footer />}

        {/* Floating Social */}
        <FloatingSocial />
      </div>
    </ThemeProvider>
  );
}