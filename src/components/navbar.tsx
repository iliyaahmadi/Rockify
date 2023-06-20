import '../styles/components/_navbar.scss';

function navbar(props: { title: String }) {
  const title = props.title;

  return (
    <div className="navbar">
      <p className="navbar__greeting">{title}</p>
      <img
        className="navbar__notification"
        src="src\assets\icons\bell.svg"
        alt="notifications"
      />
      <img
        className="navbar__profile"
        src="src\assets\icons\Rockify.svg"
        alt="profile picture"
      />
    </div>
  );
}

export default navbar;
