// import { useState, useEffect } from 'react';

import { MDBContainer } from "mdbreact";
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

// Custome Components
import Home from './Home';
import Navbar from './Navbar';
import Authentication from './Authentication';
import Profile from './Profile';
import Error from './Error';

const Base = () => {
	return (
		<div>
			<BrowserRouter>
				<Navbar />
				<MDBContainer>
					<div className="main">
						<Switch>
							<Route exact path="/" component={Home} />
							<Route path="/profile" component={Profile} />
							<Route path="/authentication" component={Authentication} />
							<Route path="*" component={Error} />
						</Switch>
					</div>
				</MDBContainer>
			</BrowserRouter>
		</div>
	)
}

export default Base
