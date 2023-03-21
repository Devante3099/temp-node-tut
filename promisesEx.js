//Promises Ex
// what we want...

//.first turn red after one second
//.second turn blue 3 seconds after
//.third turn green 2 seconds after
//in sequence

const btn = document.querySelector('.btn')

btn.addEventListener('click', () => {
    addColor(1000, '.first', 'red')
        .then(() => addColor(3000, '.second', 'blue'))
        .then(() => addColor(2000, '.third', 'green'))
        .catch((err) => console.log(err))

})

const addColor = (time, selector, color) => {
    const element = document.querySelector(selector)
    return new Promise((reslove, reject) => {
        if (element) {
            setTimeout(() => {
                element.style.color = color
                reslove()
            }, time)
        } else {
            reject(`there is no such selector : ${selector}`)
        }
    })
}







