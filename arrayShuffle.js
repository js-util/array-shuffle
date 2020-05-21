/**
 * Given an array, shuffle its content randomly.
 * Note that the original array is not affected
 * 
 * This does the : Fisher–Yates shuffle underneath the hood
 * https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle#The_modern_algorithm
 * 
 * This does not aim for true perfect randomness. Just to be good enough and fast
 * 
 * @param {Array<*>} array 
 * 
 * @return {Array<*>} shuffled array
 */
function arrayShuffle(array) {
	// Clone the array
	array = array.slice(0);

	// Shuffle it
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));

		//
		// Note that the below code is equivalent to
		//
		// ```
		// var temp = array[i];
		// array[i] = array[j];
		// array[j] = temp;
		// ```
		//
		[array[i], array[j]] = [array[j], array[i]];
	}

	// Return the shuffled array
	return array;
}

// Export the function
module.exports = arrayShuffle;