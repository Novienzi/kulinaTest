function countingValleys(n, s) {

    // split the string
    let steps = s.split("");

    //create a variable for valleys traversed
    let valleyCount = 0;

    //Always starts hikes at sea level
    let currentSeaLevel = 0;

    // doesn't start any hikes already in a valley
    let valleyStatus = false;

    // forEach() step in the steps array
    //if the step is U(up), add one to the currentSeaLevel variable, and the opposite if D(down)

    steps.forEach(step => {
        step === 'U' ? currentSeaLevel++ : currentSeaLevel--;

        //if the currentSeaLevel is less than 0 (Bill is in a valley, since he started at sea level)
        //Bill’s valleyStatus is checked as true
        //else, if the sea level is 0 or above
        // if the valleyStatus is true  set the valleyStatus to false and continue

        if (currentSeaLevel < 0 && !valleyStatus) {
            valleyCount++;
            valleyStatus = true
        }
        else if (currentSeaLevel >= 0 && valleyStatus) {
            valleyStatus = false
        }
    })
    return valleyCount;
}

var input = "U,D,D,D,U,D,U,U"
console.log(countingValleys(8, input))