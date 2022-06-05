# Random words

Package for generating random word(s) in multiple languages.

[![Testing](https://github.com/MilosPaunovic/random-words/actions/workflows/testing.yml/badge.svg)](https://github.com/MilosPaunovic/random-words/actions/workflows/testing.yml)

## Try it Online

[Link to Codepen playground](https://codepen.io/milospaunovic/pen/vYpwZYo?editors=1010)

## Installation

```bash
npm i @paunovic/random-words
```

## Configuring

```js
import { initialize } from '@paunovic/random-words'

// Initialization with default language pack
const RANDOM = initialize();

// Initialization with different language pack
const RANDOM = initialize({ countryCode: 'rs' })

// Initialization with different language pack, including variation
const RANDOM = initialize({ countryCode: 'rs', variation: 'cyrillic' })
```

Currently available country codes and variations:

| Country       | Country code | Variation  |
| :------------ | :----------: | :--------: |
| Serbia        | `rs`         | `cyrillic` |
| United States `*` | `us`         |            |
| Spain         | `es`         |            |

`*` Default language; if no `countryCode` parameter is passed to `initialize` method, english will be loaded as a default language.

## Methods

```js
// Returns random word from the dictionary
RANDOM.word()

// Returns array of words from the dictionary, defaults to 10, could be overridden
RANDOM.words(howMany = 10)
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change. Please try to follow [semantic commit messages](https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716) principle to simplify navigation through git history.

## License

[MIT](https://raw.githubusercontent.com/MilosPaunovic/random-words/develop/LICENSE) © [Milos Paunovic](https://github.com/MilosPaunovic)
