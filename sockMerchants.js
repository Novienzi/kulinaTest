function sortAndCount(n, arr) {

    // sort the array
    let sorted = arr.sort((a, b) => a - b);
    console.log(sorted);

    // counter
    let pairs = 0;

    // looping to find socks pair
    for (let i = 0; i < n - 1; i++) {
        // compare each item of the array with its direct sibling to find pair
        if (sorted[i] === sorted[i + 1]) {
            console.log(sorted[i], sorted[i + 1]);
            // increment the pair's value if we find a match. 
            // increment i by one to skip the next item since we have already checked it
            pairs++;
            i += 1;
        }
    }

    return pairs;
}

const input = [10, 20, 20, 10, 10, 30, 50, 10, 20]

console.log(sortAndCount(9, input));