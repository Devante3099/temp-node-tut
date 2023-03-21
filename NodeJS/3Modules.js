//CommonJS, every file is module (by default)
//Modules - Encapsulated code (we only share minimum)

const names = require('./4names');
const sayHi = require('./5Utils');

const dataSix = require('./6altFlavor');

require('./7MindGrenade');



//accessing the spacific value in the object
//sayHi(names.fluffy)
//sayHi(names.meow)