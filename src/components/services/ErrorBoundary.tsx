import React, { Component, ReactNode } from 'react';

import { SegaError } from '@features/Sega';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('ErrorBoundary caught an error', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <SegaError
          title="GAME OVER"
          subtitle="!@#$%, что-то пошло не так — перезапусти игру"
          code="SYSTEM ERROR"
          reload
        />
      );
    }

    return this.props.children;
  }
}
