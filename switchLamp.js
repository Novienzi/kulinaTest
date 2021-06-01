function findOnLamps(numberOfLamps) {
    // initializing the result
    let onLamps = 0;

    // to loop over all Lamps from 1 to numberOfLamps
    let bulb = 1;

    // to loop over times to check whether number
    let times = 1;


    // is a factor of light bulb number or not
    for (bulb = 1; bulb <= numberOfLamps; bulb++) {

        // inner loop to find factors of given bulb
        // to count the number of factors of a given bulb
        let factors = 0;

        for (times = 1; times * times <= numberOfLamps; times++) {

            if (bulb % times == 0) // times is a factor
            {
                factors++;

                // bulb != times*times
                if (bulb / times != times) {
                    factors++;
                }
            }
        }

        // if number of factors is odd, then the
        if (factors % 2 == 1) {
            onLamps++;
        }
    }


    return onLamps;
}

// Driver program to test above function
// total number of light Lamps
let numberOfLamps = 100;

// to find number of on Lamps in
// the end after all persons have
// flipped the light Lamps




console.log(findOnLamps(numberOfLamps))


