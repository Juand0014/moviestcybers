import axion from 'axios';
import { enviorament } from '../../Config';

export const api = axion.create({
	baseURL: enviorament.apiUrl,
	headers: {
		'Content-Type': 'application/json',
	},
});