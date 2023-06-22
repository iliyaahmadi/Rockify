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
//layout
import RootLayout from './layout/RootLayout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="discover" element={<Discover />} />
      <Route path="favorites" element={<Home />} />
      <Route path="playlists" element={<Discover />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
