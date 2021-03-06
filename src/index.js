import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import {applyMiddleware, createStore  } from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import RootReducer from './store/reducers/RootReducer';
import {getFirebase , ReactReduxFirebaseProvider} from 'react-redux-firebase';
import {createFirestoreInstance} from 'redux-firestore';
import firebase from './config/firebaseConfig';


const store = createStore(RootReducer , applyMiddleware(thunk.withExtraArgument({getFirebase})));

const rrfProps = {
  firebase,
  config : {},
  dispatch : store.dispatch,
  createFirestoreInstance
}

ReactDOM.render(
    <React.StrictMode>
      <Provider store={store} >
        <ReactReduxFirebaseProvider {...rrfProps} >
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
