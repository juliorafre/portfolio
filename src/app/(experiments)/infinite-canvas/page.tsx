import InfiniteCanvas from '@/components/infinite-canvas/infinite-canvas';
import ErrorBoundary from '@/components/common/error-boundary';

const InfiniteCanvasPage = () => {
  return (
    <div className="main-container">
      <ErrorBoundary>
        <InfiniteCanvas />
      </ErrorBoundary>
    </div>
  );
};

export default InfiniteCanvasPage;
