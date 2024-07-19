


export const formatDate = (date: Date | string | null) => {
    if (!date) return 'null';
    const newDateFormat = new Date(date)
    const day = String(newDateFormat.getDate()).padStart(2, '0');
    const month = String(newDateFormat.getMonth() + 1).padStart(2, '0');
    const year = newDateFormat.getFullYear();
    const hour = String(newDateFormat.getHours()).padStart(2, '0')
    const min = String(newDateFormat.getMinutes()).padStart(2, '0')
    return `${day}-${month}-${year} ${hour}:${min}`;
};


