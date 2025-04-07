import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useLoading = (initialLoadTime = 5000) => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    setProgress(0); // Reset progress về 0

    const startTime = Date.now();

    const progressInterval = setInterval(() => {
      const elapsedTime = Date.now() - startTime;
      const newProgress = Math.min((elapsedTime / initialLoadTime) * 100, 100);

      setProgress(Math.floor(newProgress)); // Làm tròn xuống để tránh số thập phân

      if (newProgress >= 100) {
        clearInterval(progressInterval);
        setIsLoading(false);
      }
    }, 16); // 60fps for smooth animation

    return () => {
      clearInterval(progressInterval);
    };
  }, [location.pathname, initialLoadTime]);

  return {
    isLoading,
    progress: Math.max(0, Math.min(100, progress)) // Đảm bảo giá trị từ 0-100
  };
};