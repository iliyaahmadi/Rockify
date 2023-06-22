import { NavLink } from 'react-router-dom';
import '../styles/components/_sidebar.scss';

function sidebar() {
  //IsActive type ?????
  const activeStyle = ({ isActive }) => {
    return isActive ? 'sidebar__list--active' : '';
  };

  return (
    <div className="sidebar">
      <div className="sidebar__logo">
        <img src="src\assets\img\sidelogow.png" alt="logo" />
      </div>
      <ul className="sidebar__list">
        <NavLink to="/" className={activeStyle}>
          <li>
            <img src="src\assets\icons\HomeActive.svg" alt="Home" />
            <p>خانه</p>
          </li>
        </NavLink>
        <NavLink to="/discover" className={activeStyle}>
          <li>
            <img src="src\assets\icons\Discover.svg" alt="discover" />{' '}
            <p>جستجو</p>
          </li>
        </NavLink>
        <NavLink to="/favorites" className={activeStyle}>
          <li>
            <img src="src\assets\icons\Book.svg" alt="favorites" />{' '}
            <p>علاقه مندی ها</p>
          </li>
        </NavLink>
        <NavLink to="/playlists" className={activeStyle}>
          <li>
            <img src="src\assets\icons\Playlist.svg" alt="playlists" />{' '}
            <p>لیست پخش</p>
          </li>
        </NavLink>
      </ul>
    </div>
  );
}

export default sidebar;
