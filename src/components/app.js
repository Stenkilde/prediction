import { h, Component } from 'preact';
import {
  	BrowserRouter as Router,
  	Route
} from 'react-router-dom'
import { me } from '../services/user';

import Header from './header';
import Home from './home';
import Login from './login/login';
import Profile from './profile';

export default class App extends Component {

	componentDidMount() {
		let token = localStorage.getItem('token');
		me(token).then((response) => {
			console.log(response);
		})
	}

	render() {
		return (
			<div id="app">
				<Header />
				<Router>
					<div>
						<Route exact path="/" component={Login} />
						<Route path="/list" component={Home} />
					</div>
				</Router>
			</div>
		);
	}
}
