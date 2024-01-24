import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

export default function AppLayout() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-gray-50">
      <Navbar />
      <div className='flex-1 pt-16'>
      <Outlet />
      </div>
      <Footer />
    </div>
  );
}
