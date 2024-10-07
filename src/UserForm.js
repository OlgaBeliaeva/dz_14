import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setUserInfo } from './redux/actions';

// Компонент формы для редактирования информации о пользователе
const UserForm = ({ setUserInfo }) => {
    const [name, setName] = useState('');
    const [status, setStatus] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setUserInfo(name, status);
        setName('');
        setStatus('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Edit User Information</h2>
            <label>
                Name:
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </label>
            <label>
                Status:
                <input
                    type="text"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                />
            </label>
            <button type="submit">Save</button>
        </form>
    );
};

// Функция для передачи действия в компонент
const mapDispatchToProps = {
    setUserInfo
};

// Экспортируем компонент с подключением к Redux
export default connect(null, mapDispatchToProps)(UserForm);