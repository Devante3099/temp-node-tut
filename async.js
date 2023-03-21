// async / await
// async must be present, always returns a promise
// await waits until promise is setteled
// error handling - try/catch block



const example = async () => {
    return 'hello there'
}

const someFunc = async () => {
    const result = await example();
    console.log(result)
}

//console.log(example())

//someFunc()


const users = [
    { id: 1, name: 'Devante' },
    { id: 2, name: 'Reed' },
    { id: 3, name: 'Koami' }
]

const articles = [
    { userId: 1, articles: ['one', 'two', 'three'] },
    { userId: 2, articles: ['four', 'five'] },
    { userId: 3, articles: ['six', 'seven', 'eight', 'nine'] }
]



const getUser = (name) => {
    return new Promise((resolve, reject) => {
        const user = users.find((user) => user.name === name)

        if (user) {
            return resolve(user)
        } else {
            reject(`No such user with name : ${name}`)
        }
    })
}

const getArticles = (userId) => {
    return new Promise((resolve, reject) => {
        const userArticles = articles.find((user) => user.userId === userId)

        if (userArticles) {
            return resolve(userArticles.articles)
        } else {
            reject('wrong ID')
        }
    })
}

const getData = async () => {
    try {
        const user = await getUser('Reed')
        if (user) {
            const articles = await getArticles(user.id)
            console.log(articles);
        }
    } catch (error) {
        console.log(error)
    }


}
getData()

//getUser('Devante')
   // .then((user) => getArticles(user.id)).then((articles) => console.log(articles))
  //  .catch(err => console.log(err))