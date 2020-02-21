const path = require('path');
const fs = require('fs');
const rp = require('request-promise');

rp('https://www.reddit.com/r/popular.json')
    .then(raw => {
        let articles = JSON.parse(raw)
        let articleData = articles.data.children.map(articles => {
            return {
                title: articles.data.title,
                author: articles.data.author,
                url: articles.data.url
            }
        })

        let dataPath = path.join(__dirname, 'popular-articles.json')

        fs.writeFile(dataPath, JSON.stringify(articleData, null, 2), (err) => {
            if (err) console.log(err)
            console.log('It is done')
        })
    })