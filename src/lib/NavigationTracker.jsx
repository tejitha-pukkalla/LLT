import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function NavigationTracker() {
  const location = useLocation();

  useEffect(() => {
    // Simple page tracking - console log or analytics
    console.log('Page visited:', location.pathname);
    
    // Future: Add Google Analytics or other tracking here
    // Example: gtag('event', 'page_view', { page_path: location.pathname });
  }, [location]);

  return null;
}