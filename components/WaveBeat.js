import React, {useState, useRef, useEffect }  from 'react'
import styles from "../styles/WaveBeat.module.css";
import { BsArrowLeftShort } from "react-icons/bs"
import { BsArrowRightShort } from "react-icons/bs"
import { FaPlay } from "react-icons/fa"
import { FaPause } from "react-icons/fa"

const WaveBeat = () => {
   //state
  const [isPlaying, setIsPlaying] = useState(false); 
  const [duration, set[Duration] = useState(0);
  const [currentTime, setCurrentTime] = useState();
  
  // references
  const WaveBeat = useRef();    //reference of our audio component
  const progressBar = useRef(); //reference our progress bar
  progressBar.current.max = seconds;
  
  useEffect( () => { 
    const seconds = Math.floor{WaveBeat.current.duration};
    setDuration(seconds);
    progressBar.current.max = seconds;
}, [WaveBeat?.current?.loadedmetadata, WaveBeat?,current?.readyState]);
  
  const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = minutes < 10 ? '0${minutes}';
    const seconds = secs %60);
    const returnedSeconds = seconds < 10 ? '0${seconds}' : '${seconds}';
    return '${returnedMinutes} : ${returnedSeconds}';
 }

const togglePlayPause = () => {
  const preValue = isPlaying;
  setIsPlaying(!isPlaying);
  if (!preValue) {
	  WaveBeat.current.play();
	  animationRef.current =  requestAnimationFramewhilePlaying);
	} else {
		WaveBeat.current.pause();
		cancelAnimationFrame(animationRef.current);
	}
}

   const changeRange = () {
     audioPlayer.current.currentTime = progressBar.current.value;
     progressBar.current.style.setProperty('--seek-before-width', '${progressBar.current.value / duration' 100}%');
     setCurrentTime(progressBar.current.value);
}


	return (
	  <div className={styles.wavebeat}>
	    <audio ref={WaveBeat} src="{id: 1, title: "Nitangoja", artist: "Kinoti", src: "https://open.spotify.com/track/21eRcBcsRtuHjL2jSeMu7A?si=50250cfc3d464322"},
        {id: 2, title: "Aki Sioni", artist: "Njerae", src: "https://open.spotify.com/track/0U9jyVnEkmWryh7sJpMS5e?si=6df779a3e3b14aae"},
        {id: 3, title: "Little Things", artist: "Manana", src: "https://open.spotify.com/track/3YbWbLKexX7qyDjWxs4s9h?si=be89a9649f4d4932"},
        {id: 4, title: "Kanyoni", artist: "Barbara Wangui", src: "https://open.spotify.com/track/6UZcrzuokSStY50hAG20dX?si=dfa9114cdc574c6c"},
        {id: 5, title: "Muse", artist: "Matt Ngesa", src: "https://open.spotify.com/track/7mlh81rZvoDlHCXBiowqrg?si=cd0c86dc723147ed"},
        {id: 6, title: "Khartoum", artist: "Caleb Awiti", src: "https://open.spotify.com/track/1Kuz7MiQz9rUPVt5ggCMJ7?si=c9e7c85bd6ca489f"},
        {id: 7, title: "Doorstep", artist: "Bensoul,ZZero Sufuri", src: "https://open.spotify.com/track/7txJ2IKOqg8KpawDlVmnKz?si=59f0e0224ac648d7"}"
	    <button className={styles.fowardBackward}BsArrowLeftShort /> 30</button>
	    <button onClick={togglePlayPause} className={styles.playPause>
		{isPlaying ? <FaPause /> : <FaPlay className={styles.payPause>
	    <button>
	    <button className={styles.fowardBackward>30 <BsArrowRightShort /></button>

	    {/* current time */}
	    <div className={styles.currentTime}>{calculateTime(currentTime)}</div>;

	    {/* progress bar */}
	    <div>
	      <input type="range" className={styles.progressBar} defaultValue="0" ref={progressBar} ChangeRange />
	    </div>

	    {/* duration */}
	    <div className={styles.duration}>{(duration && !isNaN(duration)} && calculateTime</div>
         </div>
	}
}

export { WaveBeat }
