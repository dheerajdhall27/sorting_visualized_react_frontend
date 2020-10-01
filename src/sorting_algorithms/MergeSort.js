/**
 * This represents an implementation of the Selection Sort algorithm.
 * @param {data} arr - The array of integers  that needs to be sorted.
 * @param {orderByAscending} orderByAscending  - A boolean value to state if the data will be sorted in ascending order or not
 */
export function MergeSort() {
    let animationArray = [];

    /**
     * This method is used to perform the animations and the swaps required for the algorithm
     */
    this.animate = function(speed) {
        let arr = document.getElementsByClassName('bars');

        for(let i = 0;i < animationArray.length; i++) {
            if(animationArray[i][0] === "Color") {
                let [action, index] = animationArray[i];

                const bar = arr[index].style;

                setTimeout(() => {
                    bar.backgroundColor = "red";
                }, speed * i)
            } else if(animationArray[i][0] === "Update") {
                let [action, index, height] = animationArray[i];
                
                const bar = arr[index].style;

                setTimeout(() => {
                    bar.height = (height * 3) + "px";

                    bar.backgroundColor = "lightgreen";
                }, speed * i);
            }
        }
    }

    this.sort = function (arr, orderByAscending, speed) {
        mergeSort(arr, 0, arr.length - 1);
        this.animate(speed);
    }


    function mergeSort(arr, l, r) {
        if(l < r) {
            let m = Math.floor((l + r) / 2);

            mergeSort(arr, l, m);
            mergeSort(arr, m + 1, r);

            merge(arr, l, m, r);
        }
    }

    function merge(arr, l, m, r) {
        let i, j, k;

        let n1 = m - l + 1;
        let n2 = r - m;

        let leftArray = [];
        let rightArray = [];

        let leftMap = new Map();
        let rightMap = new Map();

        for(i = 0; i < n1; i++) {
            leftArray.push(arr[l + i]);
            animationArray.push(["Color", l + i]);
            leftMap[i] = l + i;
        }

        for(j = 0;j < n2; j++) {
            rightArray.push(arr[m + 1 + j]);
            animationArray.push(["Color", m + 1 + j]);
            rightMap[j] = m + 1 + j;
        }
        
        i = 0;
        j = 0;
        k = l;

        while (i < n1 && j < n2) { 
            if (leftArray[i] <= rightArray[j]) { 
                arr[k] = leftArray[i]; 
                animationArray.push(["Update", k, leftArray[i]]);
                i++; 
            } 
            else { 
                arr[k] = rightArray[j];
                animationArray.push(["Update", k, rightArray[j]]);
                j++; 
            } 
            k++; 
        } 
      
        /* Copy the remaining elements of L[], if there 
           are any */
        while (i < n1) { 
            arr[k] = leftArray[i]; 
            animationArray.push(["Update", k, leftArray[i]]);
            i++; 
            k++; 
        } 
      
        /* Copy the remaining elements of R[], if there 
           are any */
        while (j < n2) { 
            arr[k] = rightArray[j]; 
            animationArray.push(["Update", k, rightArray[j]]);
            j++; 
            k++; 
        } 
    }
    
}