import '../styles/pages/_playlists.scss';
import Navbar from '../components/navbar';
import PlaylistBox from '../components/playlistBox';

function playlists() {
  return (
    <div className="playlists">
      <Navbar title="لیست های پخش" />
      <div className="playlists__wrapper">
        <div className="fav">
          <PlaylistBox />
        </div>
        <PlaylistBox />
        <PlaylistBox />
        <PlaylistBox />
        <PlaylistBox />
        <PlaylistBox />
      </div>
    </div>
  );
}

export default playlists;
