/**
 * This represents an implementation of the Selection Sort algorithm.
 * @param {data} arr - The array of integers  that needs to be sorted.
 * @param {orderByAscending} orderByAscending  - A boolean value to state if the data will be sorted in ascending order or not
 */
export function BubbleSort() {

    const swap = (data, indexA, indexB) => {
        let temp = data[indexA];
        data[indexA] = data[indexB];
        data[indexB] = temp;
    }
    
    let indexSwapArr= [];
    let timeOutArray = [];

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

                var timer = setTimeout(() => {
                    barOne.backgroundColor = "red";
                    barTwo.backgroundColor = "red";
                }, speed * i);
                timeOutArray.push(timer);
            } else if(indexSwapArr[i][0] === "ColorChange") {
                let [action, indexA, indexB] = indexSwapArr[i];

                const barOne = arr[indexA].style;
                const barTwo = arr[indexB].style;
                var timer = setTimeout(() => {
                    barOne.backgroundColor = "lightblue";
                    barTwo.backgroundColor = "lightblue";
                }, speed * i);
                timeOutArray.push(timer);
            } else if(indexSwapArr[i][0] === "FinalColor") {
                let [action, index] = indexSwapArr[i];

                const bar = arr[index].style;
                var timer = setTimeout(() => {
                    bar.backgroundColor = "lightgreen";
                }, speed * i);
                timeOutArray.push(timer);
            } else {
                let [indexA, indexB] = indexSwapArr[i];

                const barOne = arr[indexA].style;
                const barTwo = arr[indexB].style;
                var timer = setTimeout(() => {
                    let temp = barOne.height;
                    barOne.height = barTwo.height;
                    barTwo.height = temp;

                    barOne.backgroundColor = "lightblue";
                    barTwo.backgroundColor = "lightblue";
                }, speed * i);
                timeOutArray.push(timer);
            }
        }
    }

    this.stopAnimation = function() {
        for(let i = 0; i < timeOutArray.length; i++) {
            clearTimeout(timeOutArray[i]);
        }

        let arr = document.getElementsByClassName('bars');

        for(let i = 0; i < arr.length; i++) {
            arr[i].style.backgroundColor = "lightblue";
        }
    }

    this.sort = function (arr, orderByAscending, speed) {
        if(orderByAscending === "INCREASING") {
            sortAscending(arr);
        } else {
            sortDescending(arr);
        }

        this.animate(speed);
    }


    function sortAscending(arr) {
        for(let i = 0; i < arr.length; i++) {
            for(let j = 0; j < arr.length - i - 1; j++) {
                indexSwapArr.push(["Animate", j, j + 1]);
                if(arr[j] > arr[j + 1]) {
                    indexSwapArr.push([j, j + 1]);
                    swap(arr, j, j + 1);
                } else {
                    indexSwapArr.push(["ColorChange", j, j + 1])
                }
            }
            indexSwapArr.push(["FinalColor", arr.length - i - 1]);
        }
    }

    function sortDescending(arr) {
        for(let i = 0; i < arr.length; i++) {
            for(let j = 0; j < arr.length - i - 1; j++) {
                indexSwapArr.push(["Animate", j, j + 1]);
                if(arr[j] < arr[j + 1]) {
                    indexSwapArr.push([j, j + 1]);
                    swap(arr, j, j + 1);
                } else {
                    indexSwapArr.push(["ColorChange", j, j + 1])
                }
            }
            indexSwapArr.push(["FinalColor", arr.length - i - 1]);
        }
    }
}