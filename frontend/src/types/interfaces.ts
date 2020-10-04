export interface State {
	users: {
		name?: string;
		email?: string;
		age?: string;
	}[];
}

export interface Action {
	type: string;
	payload: {
		[key: string]: any;
	};
}

export interface User {
	name: string;
	email: string;
	age?: string;
}

export interface AddUserPayload {
	type: string;
	payload: User;
}

export interface FormValues {
	name: string;
	email: string;
	age: string;
}

export interface ErrorBoundaryProps {
	hasError: boolean;
	error: string;
}
