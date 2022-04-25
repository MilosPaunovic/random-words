import { WORDS as sr } from '../../dictionaries/countries/rs/sr.js';
import { WORDS as srCyrl } from '../../dictionaries/countries/rs/sr-Cyrl.js';
import { WORDS as en } from '../../dictionaries/countries/us/en.js';

export const LANGUAGES = Object.freeze({
	rs: {
		default: sr,
		cyrillic: srCyrl,
	},
	us: {
		default: en,
	},
});
