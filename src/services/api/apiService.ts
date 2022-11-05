import axios from 'axios'

class Api {
	init() {
		this.setBaseUrl()
	}
	setBaseUrl() {
		axios.create({ baseURL: 'https://pokeapi.co/api/v2/' })
	}

	doGet = async (url: string) => {
		try {
			const response = await axios.get(url)

			if (response.status === 200) {
				return response.data
			}

			return 'ERRO'
		} catch (error: any) {
			return error.response
		}
	}

	doPost = async (url: string, data: object) => {
		try {
			const response = await axios.post(url, data)

			if (response.status === 200) {
				return response.data
			}

			return 'erro'
		} catch (error: any) {
			return { data: error.response.data, status: error.response.status }
		}
	}

	doPut = async (url: string, data: object) => {
		try {
			const response = await axios.put(url, data)

			if (response.status === 200) {
				return response.data
			}

			return 'erro'
		} catch (error: any) {
			return { data: error.response.data, status: error.response.status }
		}
	}

	doFile = async (url: string, data: object) => {
		try {
			const response = await axios.post(url, data, {
				headers: {
					'Content-Type': 'multipart/form-data'
				}
			})

			if (response.data.success === true) {
				return response.data
			}

			return 'erro'
		} catch (error: any) {
			return { data: error.response.data, status: error.response.status }
		}
	}

	doDelete = async (url: string) => {
		try {
			const response = await axios.delete(url)

			if (response.status === 200) {
				return response.data
			}

			return 'erro'
		} catch (error: any) {
			return error.response
		}
	}
}

const instance = new Api()

export default instance
