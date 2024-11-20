import React, { Component, ReactNode } from 'react';

import classes from './ErrorBoundary.module.scss';
import {
  Button,
  Card,
  CardFooter,
  CardHeader,
  Link,
  Size,
  Tags,
  Text,
  Variant,
} from '@components/ui';
import { Urls } from '@services/Route';

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

  static getDerivedStateFromError(_: Error): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('ErrorBoundary caught an error', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className={classes.box}>
          <Card variant={Variant.Secondary} className={classes.card}>
            <CardHeader>
              <Text tag={Tags.Heading} size={Size.XL}>
                {'!@#$#%, что-то пошло не так!'}
              </Text>
            </CardHeader>

            <CardFooter className={classes.card_footer}>
              <Link to={Urls.Home} className={classes.back_home_button}>
                <Button wide>{'На главную страницу'}</Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      );
    }

    return this.props.children;
  }
}
