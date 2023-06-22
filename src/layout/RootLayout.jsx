import { Outlet } from 'react-router-dom';
import Sidebar from '../components/sidebar';
import '../styles/layout/_rootlayout.scss';

export default function RootLayout() {
  return (
    <>
      <Sidebar />
      <>
        <Outlet />
      </>
    </>
  );
}
