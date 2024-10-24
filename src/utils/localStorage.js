export const getItemFromStorage = (key, defaultValue) => {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : defaultValue;
};

export const setItemToStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
};

export const removeItemFromStorage = (key) => {
    localStorage.removeItem(key);
};
