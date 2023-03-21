//Callbacks

const makeUpperCase = (value) => {
    console.log(value.toUpperCase())
}

const reverseString = (value) => {
    console.log(value.split('').reverse().join(''));
}

//this function is taking 2 parameters, a name and a callback function!

const handleName = (name, cb) => {
    const fullName = `${name} Anderson`
    cb(fullName)
}

handleName('Devante', makeUpperCase)
handleName('Devante', reverseString)

