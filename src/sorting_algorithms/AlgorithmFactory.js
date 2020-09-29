import { SELECTION_SORT, BUBBLE_SORT } from "../constants/Constants";
import { SelectionSort } from "../sorting_algorithms/SelectionSort"
import { BubbleSort } from "../sorting_algorithms/BubbleSort"

/**
 * This represents an Algorithm Factory that is used to create the algorithm
 * based on the choice made by the user.
 */
export function AlgorithmFactory () {
    this.createAlgorithm = function (algorithmType) {
        let algorithm;

        switch(algorithmType) {
            case SELECTION_SORT:
                algorithm = new SelectionSort();
                break;
            case BUBBLE_SORT:
                algorithm = new BubbleSort();
                break;
            default:
        }

        return algorithm;
    }
}