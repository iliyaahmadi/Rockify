import '../styles/pages/_playlists.scss';
import Navbar from '../components/navbar';
import PlaylistBox from '../components/playlistBox';

function playlists() {
  return (
    <div className="playlists">
      <Navbar title="لیست های پخش" />
      <div className="playlists__wrapper">
        <PlaylistBox />
      </div>
    </div>
  );
}

export default playlists;
