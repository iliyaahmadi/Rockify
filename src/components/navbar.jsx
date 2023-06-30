import { Link } from 'react-router-dom';
import '../styles/components/_navbar.scss';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';

function navbar(props) {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <div className="navbar">
      <p className="navbar__greeting">{props.title}</p>
      {props.search ? (
        <div className="navbar__search">
          <SearchIcon className="search-icon" />
          <input type="text" placeholder=" چی میخوای گوش کنی؟" />
        </div>
      ) : null}
      <div className="navbar__left left">
        {isLogin ? (
          <img
            className="left__notification"
            src="src\assets\icons\bell.svg"
            alt="notifications"
          />
        ) : null}
        {isLogin ? (
          <img
            className="left__profile"
            src="src\assets\img\profile.jpg"
            alt="profile picture"
          />
        ) : (
          <Link to="/login">
            <div className="left__button">ورود</div>
          </Link>
        )}
      </div>
    </div>
  );
}

export default navbar;
