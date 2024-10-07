import { createStore } from 'redux';
import userReducer from './reducers';

// Создание Redux store
const store = createStore(userReducer);

export default store;