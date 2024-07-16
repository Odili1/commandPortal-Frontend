


export const formatDate = (date: Date | null) => {
    if (!date) return 'null';
    date = new Date(date)
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    const hour = String(date.getHours()).padStart(2, '0')
    const min = String(date.getMinutes()).padStart(2, '0')
    return `${day}-${month}-${year} ${hour}:${min}`;
};


