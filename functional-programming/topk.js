var topKFrequent = function(nums, k) {
    // group by fequent
    let group = nums.reduce((gp, element) => {
        return gp[element] ? ((gp[element]++), gp) : ((gp[element] = 1), gp)
    }, {});

    // change to array and sort
    const array = Object.entries(group);
    array.sort((a, b) => b[1] - a[1]);

    // get the k index array
    const result = array.reduce((ans, item, index) => {
        return index < k ? ((ans.push(item[0])), ans) : ans
    }, []);  // read MDN docs for explaination

    console.log(result);

    // change to int and return the result
    const unary = (fn) => fn.length === 1 ? fn : (arg) => fn(arg);
    return result.map(unary(parseInt));
    
};

let r = topKFrequent([1,2,3,1,1,1,2], 2);
console.log(r);
