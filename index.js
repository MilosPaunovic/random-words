import { initialize } from './lib/index.js';

const RANDOM = initialize({ countryCode: 'es' });

console.log(RANDOM.word());
console.log(RANDOM.words());
