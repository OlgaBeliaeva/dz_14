import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setUserInfo } from './redux/actions';
import './UserForm.css';  // Подключаем стили

// Компонент формы для редактирования информации о пользователе
const UserForm = ({ setUserInfo }) => {
    const [name, setName] = useState('');
    const [status, setStatus] = useState('');

    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Простая валидация на пустые поля
        if (name.trim() === '' || status.trim() === '') {
            setError('Both name and status are required.');
            return;
        }

        // Очистка ошибки, если валидация прошла
        setError('');
        
        // Отправка данных через действие setUserInfo
        setUserInfo(name, status);
           // Очистка полей формы после отправки
        setName('');
        setStatus('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Edit User Information</h2>
              {/* Отображение ошибки валидации */}
              {error && <p style={{ color: 'red' }}>{error}</p>}

            <label>
                Name:
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </label>
            <br />
            <label>
                Status:
                <input
                    type="text"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                />
            </label>
            <br />
            <button type="submit">Save</button>
        </form>
    );
};

// Функция для передачи действия в компонент
const mapDispatchToProps = {
    setUserInfo
};

export default connect(null, mapDispatchToProps)(UserForm);