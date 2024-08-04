import { PropsWithChildren, ReactNode } from 'react';
import Button from './Button';

import Shippex from '@/assets/icons/shippex.svg?react';
import ConnectionLost from '@/assets/illustrations/connection-lost.svg?react';

interface Props {
  loading?: boolean;
  title?: string;
  errorMessage?: string;
  illustration?: ReactNode;
  retryText?: string;
  onRetry?: () => void;
}

const isNetWorkError = (errorMessage?: string) => {
  if (!errorMessage) return;

  if (errorMessage.toLocaleLowerCase().includes('network error')) {
    return {
      title: 'Connection Lost',
      errorMessage: "Oops! It seems you're currently offline.",
      illustration: <ConnectionLost />,
    };
  }
};

export default function AppLoader(props: PropsWithChildren<Props>) {
  const { illustration, loading, errorMessage, title, retryText, onRetry, children } = props;

  const networkError = isNetWorkError(errorMessage);

  return errorMessage ? (
    <div className="min-h-[80vh] flex justify-center items-center">
      <div className="max-w-max flex flex-col justify-center items-center">
        <div className="mb-10">{networkError?.illustration ?? illustration}</div>

        <div>
          {title && <h1 className="text-2xl font-bold mb-2 text-center">{networkError?.title ?? title}</h1>}
          <p className="text-muted text-center">{networkError?.errorMessage ?? errorMessage}</p>
        </div>

        <Button variant="plain" fullWidth className="mt-6" onClick={onRetry}>
          {retryText ?? 'Retry'}
        </Button>
      </div>
    </div>
  ) : loading ? (
    <div className="min-h-[80vh] flex justify-center items-center">
      <Shippex className="animate-spin duration-1000" />
    </div>
  ) : (
    children
  );
}
