'use client';

import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // You can also log the error to an error reporting service
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        this.props.fallback || (
          <div className="flex flex-col gap-y-2 items-center justify-center h-auto bg-red-100 p-5 text-red-900 rounded-lg border border-red-400 border-dashed inset-shadow-md shadow shadow-red-900/20">
            <h2>Oops, there is an error!</h2>
            <button
              type="button"
              className="bg-red-50 text-red-900 px-3 py-1 rounded-md cursor-pointer hover:opacity-80 transition-opacity duration-200"
              onClick={() => this.setState({ hasError: false, error: undefined })}
            >
              Try again?
            </button>
          </div>
        )
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
