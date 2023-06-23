import { NavLink } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
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
            <HomeIcon
              color="white"
              sx={{
                '.active &': {
                  color: '$violet-500',
                },
              }}
            />
            <p>خانه</p>
          </li>
        </NavLink>
        <NavLink to="/discover" className={activeStyle}>
          <li>
            <SearchIcon
              color="white"
              sx={{
                '.active &': {
                  color: '$violet-500',
                },
              }}
            />
            <p>جستجو</p>
          </li>
        </NavLink>
        <NavLink to="/favorites" className={activeStyle}>
          <li>
            <FavoriteIcon
              color="white"
              sx={{
                '.active &': {
                  color: '$violet-500',
                },
              }}
            />
            <p>علاقه مندی ها</p>
          </li>
        </NavLink>
        <NavLink to="/playlists" className={activeStyle}>
          <li>
            <LibraryBooksIcon
              color="white"
              sx={{
                '.active &': {
                  color: '$violet-500',
                },
              }}
            />
            <p>لیست پخش</p>
          </li>
        </NavLink>
      </ul>
    </div>
  );
}

export default sidebar;
