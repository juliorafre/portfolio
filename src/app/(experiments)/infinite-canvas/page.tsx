import ErrorBoundary from '@/components/common/error-boundary';
import InfiniteCanvas from '@/components/infinite-canvas/infinite-canvas';

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
