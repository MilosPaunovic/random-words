import { assert } from 'chai';
import { initialize } from '../lib/index.js';

const RANDOM = initialize({ countryCode: 'rs' })

describe('Testing basic functionalities of the entire library', () => {

	it('word()  - Should return a random word', () => {
		const result = RANDOM.word();
		assert.isString(result) && assert.isNotEmpty(result);
	});

	it('words() - Should return array of 10 random words (no parameter passed)', () => {
		const result = RANDOM.words();
		assert.isArray(result) && assert.lengthOf(result, 10);
	});

	it('words() - Should return array of 34 random words (with parameter passed)', () => {
		const result = RANDOM.words(34);
		assert.isArray(result) && assert.lengthOf(result, 34);
	});

	it('words() - Should throw an error (invalid parameter passed)', () => {
		assert.throw(() => { RANDOM.words("invalid"); }, Error, 'Parameter howMany must be convertible to number.');
	});

});
