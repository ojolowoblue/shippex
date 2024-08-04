import { Outlet } from 'react-router-dom';

export default function AppLayout() {
  return (
    <div className="p-12">
      <Outlet />
    </div>
  );
}
