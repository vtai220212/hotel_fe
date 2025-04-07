import React from 'react';
import { LoadingWrapper, LoadingContent, ProgressBar, ProgressText, LoadingText } from './style';

const LoadingScreen = ({ isLoading, progress = 0 }) => { // Thêm giá trị mặc định
  // Đảm bảo progress là số hợp lệ
  const safeProgress = Math.max(0, Math.min(100, parseInt(progress) || 0));

  return (
    <LoadingWrapper $isLoading={isLoading}>
      <LoadingContent>

        <ProgressBar $progress={safeProgress} />
        <ProgressText>{safeProgress}%</ProgressText>
      </LoadingContent>
    </LoadingWrapper>
  );
};

export default LoadingScreen;