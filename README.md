# URL Search Params Update

> set, get and delete search params from url

## Install

```sh
npm install --save url-search-params-update
```

## Usage

```
import params from 'url-search-params-update' 

console.log(location.search)
//=> '?foo=bar&x=y'

const foo = params.get("foo")
//=> 'bar'

const foo = params.set("foo", "sindresorhus")
//=> '?foo=sindresorhus&x=y'

const foo = params.delete("x")
//=> '?foo=sindresorhus'
```
