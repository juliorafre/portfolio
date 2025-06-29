'use client';

import React, { Component, type ErrorInfo, type ReactNode } from 'react';

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
          <div className="inset-shadow-md flex h-auto flex-col items-center justify-center gap-y-2 rounded-lg border border-red-400 border-dashed bg-red-100 p-5 text-red-900 shadow shadow-red-900/20">
            <h2>Oops, there is an error!</h2>
            <button
              className="cursor-pointer rounded-md bg-red-50 px-3 py-1 text-red-900 transition-opacity duration-200 hover:opacity-80"
              onClick={() =>
                this.setState({ hasError: false, error: undefined })
              }
              type="button"
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
