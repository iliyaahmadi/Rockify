import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import './App.scss';
//pages
import Home from './pages/home';
import Discover from './pages/discover';
import Login from './pages/Login';
//layout
import RootLayout from './layout/RootLayout';

const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
  },
  {
    element: <RootLayout />,
    path: '/',
    children: [
      { index: true, element: <Home /> },
      { path: '/discover', element: <Discover /> },
      { path: '/favorites', element: <Home /> },
      { path: '/playlists', element: <Discover /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
