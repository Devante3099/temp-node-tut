//fs module! FILE SYSTEM

const { readFileSync, writeFileSync } = require('fs');

const first = readFileSync('./content/first.txt', 'utf8')

const second = readFileSync('./content/second.txt', 'utf8')


//creats a new file takes 2 parameters a path, then the contents of the page
writeFileSync('./content/result-sync.txt', `${first}, ${second}`);