/**
 * This represents an implementation of the Selection Sort algorithm.
 * @param {data} arr - The array of integers  that needs to be sorted.
 * @param {orderByAscending} orderByAscending  - A boolean value to state if the data will be sorted in ascending order or not
 */
export function SelectionSort() {

    const swap = (data, indexA, indexB) => {
        let temp = data[indexA];
        data[indexA] = data[indexB];
        data[indexB] = temp;
    }
    
    let indexSwapArr= [];

    this.sort = function (arr, orderByAscending) {
        for(let i = 0; i < arr.length; i++) {
            let minIndex = i;
            for(let j = i; j < arr.length; j++) {
                if(arr[minIndex] > arr[j]) {
                    minIndex = j;
                }
            }
            swap(arr, minIndex, i);
            indexSwapArr.push([minIndex, i]);
        }
    
        return indexSwapArr;
    }
}