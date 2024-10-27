import { User } from '@/types/user';
import axios, { AxiosInstance } from 'axios';

class GithubApi {
	private axiosInstance: AxiosInstance;

	constructor() {
		this.axiosInstance = axios.create({
			baseURL: 'https://api.github.com',
			headers: {
				Accept: 'application/vnd.github.v3+json',
			},
		});
	}

	async getUsers(query: string): Promise<User[]> {
		const response = await this.axiosInstance.get(`/search/users?${query}`);
		return response.data.items;
	}
}

export default GithubApi;
