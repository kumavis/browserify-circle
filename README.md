### Sync

Doesn't work.
`node sync/index.js`
```
{ data: 'a', neighbor: { data: 'b', neighbor: {} } }
{ data: 'b', neighbor: {} }
{}
```

### Late

Just-in-time requires. Does work.
`node late/index.js`
```
{ data: 'a', neighbor: [Function] }
{ data: 'b', neighbor: [Function] }
{ data: 'a', neighbor: [Function] }
```

### Early

Export first, then import. Does work.
`node early/index.js`
```
{ data: 'a', neighbor: { data: 'b', neighbor: [Circular] } }
{ data: 'b', neighbor: { data: 'a', neighbor: [Circular] } }
{ data: 'a', neighbor: { data: 'b', neighbor: [Circular] } }
```

### Hoist

Export first, then import. Like `early/`, but with function hoisting.
`node hoist/index.js`
```
{ data: 'a' }
{ data: 'b' }
{ data: 'a' }
```