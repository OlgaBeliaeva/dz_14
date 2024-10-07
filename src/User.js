import React from 'react';
import { connect } from 'react-redux';
import './User.css';  // Подключаем стили

// Компонент для отображения информации о пользователе
const User = ({ name, status }) => {
    return (
        <div>
            <h2>User Information</h2>
            <p>Name: {name}</p>
            <p>Status: {status}</p>
        </div>
    );
};

// Функция для сопоставления состояния Redux с пропсами компонента
const mapStateToProps = (state) => ({
    name: state.name,
    status: state.status
});

// Экспортируем компонент с подключением к Redux
export default connect(mapStateToProps)(User);