import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';
import { HashRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement,
);
root.render(
	<React.StrictMode>
		<Auth0Provider
			domain="dev-7xnae7lc84xt0nid.us.auth0.com"
			clientId="YjDuYIzInCfUS20Uc5KpwfSyzcTXHYHb"
			authorizationParams={{
				redirect_uri: window.location.origin,
			}}>
			<HashRouter>
				<App />
			</HashRouter>
		</Auth0Provider>
	</React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();