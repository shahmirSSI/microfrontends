import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

// Define mount function to start up app
const mount = el => {
	ReactDOM.render(<App />, el);
};

// When we are in development and in isolation, call mount function immediately

if (process.env.NODE_ENV === 'development') {
	const devRoot = document.querySelector('#_marketing-dev-root');
	if (devRoot) {
		mount(devRoot);
	}
}

// Running application through container and we should export the mount function
export { mount };
