import { AxiosResponse } from 'axios';
import { api } from '../Middleware';

const findAll = async(endpoint: string = ''): Promise<AxiosResponse<any, any>> => {
		const response = await api.get(endpoint);
		return response.data;
}

const services = {
	findAll
}

export default services;