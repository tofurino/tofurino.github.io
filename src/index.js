import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import Header from './components/Header.js';
import Home from './pages/Home.js';
import MultiMC from './pages/MultiMC.js';
import FTB from './pages/FTB.js';
import CurseForge from './pages/CurseForge.js';
import BetterMC from './pages/BetterMC';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  	<React.StrictMode>
    	<BrowserRouter basename={`/${process.env.PUBLIC_URL}`}>
			<Header />

      		<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route path="/MultiMC">
					<MultiMC />
				</Route>
				<Route path="/FTB">
					<FTB />
				</Route>
				<Route path="/CurseForge">
					<CurseForge />
				</Route>
				<Route path="/1.17">
					<BetterMC />
				</Route>
			</Switch>
    	</BrowserRouter>
  	</React.StrictMode>,
  	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
