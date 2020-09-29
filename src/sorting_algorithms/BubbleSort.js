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
            } else if(indexSwapArr[i][0] === "ColorChange") {
                let [action, indexA, indexB] = indexSwapArr[i];

                const barOne = arr[indexA].style;
                const barTwo = arr[indexB].style;
                setTimeout(() => {
                    barOne.backgroundColor = "lightblue";
                    barTwo.backgroundColor = "lightblue";
                }, speed * i);
            } else {
                let [indexA, indexB] = indexSwapArr[i];

                const barOne = arr[indexA].style;
                const barTwo = arr[indexB].style;
                setTimeout(() => {
                    let temp = barOne.height;
                    barOne.height = barTwo.height;
                    barTwo.height = temp;

                    barOne.backgroundColor = "lightblue";
                    barTwo.backgroundColor = "lightblue";
                }, speed * i);
            }
        }
    }

    this.sort = function (arr, orderByAscending, speed) {
        if(orderByAscending) {
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
        }
    }

    function sortDescending(arr) {
        for(let i = 0; i < arr.length; i++) {
            for(let j = 0; j < arr.length - 1; j++) {
                if(arr[j] < arr[j + 1]) {
                    indexSwapArr.push(["Animate", j, j + 1]);
                    indexSwapArr.push([j, j + 1]);
                    swap(arr, j, j + 1);
                }
            }
        }
    }
}