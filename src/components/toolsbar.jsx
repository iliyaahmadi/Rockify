import '../styles/components/_toolsbar.scss';
import { useState } from 'react';
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
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeMuteIcon from '@mui/icons-material/VolumeMute';
import Slider from '@mui/material/Slider';

function toolsbar() {
  const [songValue, setSongValue] = useState(30);
  const [volumeValue, setVolumeValue] = useState(4);
  const [onRepeat, setOnRepeat] = useState(false);
  const [onShuffle, setOnShuffle] = useState(false);
  const [onMute, setOnMute] = useState(false);
  const [onPause, setOnPause] = useState(false);

  const handleSongSliderChange = (event, newValue) => {
    setSongValue(newValue);
  };
  const handleMute = () => {
    if (onMute) {
      setOnMute(false);
      setVolumeValue(5);
    } else {
      setOnMute(true);
      setVolumeValue(0);
    }
  };
  const handleVolumeSliderChange = (event, newValue) => {
    setVolumeValue(newValue);
    if (newValue > 0) {
      setOnMute(false);
    } else {
      setOnMute(true);
    }
  };
  const handleRepeat = () => {
    onRepeat ? setOnRepeat(false) : setOnRepeat(true);
  };
  const handleShuffle = () => {
    onShuffle ? setOnShuffle(false) : setOnShuffle(true);
  };
  const handlePause = () => {
    onPause ? setOnPause(false) : setOnPause(true);
  };
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
          <RepeatIcon
            className="repeatIcon icon"
            onClick={handleRepeat}
            sx={{
              color: onRepeat ? '#9775fa ' : 'gray',
              '&:hover': {
                color: onRepeat ? '#b197fc' : 'white',
              },
            }}
          />
          <SkipNextIcon className="skipnextIcon" />
          {onPause ? (
            <PauseIcon className="pauseIcon" onClick={handlePause} />
          ) : (
            <PlayArrowIcon className="pauseIcon" onClick={handlePause} />
          )}
          <SkipPreviousIcon className="skippreviousIcon" />
          <ShuffleIcon
            className="icon shuffleIcon"
            onClick={handleShuffle}
            sx={{
              color: onShuffle ? '#9775fa' : 'gray',
              '&:hover': {
                color: onShuffle ? '#b197fc' : 'white',
              },
            }}
          />
        </div>
        <div className="tool-middle__slider">
          <div className="current-time">00:00</div>
          <Slider
            aria-label="Volume"
            value={songValue}
            onChange={handleSongSliderChange}
            min={0}
            max={100}
            sx={{
              color: '#fff',
              '& .MuiSlider-thumb': {
                '&:hover, &.Mui-focusVisible': {
                  boxShadow: '0 0 0 0',
                },
              },
            }}
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
          {onMute ? (
            <VolumeMuteIcon onClick={handleMute} />
          ) : (
            <VolumeUpIcon onClick={handleMute} />
          )}
          <Slider
            className="volume-slider"
            color="secondary"
            aria-label="Volume"
            min={0}
            max={10}
            size="small"
            value={volumeValue}
            onChange={handleVolumeSliderChange}
            sx={{
              color: '#fff',
              '& .MuiSlider-thumb': {
                '&:hover, &.Mui-focusVisible': {
                  boxShadow: '0 0 0 0',
                },
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default toolsbar;
