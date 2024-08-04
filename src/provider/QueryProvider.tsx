import { PropsWithChildren } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      retry: 2,
    },
  },
});

export default function QueryProvider(props: PropsWithChildren) {
  return <QueryClientProvider client={queryClient}>{props.children}</QueryClientProvider>;
}
