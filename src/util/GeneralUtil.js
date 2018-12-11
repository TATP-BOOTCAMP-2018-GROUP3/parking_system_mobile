export const sortInProgressOrder = ((a, b) => {
    if (a.status < b.status)
        return 1;
    else if (a.status > b.status)
        return -1;
    else {
        return (a.id < b.id)
    }
})