import { Outlet, useNavigate } from 'react-router-dom';

import Logo from '@/assets/logo.svg';

export default function AuthLayout() {
  const navigate = useNavigate();

  return (
    <div className="p-12">
      <header>
        <div role="button" onClick={() => navigate('/')}>
          <img src={Logo} alt="Shippex" width={184} />
        </div>
      </header>

      <div className="flex items-center justify-center min-h-[90vh]">
        <Outlet />
      </div>
    </div>
  );
}
