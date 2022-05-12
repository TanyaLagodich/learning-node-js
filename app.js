const fs = require('fs');

fs.readFile('./text.txt', 'utf8', (error, data) => {

    fs.mkdir('./files', () => {
        fs.writeFile('./files/copyText.txt', `${data} new text`, (error) => {
            if (error) {
                console.log(error);
            }
        });
    })

});

setTimeout(() => {
    if (fs.existsSync('./files/copyText.txt')) {
        fs.unlink('./files/copyText.txt', () => {});
    }
    
    fs.unlink('./copyText.txt', () => {});
    fs.rmdir('./files', () => {});
}, 4000);