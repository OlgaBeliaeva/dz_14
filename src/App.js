import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import User from './User';
import UserForm from './UserForm';
import './App.css';  // Подключаем стили

const App = () => {
    return (
        <Provider store={store}>
            <div className="app-container">
                <h1>User Profile</h1>
                <User />
                <UserForm />
            </div>
        </Provider>
    );
};

export default App;
