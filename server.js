const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const port = 4000;


//enable CORS for all routes
app.use(cors());

//serve static files from the 'public' directory
app.use('/static', express.static(path.join(__dirname, 'public')));

//sample song data (in a real app)
const songs = [
	{id: 1, title: "Nitangoja", artist: "Kinoti", src: "https://open.spotify.com/track/21eRcBcsRtuHjL2jSeMu7A?si=50250cfc3d464322"},
	{id: 2, title: "Aki Sioni", artist: "Njerae", src: "https://open.spotify.com/track/0U9jyVnEkmWryh7sJpMS5e?si=6df779a3e3b14aae"},
	{id: 3, title: "Little Things", artist: "Manana", src: "https://open.spotify.com/track/3YbWbLKexX7qyDjWxs4s9h?si=be89a9649f4d4932"},
	{id: 4, title: "Kanyoni", artist: "Barbara Wangui", src: "https://open.spotify.com/track/6UZcrzuokSStY50hAG20dX?si=dfa9114cdc574c6c"},
	{id: 5, title: "Muse", artist: "Matt Ngesa", src: "https://open.spotify.com/track/7mlh81rZvoDlHCXBiowqrg?si=cd0c86dc723147ed"},
	{id: 6, title: "Khartoum", artist: "Caleb Awiti", src: "https://open.spotify.com/track/1Kuz7MiQz9rUPVt5ggCMJ7?si=c9e7c85bd6ca489f"},
	{id: 7, title: "Doorstep", artist: "Bensoul,ZZero Sufuri", src: "https://open.spotify.com/track/7txJ2IKOqg8KpawDlVmnKz?si=59f0e0224ac648d7"},
];

//API endpoint to get the list of songs
app.get('/api/songs', (req, res) => {
	res.json(songs);
});

//API endpoint to get a specific song by ID
app.get('/api/songs/id:', (req, res) => {
	const song = songs.find(s => s.id === parseInt(req.params.id));
	if (!song) {
		return res.status(404).json({ message: "song NOT found" });
	}
	res.json(song);
});

//Error handling middleware
app.use((err, req, res, next) => {
	console.error(err.stack);
	res.status(500).json({ message: "oops!Something went wrong!" });
});

//Start the server
app.listen(port, () => {
	console.log('Server running on port ${4000} ');
});

