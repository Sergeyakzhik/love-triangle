/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(a) {
  // your implementation
    var number = 0;

    for(var i = 0; i < a.length; i++){
        if(a[a[a[i] - 1] - 1] == i + 1 && a[i] != a[a[i]-1]){
            number++;
        }
    }
    return number / 3;
};
