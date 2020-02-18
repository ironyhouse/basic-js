module.exports = class DepthCalculator {
    calculateDepth(arr) {
        arr = arr.filter( x => Array.isArray(x));

        let maxDepth = 0;
        for (let i = 0 ; i < arr.length; i++) {
            maxDepth = Math.max(maxDepth, this.calculateDepth(arr[i]));
        }

        return  maxDepth + 1;
    }
};