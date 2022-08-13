const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
    let input = result.input
    let numbers = input.split(',')
    let a = parseInt(numbers[0])
    let b = parseInt(numbers[1])
    let c = parseInt(numbers[2])
    if (a,b,c<10**9) {
        if (a>=b&&a<=c) {
            console.log("IN");
        } else {
            console.log("OUT");
        }
    } 
    
  
});
