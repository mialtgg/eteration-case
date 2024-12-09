// src/redux/store.js
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import productSaga from './sagas/productSaga';

// Saga middleware'ını oluşturuyoruz
const sagaMiddleware = createSagaMiddleware();

// Redux store'u oluşturuyoruz
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

// Saga'yı başlatıyoruz
sagaMiddleware.run(productSaga);

export default store;
