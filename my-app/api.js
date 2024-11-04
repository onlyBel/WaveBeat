const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

export const fetchSongs = async () => {
	try {
		const response = await fetch(`${API_URL}/songs`);
		const data = await response.json();
		return data;
	} catch (error) {
		console.error('Error fetching songs:', error);
		return [];
	}
};
