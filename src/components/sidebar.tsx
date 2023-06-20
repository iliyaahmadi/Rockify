import { Link } from 'react-router-dom';
import '../styles/components/_sidebar.scss';

function App() {
  return (
    <div className="sidebar">
      <div className="sidebar__logo">
        <img src="src\assets\img\sidelogow.png" alt="logo" />
      </div>
      <ul className="sidebar__list">
        <Link to="/">
          <li className="sidebar__list--active">
            <img src="src\assets\icons\HomeActive.svg" alt="Home" />
            <p>خانه</p>
          </li>
        </Link>
        <Link to="/discover">
          <li>
            <img src="src\assets\icons\Discover.svg" alt="discover" />{' '}
            <p>جستجو</p>
          </li>
        </Link>
        <Link to="/favorites">
          <li>
            <img src="src\assets\icons\Book.svg" alt="favorites" />{' '}
            <p>علاقه مندی ها</p>
          </li>
        </Link>
        <Link to="/playlists">
          <li>
            <img src="src\assets\icons\Playlist.svg" alt="playlists" />{' '}
            <p>لیست پخش</p>
          </li>
        </Link>
      </ul>
    </div>
  );
}

export default App;
