const fs = require('fs')

fs.appendFile('./app-4/text.txt', 'Hello world', (err)=>{
  err === true ? console.log(err) : console.log('success')
})

fs.readFile('./app-4/text.txt', 'utf8', (err)=>{
  err ? console.log(err) : console.log('Success!')
})

fs.writeFile('./app-4/text.txt', 'hey hey hey', (err => {
  err ? console.log(err) : console.log('overwritten')
}))

fs.unlink('./app-4/text.txt', (err => err ? console.log(err) : console.log('deleted')))