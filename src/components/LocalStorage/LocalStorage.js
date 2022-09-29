const addToLocal = (mins) => {
    localStorage.setItem('breakMinutes', JSON.stringify(mins));
}

const showLocalStorageData = () => {
    const mins = localStorage.getItem('breakMinutes');
    return JSON.parse(mins);
}

export { addToLocal, showLocalStorageData };