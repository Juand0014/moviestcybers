import { AxiosResponse } from 'axios';
import { enviorament } from '../Config';
import { api } from '../Middleware';

const params = {
	api_key: enviorament.apiKey,
	page: 1,
	language: 'en-US'
}

const findAll = async(): Promise<AxiosResponse<any, any>> => {
	return await api.get('/top_rated', { params });
}

const findOne = async(id: number): Promise<AxiosResponse<any, any>> => {
	return await api.get(`/${id}`, { params });
}

const services = {
	findAll,
	findOne
}

export default services;