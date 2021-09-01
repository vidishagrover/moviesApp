import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import { createStore} from "redux";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';
import reducer from './store/reducer';

const persistConfig = { //copied from documentation
  key: 'root',
  storage,
}
const persistedReducer = persistReducer(persistConfig, reducer); //copied from documentation aur reducer apna pass krdia
// const store = createStore(reducer);agar hum aise apna store banaye to changes persist nahi krenge
const store = createStore(persistedReducer);
const persistor = persistStore(store);
//provider hamara redux app ko wrap kra hai usme humne
ReactDOM.render(
  <Provider store={store}> 
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

