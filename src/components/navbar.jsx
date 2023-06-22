import '../styles/components/_navbar.scss';

function navbar(props) {
  return (
    <div className="navbar">
      <p className="navbar__greeting">{props.title}</p>
      <img
        className="navbar__notification"
        src="src\assets\icons\bell.svg"
        alt="notifications"
      />
      <img
        className="navbar__profile"
        src="src\assets\img\profile.jpg"
        alt="profile picture"
      />
    </div>
  );
}

export default navbar;
