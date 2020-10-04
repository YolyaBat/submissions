import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { State } from '../types/interfaces';

const StyledTableCell = withStyles((theme) => ({
	head: {
		backgroundColor: theme.palette.common.black,
		color: theme.palette.common.white,
	},
	body: {
		fontSize: 14,
	},
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
	root: {
		'&:nth-of-type(odd)': {
			backgroundColor: theme.palette.action.hover,
		},
	},
}))(TableRow);

const useStyles = makeStyles({
	table: {
		minWidth: 700,
	},
	noItemsNote: {
		marginTop: '20px',
	},
});

const CustomizedTables: React.FC = () => {
	const classes = useStyles();
	const users = useSelector((state: State) => state.users);

	if (users.length > 0) {
		return (
			<TableContainer component={Paper}>
				<Table className={classes.table} aria-label="customized table">
					<TableHead>
						<TableRow>
							<StyledTableCell>User name</StyledTableCell>
							<StyledTableCell align="left">Email</StyledTableCell>
							<StyledTableCell align="left">Age</StyledTableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{users.map((user) => (
							<StyledTableRow key={users.indexOf(user)}>
								<StyledTableCell component="th" scope="row">
									{user.name}
								</StyledTableCell>
								<StyledTableCell align="left">{user.email}</StyledTableCell>
								<StyledTableCell align="left">{user.age}</StyledTableCell>
							</StyledTableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		);
	} else {
		return <div className={classes.noItemsNote}>No users to show</div>;
	}
};

export default CustomizedTables;
