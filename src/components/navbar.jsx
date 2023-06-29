import { Link } from 'react-router-dom';
import '../styles/components/_navbar.scss';
import { useState } from 'react';

function navbar(props) {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div className="navbar">
      <p className="navbar__greeting">{props.title}</p>
      {isLogin ? (
        <img
          className="navbar__notification"
          src="src\assets\icons\bell.svg"
          alt="notifications"
        />
      ) : null}
      {isLogin ? (
        <img
          className="navbar__profile"
          src="src\assets\img\profile.jpg"
          alt="profile picture"
        />
      ) : (
        <Link to="/login">
          <div className="navbar__button">ورود</div>
        </Link>
      )}
    </div>
  );
}

export default navbar;
