# flatObject
Simplifies a nested JSON (Flatterns an object)


## Usage
* By function call

```javascript

var flat = require('flat_object');
flat({
	a: {
		"a": "A",
		"b": "B"
	},
	b: [
		"somestring",
		key: {
			"a": "A",
			"b": "B"
		}
	]
});

```

* By creating a new class instance

```javascript

var Flat = require('flat_object').makeFlat;

var flat = new Flat(\*Object*\)
```

