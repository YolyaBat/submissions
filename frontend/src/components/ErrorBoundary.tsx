import React, { ErrorInfo } from 'react';
import { ErrorBoundaryProps } from '../types/interfaces';

export default class ErrorBoundary extends React.Component<
	{},
	ErrorBoundaryProps
> {
	constructor(props: React.FunctionComponent) {
		super(props);
		this.state = { hasError: false, error: '' };
	}

	static getDerivedStateFromError(error: string) {
		return { hasError: true, error: error.toString() };
	}

	componentDidCatch(error: Error, info: ErrorInfo) {
		console.warn(error, info);
	}

	render() {
		if (this.state.hasError) {
			return (
				<div id="myModal" className="modal">
					<div className="modal-content">
						<span className="close">&times;</span>
						<h2>App Crashed</h2>
						<p>Something has gone terribly wrong.</p>
						{this.state.error}
					</div>
				</div>
			);
		}
		return this.props.children;
	}
}
