import { WORDS as sr } from '../../dictionaries/countries/rs/sr.js';
import { WORDS as srCyrl } from '../../dictionaries/countries/rs/sr-Cyrl.js';
import { WORDS as en } from '../../dictionaries/countries/us/en.js';
import { WORDS as es } from '../../dictionaries/countries/es/es.js';

export const LANGUAGES = Object.freeze({
	rs: {
		default: sr,
		cyrillic: srCyrl,
	},
	us: {
		default: en,
	},
	es: {
		default: es,
	},
});
