# Random words

Package for generating random word(s) in multiple languages.

[![Testing](https://github.com/MilosPaunovic/random-words/actions/workflows/testing.yml/badge.svg)](https://github.com/MilosPaunovic/random-words/actions/workflows/testing.yml)

## Installation

```bash
npm i @paunovic/random-words
```

## Configuring

```js
import { initialize } from '@paunovic/random-words'

// Default language pack
const RANDOM = initialize({ countryCode: 'rs' })

// With variation
const RANDOM = initialize({ countryCode: 'rs', variation: 'cyrillic' })
```

Currently available country codes and variations:

| Country        | Country code  | Variation   |
| -------------  | ------------- |-------------
| Serbia         | `rs`          | `cyrillic`  |
| United States  | `en`          |             |

## Methods

```js
// Returns random word from the dictionary
RANDOM.word()

// Returns array of words from the dictionary, defaults to 10, could be overridden
RANDOM.words(howMany = 10)
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://raw.githubusercontent.com/MilosPaunovic/random-words/develop/LICENSE) © [Milos Paunovic](https://github.com/MilosPaunovic)
