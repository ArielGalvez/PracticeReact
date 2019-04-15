import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//Este provider es nesesario para cargar un store para nuestra applicacion
import { Provider } from 'react-redux';

//importamos el store factory para nuestra applicacion
import createAppStore from './store/store.config';

//creamos un nuevo estore
const store = createAppStore();
ReactDOM.render(
	//pasamos como propiedad el store creado
	<Provider store={store}>
		<App />
	</Provider>,
  document.getElementById('root')
);


///
/* import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister(); */
