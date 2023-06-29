import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.scss';
//pages
import Home from './pages/home';
import Discover from './pages/discover';
import Favorites from './pages/favorites';
import Playlists from './pages/playlists';
import Login from './pages/login';
import Signup from './pages/signup';
//layout
import RootLayout from './layout/RootLayout';

const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
  {
    element: <RootLayout />,
    path: '/',
    children: [
      { index: true, element: <Home /> },
      { path: '/discover', element: <Discover /> },
      { path: '/favorites', element: <Favorites /> },
      { path: '/playlists', element: <Playlists /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
