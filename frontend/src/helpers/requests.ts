import { User } from '../types/interfaces';
const getUsersUrl: string = 'http://localhost:3000/users';
const headers = {
	Accept: 'application/json',
	'Content-Type': 'application/json',
};
export const loadUsers = async (): Promise<User[]> => {
	const users = await (await fetch(getUsersUrl, { headers })).json();
	return users;
};

export const addNewUser = async (payload: User): Promise<User[]> => {
	const users = await (
		await fetch(getUsersUrl, {
			method: 'POST',
			headers,
			body: JSON.stringify(payload),
		})
	).json();
	return users;
};
