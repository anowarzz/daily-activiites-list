const addToLocal = (mins) => {
    localStorage.setItem('minutes', JSON.stringify(mins));
}

const showLocalStorageData = () => {
    const mins = localStorage.getItem('minutes');
    return JSON.parse(mins);
}

export { addToLocal, showLocalStorageData };