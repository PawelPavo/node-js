const path = require('path');
const fs = require('fs');
const rp = require('request-promise');

rp('https://www.reddit.com/r/popular.json')
    .then(rawData => {
        let articles = JSON.parse(rawData)
        articles.data.children.forEach(article => {
            if (
                path.extname(article.data.url) === '.jpg' ||
                path.extname(article.data.url) === '.gif' ||
                path.extname(article.data.url) === '.png') {
                let dataPath = path.join(__dirname, `downloads/${article.data.id + path.extname(article.data.url)}`)
                rp(article.data.url, { encoding: 'base64' })
                    .then(picture => {
                        fs.writeFile(dataPath, picture, { encoding: 'base64' }, (err) => {
                            if (err) console.log(err)
                            console.log('Got a picture')
                        })
                    })
            }
        })

    }) 
