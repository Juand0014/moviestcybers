import axion from 'axios';

export const api = axion.create({
	baseURL: 'https://api.themoviedb.org/3/movie/top_rated?api_key=bf091621962bdf5c30339e874a2a0c1a&language=en-US&page=1',
	headers: {
		'Content-Type': 'application/json',
	},
});