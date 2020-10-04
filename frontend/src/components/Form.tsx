import React from 'react';
import { addNewUser, requestAllUsers } from '../store/actionCreators';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Button, TextField } from '@material-ui/core';
import { Formik, Form, FormikProps, FormikState } from 'formik';
import * as Yup from 'yup';
import { FormValues } from '../types/interfaces';

const initialValues: FormValues = {
	name: '',
	email: '',
	age: '',
};

const AddUserSchema = Yup.object().shape({
	name: Yup.string().min(2, 'Too Short!').required('Required'),
	email: Yup.string().email().required('Required'),
	age: Yup.number()
		.positive('age must be greater than zero')
		.min(5, 'Too young')
		.max(150, 'Too old'),
});

const useStyles = makeStyles((theme) => ({
	root: {
		'& .MuiTextField-root': {
			marginRight: theme.spacing(2),
			width: '16ch',
		},
	},
	container: {
		display: 'flex',
		justifyContent: 'start',
		alignItems: 'baseline',
		marginTop: '100px',
	},
}));

const SubmitUserForm: React.FC = () => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const handleSubmit = (
		values: FormValues,
		resetForm: (nextState?: Partial<FormikState<FormValues>>) => void
	): void => {
		dispatch(addNewUser(values));
		resetForm({});
		dispatch(requestAllUsers());
	};
	return (
		<div>
			<Formik
				initialValues={initialValues}
				validationSchema={AddUserSchema}
				onSubmit={(values, { resetForm }) => handleSubmit(values, resetForm)}
			>
				{(props: FormikProps<FormValues>) => {
					const {
						values,
						touched,
						errors,
						handleBlur,
						handleChange,
						isSubmitting,
					} = props;
					return (
						<Form
							className={`${classes.root} ${classes.container}`}
							autoComplete="off"
						>
							<TextField
								id="name"
								name="name"
								onChange={handleChange}
								type="text"
								value={values.name}
								error={errors.name && touched.name ? true : false}
								helperText={
									errors.name && touched.name ? errors.name : 'Enter your name'
								}
								onBlur={handleBlur}
							/>
							<TextField
								id="email"
								name="email"
								type="email"
								onChange={handleChange}
								value={values.email}
								error={errors.email && touched.email ? true : false}
								helperText={
									errors.email && touched.email
										? errors.email
										: 'Enter a valid e-mail'
								}
								onBlur={handleBlur}
							/>
							<TextField
								id="age"
								name="age"
								type="number"
								onChange={handleChange}
								value={values.age}
								error={errors.age && touched.age ? true : false}
								helperText={
									errors.age && touched.age ? errors.age : 'Enter your age'
								}
								onBlur={handleBlur}
							/>

							<Button
								type="submit"
								variant="contained"
								color="primary"
								size="small"
								disabled={isSubmitting}
							>
								Submit
							</Button>
						</Form>
					);
				}}
			</Formik>
		</div>
	);
};

export default SubmitUserForm;
