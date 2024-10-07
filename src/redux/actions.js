export const SET_USER_INFO = 'SET_USER_INFO';

// Action creator для обновления информации о пользователе
export const setUserInfo = (name, status) => {
    return {
        type: SET_USER_INFO,
        payload: { name, status }
    };
};