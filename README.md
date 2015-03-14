```
$ node sync/index.js
#=> { data: 'a', neighbor: { data: 'b', neighbor: {} } }
```

```
$ node -e "`browserify sync/index.js`"
#=> { data: 'a', neighbor: { data: 'b', neighbor: {} } }
```

----------------------------------

```
$ node late/index.js
#=> { data: 'b', neighbor: [Function] }
#=> { data: 'a', neighbor: [Function] }
```

```
$ node -e "`browserify late/index.js`"
#=> { data: 'b', neighbor: [Function] }
#=> { data: 'a', neighbor: [Function] }
```

----------------------------------

```
$ node early/index.js
#=> { data: 'b', neighbor: { data: 'a', neighbor: [Circular] } }
#=> { data: 'a', neighbor: { data: 'b', neighbor: [Circular] } }
```

```
$ node -e "`browserify early/index.js`"
#=> { data: 'b', neighbor: { data: 'a', neighbor: [Circular] } }
#=> { data: 'a', neighbor: { data: 'b', neighbor: [Circular] } }
```