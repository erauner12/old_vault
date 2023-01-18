```dataviewjs
const {CoolString} = customJS
dv.list(dv.pages().file.name.map(n => CoolString.coolify(n)))
```