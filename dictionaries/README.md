# Dictionaries

## File types

Every dictionary entry should be simple JavaScript file which exports only one constant, named `WORDS`, which is an array of strings.

## Naming conventions

Every dictionary file should be placed in folder named in the format of 2 digit ISO Country code, and the file name itself should be an IETF primary language tag, with optional IETF language subtag from other standards such as ISO 639, ISO 15924, ISO 3166-1 and UN M.49, if necessary. Example would be `rs/sr-Cyrl` for Serbian written in Cyrillic script.

Find out more at [Country Code](https://countrycode.org/) and [Wikipedia](https://en.wikipedia.org/wiki/IETF_language_tag).

## Optional

Files should preferably be minified, to reduce footprint.