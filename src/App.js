import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Home from './components/Home/Home';
import Details from './components/Details/Details';

function App() {
	return (
		<Router>
			<ScrollToTop />
			<Switch>
				<Route exact path='/' component={Home} />
				{/* <Route exact path='/about' component={About} /> */}
				<Route path='/:book' component={Details} />
			</Switch>
		</Router>
	);
}

export default App;
