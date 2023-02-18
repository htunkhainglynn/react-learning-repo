let arr = [1, 2, 3, 4, 5];
let start = 0;
let end = arr.length - 1;

let binarySearch = (search, arr, start, end) => {
    const mid = Math.floor((start + end) / 2);
    return search > arr[mid] ? binarySearch(search, arr, mid + 1, end) : 
           search < arr[mid] ? binarySearch(search, arr, start, mid - 1) :
           search === arr[mid] ? true : false;
}

console.log(binarySearch(1, arr, start, end));
