const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
    let a = parseInt(result.input)
    let b = parseInt(a/100)
    let c = parseInt(a%1000)
    let d = parseInt(c/10)
    let e = parseInt(a%100)
    if (b==37||d==37||e==37) {
        console.log("YES");
    } else {
        console.log("NO");
    }
  
});
