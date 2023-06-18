import '../styles/components/_navbar.scss';

function navbar() {
  return (
    <div className="navbar">
      <p className='navbar__greeting'>ظهرت بخیر, ایلیا !</p>
      <img className='navbar__notification' src="src\assets\icons\bell.svg" alt="notifications" />
      <img className='navbar__profile'src="src\assets\icons\Rockify.svg" alt="profile picture" />
    </div>
  );
}

export default navbar;
