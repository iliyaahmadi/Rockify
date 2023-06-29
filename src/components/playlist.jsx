import '../styles/components/_playlist.scss';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'; //empty
import FavoriteIcon from '@mui/icons-material/Favorite'; //filled
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
function playlist() {
  return (
    <div className="playlist">
      <div className="playlist__header header">
        <img src="src/assets/img/paradiselana.jpg" alt="playlist-img" />
        <div className="header__title title">
          <p className="title__type">لیست پخش</p>
          <h1 className="title__name">بهترین ها</h1>
          <p className="title__desc">اهنگ های لایک شده</p>
          <div className="title__info">
            <p>
              <img src="src/assets/img/profile.jpg" alt="" />
              iliyx
            </p>
            <p>5 ترانه</p>
          </div>
        </div>
      </div>
      <div className="playlist__tools">
        <div className="play-icon">
          <PlayArrowIcon fontSize="large" />
        </div>
        <FavoriteBorderIcon className="like-icon" fontSize="large" />
        <MoreHorizIcon className="more-icon" fontSize="large" />
      </div>
      <div className="playlist__table">
        <table>
          <tr>
            <th>#</th>
            <th>عنوان</th>
            <th>آلبوم</th>
            <th>تاریخ اضافه</th>
            <th>
              <AccessTimeIcon />
            </th>
          </tr>
          <tr className="music-row">
            <td>1</td>
            <td>
              <div className="music-td">
                <img src="src/assets/img/paradiselana.jpg" alt="song-cover" />
                <div className="song-title">
                  <p className="song-title__name">paradise</p>
                  <p className="song-title__artist">lanadelray</p>
                </div>
              </div>
            </td>
            <td>Germany</td>
            <td>17/3/1402</td>
            <td>3:15</td>
          </tr>
          <tr className="music-row">
            <td>2</td>
            <td>
              <div className="music-td">
                <img src="src/assets/img/blindinglights.jpg" alt="song-cover" />
                <div className="song-title">
                  <p className="song-title__name">blinding lights</p>
                  <p className="song-title__artist">the weeknd</p>
                </div>
              </div>
            </td>
            <td>IDonTKNow</td>
            <td>22/5/1399</td>
            <td>3:49</td>
          </tr>
          <tr className="music-row">
            <td>3</td>
            <td>
              <div className="music-td">
                <img src="src/assets/img/nirvana.jpg" alt="song-cover" />
                <div className="song-title">
                  <p className="song-title__name">smell like teen spirit</p>
                  <p className="song-title__artist">nirvana</p>
                </div>
              </div>
            </td>
            <td>nevermind</td>
            <td>12/3/1401</td>
            <td>4:02</td>
          </tr>
          <tr className="music-row">
            <td>4</td>
            <td>
              <div className="music-td">
                <img src="src/assets/img/paradiselana.jpg" alt="song-cover" />
                <div className="song-title">
                  <p className="song-title__name">paradise</p>
                  <p className="song-title__artist">lanadelray</p>
                </div>
              </div>
            </td>
            <td>Germany</td>
            <td>17/3/1402</td>
            <td>3:15</td>
          </tr>
          <tr className="music-row">
            <td>5</td>
            <td>
              <div className="music-td">
                <img src="src/assets/img/blindinglights.jpg" alt="song-cover" />
                <div className="song-title">
                  <p className="song-title__name">blinding lights</p>
                  <p className="song-title__artist">the weeknd</p>
                </div>
              </div>
            </td>
            <td>IDonTKNow</td>
            <td>22/5/1399</td>
            <td>3:49</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default playlist;
