import { h, Component } from 'preact';
import { get } from '../../services/groups';
import style from './style.less';

export default class Home extends Component {

	state = {
		groups: []
	}

	componentDidMount() {
		get(2).then((response) => {
			this.setState({
				groups: response
			 });
		})
	}

	render() {
		return (
			<div class={style.home}>
				{(() => {
                    return (
                        this.state.groups.map((group, index) => {
                            return (
                                <li className="item" key={index}>
                                    {group.group_id}
                                </li>
                            );
                        })
                    );
                })()}
			</div>
		);
	}
}
