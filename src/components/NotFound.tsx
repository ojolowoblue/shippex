import { useNavigate } from 'react-router-dom';

import NotFound404 from '@/assets/illustrations/404.svg?react';
import AppLoader from './ui/AppLoader';
import Input from './ui/Input';
import Button from './ui/Button';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <>
      <header className="bg-[#F8FAFC] h-[110px] rounded-lg flex items-center justify-center">
        <form action="/tracker" className="flex items-center gap-4">
          <Input disabled className="bg-white min-w-[500px]" />
          <Button disabled className="w-[120px]">
            Track
          </Button>
        </form>
      </header>

      <AppLoader
        title="404"
        errorMessage="Oops! The page you're looking for can't be found."
        illustration={<NotFound404 />}
        retryText="Go to home page"
        onRetry={() => navigate('/')}
      />
    </>
  );
}
