function arraysSort(arr) {
    return [...arr.sort((a, b) =>  +a[a.length - 1] - b[b.length - 1]) ]
};

window.arraysSort = arraysSort;

export default arraysSort;
