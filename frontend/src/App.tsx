import React, { useEffect } from 'react';
import SubmitUserForm from './components/Form';
import UsersTable from './components/UsersTable';
import ErrorBoundary from './components/ErrorBoundary';
import { useDispatch } from 'react-redux';
import { requestAllUsers } from './store/actionCreators';
import { Container } from '@material-ui/core';
import './App.css';

const App: React.FC = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(requestAllUsers());
	}, [dispatch]);
	return (
		<div className="App">
			<ErrorBoundary>
				<Container maxWidth="lg">
					<UsersTable />
					<SubmitUserForm />
				</Container>
			</ErrorBoundary>
		</div>
	);
};

export default App;
