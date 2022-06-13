//reading text file 
// Requiring fs module in which
// readFile function is defined.
const fs = require('fs')

const app ={}

app.quotes = (textfile)=>{
const readfile = fs.readFileSync( textfile, 'utf-8')

const arrayOfQoutes = readfile.split(/\r?\n/)

return arrayOfQoutes;
}


// app.readfile =(textfile)=>{ fs.readFile( textfile, 'utf-8', (err, data) => {
//     const array = []
//     if (err){
//         throw err;
//     }else{
//         //console.log(data)
//         //return data;
//         array.push(data); 
//     }
//     return array ;
// })}

//app.readfile('./amarttya.txt')



module.exports = app ;