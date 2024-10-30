import React from 'react';
import './styles.scss'

const App = () => {
  const [musicLibrary, setMusicLibrary] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/music')
      .then(response => response.json())
      .then(data => setMusicLibrary(data));
  }, []);


return (
    <div>
      <h1>WaveBeat, SCSS!</h1>
      <ul>
        {musicLibrary.map(song => (
	  <li key={song.id}>
	    <audio controls>
	      <source src={song.url} type="audio/mpeg' />
	       Your browser does not support the audio element.
	    </audio>
	    <p>{song.title}</p>
	    </li>
	))}
      </ul>
      <div>
	<h1>Hello, SCSS!</h1>
    </div>
   </div>
  );
};

export default App;
