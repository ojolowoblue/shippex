import { RouterProvider } from 'react-router-dom';
import { Suspense } from 'react';

import router from './router';
import AppLoader from './components/ui/AppLoader';
import QueryProvider from './provider/QueryProvider';

function App() {
  return (
    <QueryProvider>
      <Suspense fallback={<AppLoader loading />}>
        <RouterProvider router={router} />
      </Suspense>
    </QueryProvider>
  );
}

export default App;
