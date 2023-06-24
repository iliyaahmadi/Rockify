import '../styles/components/_toolsbar.scss';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'; //empty
import FavoriteIcon from '@mui/icons-material/Favorite'; //filled
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import RepeatIcon from '@mui/icons-material/Repeat';
import PauseIcon from '@mui/icons-material/Pause';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import VolumeUpIcon from '@mui/icons-material/VolumeUp'; //70%
import VolumeDownIcon from '@mui/icons-material/VolumeDown'; //30%
import VolumeMuteIcon from '@mui/icons-material/VolumeMute'; //0%

function toolsbar() {
  return (
    <div className="toolbar-container">
      <div className="toolbar-container__right tool-right">
        <img src="src/assets/img/blindinglights.jpg" alt="music-cover" />
        <div className="tool-right__title">
          <b>blinding lights</b>
          <p>the weeknd</p>
        </div>
      </div>
      <div className="toolbar-container__middle tool-middle">
        <div className="tool-middle__tools">
          <RepeatIcon className="repeatIcon icon" />
          <SkipNextIcon className="skipnextIcon" />
          <PauseIcon className="pauseIcon" />
          <SkipPreviousIcon className="skippreviousIcon" />
          <ShuffleIcon className="icon shuffleIcon" />
        </div>
        <div className="tool-middle__slider">
          <div className="current-time">00:00</div>
          <progress
            className="slider"
            type="range"
            min="1"
            max="100"
            value="20"
            onChange=""
          />
          <div className="total-time">00:00</div>
        </div>
      </div>
      <div className="toolbar-container__left tool-left">
        <div className="tool-left__other">
          <MoreHorizIcon />
          <FavoriteBorderIcon />
          <LibraryAddIcon />
        </div>
        <div className="tool-left__volume">
          <VolumeUpIcon />
          <progress
            className="volume__slider"
            type="range"
            min="1"
            max="100"
            value="20"
            onChange=""
          ></progress>
        </div>
      </div>
    </div>
  );
}

export default toolsbar;
