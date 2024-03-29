'use strict';

function removeDuplicates(arr) {
    return [... new Set(arr)];
}

function mergeArrays(arr1, arr2) {
    return [...arr1, ...arr2];
}

module.exports = {removeDuplicates, mergeArrays};
