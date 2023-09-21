const fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path');

// Read File - Option with directory
fs.readFile('./files/starter.txt', 'utf-8', (err, data) => {
    if (err) throw err;
    console.log(data);
    console.log(data.toString());
})

// Read File - Option with path
fs.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data)
})

// WriteFile
fs.writeFile(path.join(__dirname, 'files', 'reply.txt'), 'Nice to meet you!', (err) => {
    if (err) throw err;
    console.log('Write completed')
})
// AppendFile
fs.appendFile(path.join(__dirname, 'files', 'reply.txt'), 'Testing text.', (err) => {
    if (err) throw err;
    console.log('Append completed')
})

//Promises
const fileOps = async () => {
    try {
        const data = await fsPromises.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf-8');
        await fsPromises.unlink(path.join(__dirname, 'files', 'starter.txt'))
        await fsPromises.writeFile(path.join(__dirname, 'files', 'promiseWrite.txt'), data);
        await fsPromises.appendFile(path.join(__dirname, 'files', 'promiseWrite.txt'), '\n\nNice to meet you!');
        await fsPromises.rename(path.join(__dirname, 'files', 'promiseWrite.txt'), path.join(__dirname, 'files', 'promiseComplete.txt' ));
        const newData = await fsPromises.readFile(path.join(__dirname, 'files', 'promiseComplete.txt'), 'utf8');
        console.log(newData)
    } catch(err) {
        console.log(err)
    }
}
fileOps();







// exit on uncaught error
process.on('uncaughtException', err => {
    console.log(`There was an uncaught error: ${err}`);
    process.exit(1);
})