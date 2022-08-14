const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
    let a = parseInt(result.input)
    let b = parseInt(a/1000)//1
    let c = parseInt(a%1000)
    let d = parseInt(c/100)//2
    let e = parseInt(c%100)
    let f = parseInt(e/10)//3
    let g = parseInt(e%10)//4
    if (b>0&&b<10) {
        if (b==d&&d==f||b==d&&d==g||b==f&&f==g||f==d&&d==g) {
            console.log("YES");
        } else {
            console.log("NO");
        }
    } else {
        console.log("ERROR");
    }
  
});
