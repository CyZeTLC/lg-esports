import { useState, useEffect } from 'react';
import { getCurrentPage } from './utils/pageUtils';
import RoasterPage from './pages/RoasterPage';
import HomePage from './pages/HomePage';

export default function App() {
  console.log("Current Page:", getCurrentPage());
  const [page, setPage] = useState(getCurrentPage());

  useEffect(() => {
    const handleNavigation = () => {
      setPage(getCurrentPage());
    };

    window.addEventListener('popstate', handleNavigation);

    return () => window.removeEventListener('popstate', handleNavigation);
  }, []);

  switch (page) {
    case "home":
      return <HomePage />;
    case "roster":
      return <RoasterPage />;
    default:
      return <div className="min-h-screen bg-gh-bg text-gh-text flex items-center justify-center">404</div>
  }
}