// 1 // npm - global command, comes with node
// npm --version

// 2 //local dependency - use it only in this particular project
// npm i <packageName>

// 3 //global dependency - use it in any project
//npm install -g <packageName>
//sudo npm install -g <packageName> (mac)


// 4 //package.json - manifest file (stores important info about project/package)'
//manual approach (create package.json in the root, create properties etc)
//npm init -y


const _ = require('lodash')

const items = [1, [2, [3, [4]]]]

const newItems = _.flattenDeep(items)

console.log(newItems)