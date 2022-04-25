/**
 * Function which returns random number for range between 1 and supplied maximum.
 *
 * @param {number} maximum - Parameter which tells the upper limit of generated random number
 * @return {number} Random number between 1 and suplied maximum
 *
 */

export const randomNumber = (maximum) => {
	if (!maximum) throw new Error('Missing parameter maximum.');
	if (!parseInt(maximum, 10)) throw new Error('Parameter maximum must be convertible to number.');

	return Math.floor(Math.random() * parseInt(maximum, 10)) + 1;
};
