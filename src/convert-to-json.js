const fs = require('fs')
const fakeData = require('./fakeData')

Object.keys(fakeData).forEach(key => {
    fs.writeFileSync(
        `${key}.json`,
        JSON.stringify(fakeData[key]),
        'utf-8',
    );
});
console.log("Done!")