import React, {Component} from 'react';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll';
import {Robots} from '../Components/Robots';
import './App.css';


class App extends Component {
	constructor() {
		super()
		this.state = {
			Robots: [], 
			searchfield: ''
		}
	}

	componentDidMount() {
      fetch('https://jsonplaceholder.typicode.com/users')
	  .then(response=> response.json())

	   .then(users => this.setState({ Robots: users}));
	}


	onSearchChange = (event) => {
		this.setState({searchfield: event.target.value})
	
}
render() {
	    const { Robots, searchfield } = this.state;
		const filteredRobots = Robots.filter(robot =>{
			return robot.name.toLowerCase().includes(searchfield.toLowerCase());
	})
		if (Robots.length === 0) {
			return <h1>Loading</h1>
		} else { 
		
	return (
	<div className='tc'>
	<h1 className='f1'>RoboFriends</h1>
	<SearchBox searchChange={this.onSearchChange}/>
	<Scroll>
	<CardList Robots={filteredRobots} />
	</Scroll>
	</div>
	);
	}
}
}

export default App; 