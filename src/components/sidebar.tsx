import '../styles/components/_sidebar.scss';

function App() {
  return (
    <div className="sidebar">
      <ul className="sidebar__list">
        <li className="sidebar__list--active">
          <img src="src\assets\icons\HomeActive.svg" alt="Home" />
          <p>خانه</p>
        </li>
        <li>
          <img src="src\assets\icons\Discover.svg" alt="Home" /> <p>جستجو</p>
        </li>
        <li>
          <img src="src\assets\icons\Book.svg" alt="Home" />{' '}
          <p>علاقه مندی ها</p>
        </li>
        <li>
          <img src="src\assets\icons\Playlist.svg" alt="Home" /> <p>لیست پخش</p>
        </li>
      </ul>
    </div>
  );
}

export default App;
