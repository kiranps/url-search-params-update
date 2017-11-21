# URL Search Params Update

> set, get and delete search params from url

## Install

```sh
npm install --save url-search-params-update
```

## Usage

```js
import params from 'url-search-params-update' 

console.log(location.search)
//=> '?foo=bar&x=y'

const foo = params.get("foo")
//=> 'bar'

params.set("foo", "sindresorhus")
//=> '?foo=sindresorhus&x=y'

params.delete("x")
//=> '?foo=sindresorhus'
```

## License

MIT © [Kiran P S]
