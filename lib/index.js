/*
 * @paunovic/random-words@1.1.0
 * (c) Milos Paunovic
 * Released under the MIT License.
 */

import { LANGUAGES } from './helpers/languages.js';
import { randomNumber } from './helpers/general.js';

/**
	* Initialize the package by selecting language and variation to use.
	*
	* @param {string} countryCode - 2 digit ISO Country code
	* @param {string} [variation="default"] - Variation to language, e.g. "cyrillic"
	* @return {object} Available functions to be consumed
	*
	*/

export const initialize = ({ countryCode = 'us', variation = 'default' }) => {
	const WORDS = LANGUAGES[countryCode][variation];

	/**
		* Function which returns random word from the dictionary.
		*
		* @return {string} Random word from the dictionary
		*
		*/

	const word = () => WORDS[randomNumber(WORDS.length)];

	/**
		* Function which returns an array of random words from the dictionary.
		*
		* @param {number} [howMany=10] - Number of words to be generated
		* @return {string[]} Array of words from the dictionary
		*
		*/

	const words = (howMany = 10) => {
		if (!parseInt(howMany, 10)) throw new Error('Parameter howMany must be convertible to number.');

		// Limiting result set to 10000 at a time for performance reasons
		if (parseInt(howMany, 10) > 10000) howMany = 10000;

		const result = [];

		for (let i = 0; i < howMany; i += 1) {
			result.push(word());
		}

		return result;
	};

	return { word, words };
};
