```
$ node .
#=> { data: 'a', neighbor: { data: 'b', neighbor: {} } }
```

```
$ browserify index.js -o bundle.js
$ node bundle.js
#=> { data: 'a', neighbor: { data: 'b', neighbor: {} } }
```