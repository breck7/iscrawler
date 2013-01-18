var isCrawler = require('./iscrawler.js')

// false
console.log(isCrawler('chrome'))

// true
console.log(isCrawler('crawler'))

// true
console.log(isCrawler('bot'))

console.log(isCrawler(undefined))
