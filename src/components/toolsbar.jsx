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
  const [repeat, setRepeat] = useState(false);
  const [shuffle, setShuffle] = useState(false);
  const [mute, setMute] = useState(false);
  const [pause, setPause] = useState(false);

  const handleSongSliderChange = (event, newValue) => {
    setSongValue(newValue);
  };
  const handleMute = () => {
    if (mute) {
      setMute(false);
      setVolumeValue(5);
    } else {
      setMute(true);
      setVolumeValue(0);
    }
  };
  const handleVolumeSliderChange = (event, newValue) => {
    setVolumeValue(newValue);
    if (newValue > 0) {
      setMute(false);
    } else {
      setMute(true);
    }
  };
  const handleRepeat = () => {
    repeat ? setRepeat(false) : setRepeat(true);
  };
  const handleShuffle = () => {
    shuffle ? setShuffle(false) : setShuffle(true);
  };
  const handlePause = () => {
    pause ? setPause(false) : setPause(true);
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
              color: repeat ? '#9775fa ' : 'gray',
              '&:hover': {
                color: repeat ? '#b197fc' : 'white',
              },
            }}
          />
          <SkipNextIcon className="skipnextIcon" />
          {pause ? (
            <PauseIcon className="pauseIcon" onClick={handlePause} />
          ) : (
            <PlayArrowIcon className="pauseIcon" onClick={handlePause} />
          )}
          <SkipPreviousIcon className="skippreviousIcon" />
          <ShuffleIcon
            className="icon shuffleIcon"
            onClick={handleShuffle}
            sx={{
              color: shuffle ? '#9775fa' : 'gray',
              '&:hover': {
                color: shuffle ? '#b197fc' : 'white',
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
          {mute ? (
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
