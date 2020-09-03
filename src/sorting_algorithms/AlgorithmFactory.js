import { SELECTION_SORT } from "../constants/Constants";
import { SelectionSort } from "../sorting_algorithms/SelectionSort"

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
            default:
        }

        return algorithm;
    }
}