const path = require('path')
const fs = require('fs')

let chirps = [
    {
        chirp: "Hi this is the 1st chirp."
    },
    {
        chirp: "Hi again, this a 2nd chirp."
    },
    {
        chirp: "Ohh, hey this is a 3rd chirp."
    },
    {
        chirp: "Come on man, this is the 4th chirp!"
    },
    {
        chirp: "SOB, this is the last damn chirp."
    }
]

// ======= writting chirps into a .json file
let dataPath = path.join(__dirname, '../chirps.json')

fs.writeFile(dataPath, JSON.stringify(chirps,null,2),(err) => {
    if (err)console.log(err)
    console.log('Koniec!')
})

//========== Adding chirp into array =================

// fs.readFile(dataPath, (err, data) => {
//     let chirps = JSON.parse(data);
//     console.log(chirps)
//     chirps.push({ chirp: 'This is better be the last chirp.' })

//     fs.writeFile(dataPath, JSON.stringify(chirps, null, 2), (err) => {
//         if (err) console.log(err)
//         console.log('koniec!')
//     })

// })

console.log('test')