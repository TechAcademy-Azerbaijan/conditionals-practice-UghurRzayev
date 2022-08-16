const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
    let a = parseInt(result.input)
    let b = parseInt(a**3+a*5)
    let c = parseInt(a**2-2*a+4)
    if (-10000 <= a&&a <= 10000) {
        if (a>=10) {
            console.log(b);
        } else if (a<10) {
            console.log(c);
        }
    } else {
        console.log("ERROR");
    }
  
});
