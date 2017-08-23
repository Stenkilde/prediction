import { h, Component } from 'preact';
import { create, auth } from '../../services/user';

export default class Login extends Component {

	state = {
		name: '',
		email: '',
		password: '',
		authE: '',
		authP: ''
	}

	handleChange(e, type) {
		if (type === 'name') {
			this.setState({
				name: e.target.value
			})
		}
		if (type === 'email') {
			this.setState({
				email: e.target.value
			})
		}
		if (type === 'password') {
			this.setState({
				password: e.target.value
			})
		}
		if (type === 'authE') {
			this.setState({
				authE: e.target.value
			})
		}
		if (type === 'authP') {
			this.setState({
				authP: e.target.value
			})
		}
	}

	handleSubmit(e) {
		e.preventDefault();

		let user = this.state;

		create(user).then((response) => {
			console.log(response);
		})
	}

	handleAuth(e) {
		e.preventDefault();

		let user = {
			email: this.state.authE,
			password: this.state.authP
		}

		auth(user).then((response) => {
			console.log(response);
		})
	}

	render() {
		return (
			<div>
				<h1>This will be login view</h1>
				<form onSubmit={(e) => this.handleSubmit(e)}>
					<label>
						<input onChange={(e) => this.handleChange(e, 'name')} type="text" placeholder="name" />
					</label>
					<label>
						<input onChange={(e) => this.handleChange(e, 'email')} type="text" placeholder="email" />
					</label>
					<label>
						<input onChange={(e) => this.handleChange(e, 'password')} type="password" placeholder="password" />
					</label>
					<button type="submit">Submit</button>
				</form>

				<form onSubmit={(e) => this.handleAuth(e)}>
					<label>
						<input onChange={(e) => this.handleChange(e, 'authE')} type="text" placeholder="email" />
					</label>
					<label>
						<input onChange={(e) => this.handleChange(e, 'authP')} type="password" placeholder="password" />
					</label>
					<button type="submit">Submit</button>
				</form>
			</div>
		);
	}
}
