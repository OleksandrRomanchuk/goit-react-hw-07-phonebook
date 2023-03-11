import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { Suspense } from 'react';
import { store } from 'redux/store';
import App from 'App/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter basename="/goit-react-hw-07-phonebook">
				<Suspense>
					<App />
				</Suspense>
			</BrowserRouter>
		</Provider>
	</React.StrictMode>
);
