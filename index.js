//creating an app generating random qute 

const read_File = require('./helper/readFile');
const random_Number = require('./helper/randomNumber');

const rfd = read_File.quotes('./amarttya.txt');
//console.log(quote)
const app = {}

app.number = random_Number.randomNumber(3);
//console.log(number);



app.config = {
    timeBetweenQuoutes : 1000
}

//app.generating = ()=>{
// const generatingQuotes = (quotes , number)=>{
//     console.log(quotes[number]);
// }
// //console.log(random_Number.randomNumber())


// const quote = generatingQuotes(rfd , number);
//console.log(quote);
//}

 const infinityLoop = (time)=>{
    setInterval(()=>{
        const generatingQuotes = (quotes , number)=>{
            console.log(quotes[number]);
        } 
        const quote = generatingQuotes(rfd , number);
        console.log(quote);
    } , time);
 }

infinityLoop( 1000);