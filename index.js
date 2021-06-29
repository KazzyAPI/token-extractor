const fs = require('fs');
const tokens = fs.readFileSync('./extract.txt', 'utf-8');
const split = tokens.split('\n');
let token = '';
split.forEach(element => {
    if(element.startsWith('N') || element.startsWith('M') ||element.startsWith('O')) {
        if(token != element) {
            if(element.length < 50) return;
            console.log(element);
            fs.appendFile('Extracted strings.txt', `${element}\n`, async err => {
                if(err) throw err;
            })
            token = element;
        }
    }
});
