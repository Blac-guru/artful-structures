import { useState, useEffect } from 'react';
import { useLocation } from 'wouter';

export function usePageLoading() {
  const [location] = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const [previousLocation, setPreviousLocation] = useState(location);

  useEffect(() => {
    // If location changed, show loading
    if (location !== previousLocation) {
      setIsLoading(true);
      
      // Simulate loading time to prevent flash and provide smooth experience
      const timer = setTimeout(() => {
        setIsLoading(false);
        setPreviousLocation(location);
      }, 500); // 500ms minimum loading time for smooth experience

      return () => clearTimeout(timer);
    }
  }, [location, previousLocation]);

  return isLoading;
}