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

    /**
     * This method is used to perform the animations and the swaps required for the algorithm
     */
    this.animate = function(speed) {
        let arr = document.getElementsByClassName('bars');
        
        for(let i = 0;i < indexSwapArr.length; i++) {
            if(indexSwapArr[i][0] === "Animate") {
                let [action, indexA, indexB] = indexSwapArr[i];

                const barOne = arr[indexA].style;
                const barTwo = arr[indexB].style;

                setTimeout(() => {
                    barOne.backgroundColor = "red";
                    barTwo.backgroundColor = "red";
                }, speed * i);
            } else if(indexSwapArr[i][0] === "Looking") {
                let [action, index] = indexSwapArr[i];

                const bar = arr[index].style;

                setTimeout(() => {
                    bar.backgroundColor = "black"
                }, speed * i);
            } else if(indexSwapArr[i][0] === "ColorBack") {
                let [action, index] = indexSwapArr[i];

                const bar = arr[index].style;

                setTimeout(() => {
                    bar.backgroundColor = "lightblue"
                }, speed * i);
            } else if(indexSwapArr[i][0] === "ColorMinIndex") {
                let [action, index] = indexSwapArr[i];

                const bar = arr[index].style;
                setTimeout(() => {
                    bar.backgroundColor = "yellow"
                }, speed * i);
            } else {
                let [indexA, indexB] = indexSwapArr[i];

                const barOne = arr[indexA].style;
                const barTwo = arr[indexB].style;
                setTimeout(() => {
                    let temp = barOne.height;
                    barOne.height = barTwo.height;
                    barTwo.height = temp;

                    // The position of the bars could be similar
                    // In that case we set them to the same color
                    if(barOne.height === barTwo.height) {
                        barTwo.backgroundColor = "lightgreen";
                        barOne.backgroundColor = "lightgreen";
                    } else {
                        barTwo.backgroundColor = "lightgreen";
                        barOne.backgroundColor = "lightblue";
                    }
                }, speed * i);
            }
        }
    }

    this.sort = function (arr, orderByType, speed) {
        if(orderByType === "INCREASING") {
            sortAscending(arr);
        } else {
            sortDescending(arr);
        }

        this.animate(speed);
    }


    function sortAscending(arr) {
        for(let i = 0; i < arr.length; i++) {
            let minIndex = i;
            for(let j = i; j < arr.length; j++) {
                indexSwapArr.push(["Looking", j]);
                indexSwapArr.push(["ColorBack", j]);
                if(arr[minIndex] > arr[j]) {
                    indexSwapArr.push(["ColorBack", minIndex]);
                    minIndex = j;
                    indexSwapArr.push(["ColorMinIndex", minIndex]);
                }
            }
            indexSwapArr.push(["Animate", minIndex, i]);
            indexSwapArr.push([minIndex, i]);
            swap(arr, minIndex, i);
        }
    }

    function sortDescending(arr) {
        for(let i = 0; i < arr.length; i++) {
            let maxIndex = i;
            for(let j = i; j < arr.length; j++) {
                indexSwapArr.push(["Looking", j]);
                indexSwapArr.push(["ColorBack", j]);
                if(arr[maxIndex] < arr[j]) {
                    indexSwapArr.push(["ColorBack", maxIndex]);
                    maxIndex = j;
                    indexSwapArr.push(["ColorMinIndex", maxIndex]);
                }
            }
            indexSwapArr.push(["Animate", maxIndex, i]);
            indexSwapArr.push([maxIndex, i]);
            swap(arr, maxIndex, i);
        }
    }
}